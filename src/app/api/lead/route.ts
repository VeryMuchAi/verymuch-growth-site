import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeadBody {
  // New lead-magnet format (signals-linkedin and future pages)
  first_name?: string;
  // Legacy format (ventas-general)
  name?: string;
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

  // 2. Validate — accept first_name (new) or name (legacy)
  const resolvedName = payload.first_name?.trim() || payload.name?.trim();
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

  // 3. Build GHL payload
  const ghlPayload: Record<string, string | undefined> = {
    first_name: resolvedName,
    email,
    company: payload.company?.trim() || undefined,
    // New format fields
    lead_magnet: payload.lead_magnet || payload.leadMagnetSlug || undefined,
    source:   payload.source || payload.utm_source || undefined,
    campaign: payload.campaign || payload.utm_campaign || undefined,
    // Legacy UTM passthrough
    utm_medium:  payload.utm_medium || undefined,
    utm_term:    payload.utm_term || undefined,
    utm_content: payload.utm_content || undefined,
  };

  // Remove undefined keys before sending
  const cleanPayload = Object.fromEntries(
    Object.entries(ghlPayload).filter(([, v]) => v !== undefined)
  );

  // 4. Send to GHL webhook
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const ghlRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanPayload),
      });

      if (!ghlRes.ok) {
        console.error("[api/lead] GHL webhook error:", ghlRes.status, await ghlRes.text());
      }
    } catch (err) {
      console.error("[api/lead] GHL webhook unreachable:", err);
      // Do not surface GHL errors to the client — lead was captured
    }
  } else {
    console.log("[api/lead] GHL_WEBHOOK_URL not set — mock payload:", cleanPayload);
  }

  return NextResponse.json<ApiResponse>({ ok: true });
}
