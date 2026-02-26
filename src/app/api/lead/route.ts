import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeadBody {
  // Primary format (signals-linkedin and future lead magnets)
  name?: string;
  // Legacy format (kept for backward-compat)
  first_name?: string;
  email: string;
  company?: string;
  lead_magnet?: string;
  source?: string;
  campaign?: string;
  // Legacy UTM fields
  leadMagnetSlug?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

interface ApiResponse {
  ok: boolean;
  message?: string;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * Splits a full name string into firstName (first word) and lastName (remainder).
 * "Edwin Moreno Marún" → { firstName: "Edwin", lastName: "Moreno Marún" }
 * "Edwin"              → { firstName: "Edwin", lastName: "" }
 */
function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] ?? "";
  const lastName  = parts.slice(1).join(" ");
  return { firstName, lastName };
}

// ─── POST /api/lead ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json<ApiResponse>(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const payload = body as Partial<LeadBody>;

  // ── Log incoming payload (server-only, no secrets) ──────────────────────────
  console.log("[api/lead] incoming payload:", {
    name:        payload.name,
    first_name:  payload.first_name,
    email:       payload.email,
    company:     payload.company,
    lead_magnet: payload.lead_magnet,
    source:      payload.source,
    campaign:    payload.campaign,
  });

  // 2. Validate — accept name (new) or first_name (legacy)
  const resolvedName = payload.name?.trim() || payload.first_name?.trim();
  if (!resolvedName) {
    return NextResponse.json<ApiResponse>(
      { ok: false, message: "El nombre es obligatorio." },
      { status: 422 }
    );
  }

  const email = payload.email?.trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json<ApiResponse>(
      { ok: false, message: "Introduce un correo electrónico válido." },
      { status: 422 }
    );
  }

  // 3. Derive firstName / lastName from the full name
  const { firstName, lastName } = splitName(resolvedName);

  const company    = payload.company?.trim() || undefined;
  const lead_magnet = payload.lead_magnet || payload.leadMagnetSlug || undefined;
  const source     = payload.source || payload.utm_source || undefined;
  const campaign   = payload.campaign || payload.utm_campaign || undefined;

  // 4. Build GHL payload
  //    GHL Create Contact expects camelCase (firstName, lastName).
  //    We also include snake_case aliases and the original `name` for compatibility
  //    with custom fields / other webhook consumers.
  const ghlPayload: Record<string, string | undefined> = {
    // ── GHL native contact fields (camelCase) ──
    firstName,
    lastName:  lastName || undefined,
    email,
    // ── Snake_case aliases (backwards compat) ──
    first_name: firstName,
    last_name:  lastName || undefined,
    // ── Original full name ──
    name:      resolvedName,
    // ── Lead-magnet metadata ──
    company,
    lead_magnet,
    source,
    campaign,
    // ── Legacy UTM passthrough ──
    utm_medium:  payload.utm_medium  || undefined,
    utm_term:    payload.utm_term    || undefined,
    utm_content: payload.utm_content || undefined,
  };

  // Remove undefined keys before sending
  const cleanPayload = Object.fromEntries(
    Object.entries(ghlPayload).filter(([, v]) => v !== undefined)
  );

  // ── Log outgoing GHL payload (no webhook URL in logs) ───────────────────────
  console.log("[api/lead] GHL payload to send:", cleanPayload);

  // 5. Send to GHL webhook
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const ghlRes = await fetch(webhookUrl, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(cleanPayload),
      });

      if (!ghlRes.ok) {
        console.error("[api/lead] GHL webhook responded with error:", ghlRes.status);
      } else {
        console.log("[api/lead] GHL webhook OK — status:", ghlRes.status);
      }
    } catch (err) {
      // GHL is unreachable — lead was still captured client-side
      console.error("[api/lead] GHL webhook unreachable:", (err as Error).message);
    }
  } else {
    console.log("[api/lead] GHL_WEBHOOK_URL not set — mock mode, no webhook fired.");
  }

  return NextResponse.json<ApiResponse>({ ok: true });
}
