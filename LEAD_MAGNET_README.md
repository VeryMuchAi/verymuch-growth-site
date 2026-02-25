# Cómo duplicar un Lead Magnet en 5 minutos

Este proyecto usa un sistema de configuración declarativo. Cada lead magnet
es un **objeto de configuración** + **una ruta Next.js**. No tienes que tocar
componentes UI para crear nuevas páginas.

---

## Estructura clave

```
src/
├── lib/
│   └── lead-magnet.ts          ← tipos + todas las configs de lead magnets
├── components/
│   ├── LeadMagnetPage.tsx      ← layout completo (server component)
│   └── LeadMagnetForm.tsx      ← formulario + success state (client component)
└── app/
    └── signals-linkedin/
        └── page.tsx            ← ejemplo de uso
```

---

## Paso a paso para un nuevo lead magnet

### 1. Añade la configuración en `src/lib/lead-magnet.ts`

Copia el bloque `signalsLinkedinConfig` y crea uno nuevo:

```typescript
export const miNuevoLeadMagnetConfig: LeadMagnetConfig = {
  slug: "mi-lead-magnet",     // identificador enviado a GHL
  source: "linkedin",         // utm_source por defecto
  campaign: "mi-campaña",

  seo: {
    title: "Mi Lead Magnet | VeryMuch.ai",
    description: "Descripción para Google y LinkedIn.",
    ogTitle: "Título para LinkedIn/Twitter cards",
    ogDescription: "Descripción para redes.",
  },

  content: {
    badge: "Guía Gratuita",
    headline: "Título principal de la landing",
    highlightWords: "palabras con gradiente",   // substring exacto del headline
    subheadline: "Descripción breve del beneficio.",
    bullets: [
      "Punto 1",
      "Punto 2",
      "Punto 3",
    ],
    includes: [
      { icon: "📦", title: "Qué incluye 1", description: "Descripción corta." },
    ],
    techStack: [
      { name: "Herramienta", role: "Qué hace.", url: "https://..." },
    ],
    form: {
      fields: [
        { name: "firstName", label: "Nombre", type: "text", placeholder: "Tu nombre", required: true },
        { name: "email", label: "Email", type: "email", placeholder: "tu@empresa.com", required: true },
        { name: "company", label: "Empresa (opcional)", type: "text", placeholder: "Tu empresa" },
      ],
      ctaLabel: "Recibir la Guía",
      microcopy: "Gratis. Sin spam.",
    },
    success: {
      title: "¡Tu guía está lista! 🎉",
      description: "Accede ahora al recurso completo.",
      ctaLabel: "Abrir la guía →",
    },
  },
};
```

### 2. Crea la ruta en `src/app/`

```bash
mkdir src/app/mi-lead-magnet
```

Crea `src/app/mi-lead-magnet/page.tsx`:

```typescript
import type { Metadata } from "next";
import { miNuevoLeadMagnetConfig } from "@/lib/lead-magnet";
import LeadMagnetPage from "@/components/LeadMagnetPage";

const { seo } = miNuevoLeadMagnetConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.ogTitle ?? seo.title,
    description: seo.ogDescription ?? seo.description,
    type: "website",
    siteName: "VeryMuch.ai",
  },
};

export default function MiLeadMagnetPage() {
  const guideUrl = process.env.NOTION_URL_MI_LEAD_MAGNET ?? "#";
  return <LeadMagnetPage config={miNuevoLeadMagnetConfig} guideUrl={guideUrl} />;
}
```

### 3. Añade la URL de Notion en `.env.local`

```
NOTION_URL_MI_LEAD_MAGNET=https://notion.so/tu-pagina-publica
```

### 4. Listo

La ruta `/mi-lead-magnet` ya está activa con:
- Diseño premium dark con brand tokens
- Formulario con validación
- Submit a GHL webhook
- Estado de éxito con link a Notion
- SEO + OG tags para LinkedIn

---

## Variables de entorno

| Variable | Descripción | Requerido |
|---|---|---|
| `GHL_WEBHOOK_URL` | Webhook de GoHighLevel para recibir leads | Para producción |
| `NOTION_URL` | URL pública de Notion para signals-linkedin | Para producción |
| `NEXT_PUBLIC_SITE_URL` | URL del sitio para metadatos OG | Sí |

---

## GHL Payload shape

El route handler `POST /api/lead` envía al webhook:

```json
{
  "first_name": "...",
  "email": "...",
  "company": "...",
  "lead_magnet": "signals-linkedin",
  "source": "linkedin",
  "campaign": "signals-linkedin"
}
```

Campos opcionales se omiten si están vacíos.
