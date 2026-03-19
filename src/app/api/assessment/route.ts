import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const ROUTE_VERSION = "v6";

// ── Webhook destination ───────────────────────────────────────────────────────
// Prioridad:
//   1. ARRI_WEBHOOK_URL  → tu N8N (recomendado, configúralo en Vercel env vars)
//   2. GHL_WEBHOOK_URL   → fallback a GHL directo (legacy)
//   3. URL hardcodeada   → último recurso para no romper nada
//
// Para activar N8N: añade en Vercel → Settings → Environment Variables:
//   ARRI_WEBHOOK_URL = https://tu-n8n.com/webhook/arri-readiness-test
//
const WEBHOOK_URL =
  process.env.ARRI_WEBHOOK_URL ??
  process.env.GHL_WEBHOOK_URL ??
  "https://services.leadconnectorhq.com/hooks/hT7IkQyhnNOaWFU3e34M/webhook-trigger/3df718cd-e0d9-45cf-814d-a95750b0ba55";

// ─────────────────────────────────────────────────────────────────────────────

function asString(v: unknown): string | null {
  if (typeof v === "string") return v.trim() || null;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  return null;
}

function asNumber(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function pickFirstString(...vals: unknown[]): string | null {
  for (const v of vals) {
    const s = asString(v);
    if (s) return s;
  }
  return null;
}

async function postWebhook(body: Record<string, unknown>) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    const text = await res.text().catch(() => "");
    return {
      ok: res.ok,
      status: res.status,
      response: text?.slice(0, 500) || "",
    };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return { ok: false, status: 0, response: msg };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: Request) {
  console.log(`ROUTE RUNNING ${ROUTE_VERSION} — POST /api/assessment`);
  console.log(`${ROUTE_VERSION} Webhook destination: ${WEBHOOK_URL.substring(0, 50)}…`);

  // ── 1. Parse body ─────────────────────────────────────────────
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    console.error(`${ROUTE_VERSION} JSON parse failed`);
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  console.log(`${ROUTE_VERSION} payload keys:`, Object.keys(payload));

  // ── 2. Validate required fields ───────────────────────────────
  const total = payload.total ?? payload.totalScore;
  const levelName = payload.level ?? payload.levelName;

  if (total === null || total === undefined) {
    return NextResponse.json(
      { ok: false, error: "Missing total score (total or totalScore)" },
      { status: 400 }
    );
  }

  if (levelName === null || levelName === undefined) {
    return NextResponse.json(
      { ok: false, error: "Missing level name (level or levelName)" },
      { status: 400 }
    );
  }

  // ── 3. Env vars ───────────────────────────────────────────────
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    console.error(`${ROUTE_VERSION} MISSING env: NEXT_PUBLIC_SUPABASE_URL`);
    return NextResponse.json(
      { ok: false, error: "Server misconfigured (missing URL)" },
      { status: 500 }
    );
  }

  if (!serviceKey) {
    console.error(`${ROUTE_VERSION} MISSING env: SUPABASE_SERVICE_ROLE_KEY`);
    return NextResponse.json(
      { ok: false, error: "Server misconfigured (missing key)" },
      { status: 500 }
    );
  }

  const keyPrefix = serviceKey.substring(0, 10);
  console.log(
    `${ROUTE_VERSION} Supabase URL: ${url.substring(0, 30)}…  key prefix: ${keyPrefix}…`
  );

  // ── 4. Build row (exact column names from arri_submissions) ───
  const row = {
    email: (payload.email as string) || null,
    industry: (payload.industry as string) || null,
    company_size: (payload.companySize as string) || null,
    lang: (payload.lang as string) || "es",
    total_score: asNumber(total),
    level_name: String(levelName),
    level_index: asNumber(payload.levelIndex),
    bottleneck_dimension: (payload.bottleneckDimension as string) || null,
    recommended_system:
      (payload.sys as string) ||
      (payload.recommendedSystem as string) ||
      null,
    dimension_scores: payload.dimScores || payload.dimensionScores || null,
    raw_payload: payload,
    // created_at uses Supabase default now()
  };

  console.log(
    `${ROUTE_VERSION} row to insert:`,
    JSON.stringify(row).substring(0, 300)
  );

  // ── 5. Insert into Supabase ───────────────────────────────────
  try {
    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false },
    });

    const { data, error } = await supabase
      .from("arri_submissions")
      .insert([row])
      .select("id, created_at")
      .single();

    if (error) {
      console.error(`${ROUTE_VERSION} Supabase INSERT error:`, {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });
      return NextResponse.json(
        {
          ok: false,
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        },
        { status: 500 }
      );
    }

    console.log(
      `${ROUTE_VERSION} ✅ INSERT OK — id: ${data.id}, created_at: ${data.created_at}`
    );

    // ── 6. Post to webhook (N8N o GHL, non-blocking failure) ────
    const name = pickFirstString(
      payload.name,
      payload.fullName,
      payload.contactName,
      payload.firstName
    );

    const phone = pickFirstString(payload.phone, payload.whatsapp, payload.mobile);
    const company = pickFirstString(payload.company, payload.companyName);
    const website = pickFirstString(payload.website, payload.url, payload.companyUrl);

    const webhookPayload = {
      // Campos de contacto
      name,
      email: asString(payload.email),
      phone,
      company,
      website,

      // Resultados del test
      score: asNumber(total),
      total_score: asNumber(total),
      level_name: String(levelName),
      level_index: asNumber(payload.levelIndex),
      bottleneck_dimension: asString(payload.bottleneckDimension),
      recommended_system:
        asString(payload.sys) || asString(payload.recommendedSystem),

      // Trazabilidad
      source: "AI Readiness Test",
      lead_magnet: "ai-readiness-test", // ← para el Switch de N8N
      submission_id: data.id,
      submission_created_at: data.created_at,
      lang: row.lang,

      // Dimension scores para N8N si quiere procesar por dimensión
      dimension_scores: payload.dimScores || payload.dimensionScores || null,
    };

    const webhookResult = await postWebhook(webhookPayload);

    if (webhookResult.ok) {
      console.log(`${ROUTE_VERSION} ✅ Webhook OK`, {
        status: webhookResult.status,
        destination: WEBHOOK_URL.includes("n8n") ? "N8N" : "GHL",
      });
    } else {
      console.warn(`${ROUTE_VERSION} ⚠️ Webhook FAILED`, {
        status: webhookResult.status,
        response: webhookResult.response,
        destination: WEBHOOK_URL.substring(0, 50),
      });
      // NO fallamos el request: Supabase ya guardó, no queremos perder leads.
    }

    // ── 7. Response ──────────────────────────────────────────────
    return NextResponse.json(
      {
        ok: true,
        id: data.id,
        created_at: data.created_at,
        webhook_ok: webhookResult.ok,
        webhook_status: webhookResult.status,
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error(`${ROUTE_VERSION} Unexpected error:`, msg);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}