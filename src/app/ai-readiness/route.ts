import { readFileSync } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  const htmlPath = path.join(process.cwd(), "public", "arri.html");
  let html = readFileSync(htmlPath, "utf-8");

  // Inject public Supabase credentials so the client-side SDK can save directly
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

  html = html.replace(
    "var _supabaseUrl = window.__SUPABASE_URL__ || '';",
    `var _supabaseUrl = window.__SUPABASE_URL__ || '${supabaseUrl}';`
  );
  html = html.replace(
    "var _supabaseKey = window.__SUPABASE_ANON_KEY__ || '';",
    `var _supabaseKey = window.__SUPABASE_ANON_KEY__ || '${supabaseAnonKey}';`
  );

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
