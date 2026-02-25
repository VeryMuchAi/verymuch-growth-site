export interface LeadPayload {
  name: string;
  email: string;
  leadMagnetSlug?: string;
  // UTM tracking
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface LeadResponse {
  ok: boolean;
  message?: string;
}
