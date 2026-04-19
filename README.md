# Southern Africa Overlanding Storage (SAOS) — Website

A production-ready website for a vehicle storage business, built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Sanity CMS**. Hosted on **Vercel**.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Sanity CMS](#sanity-cms)
4. [Environment Variables](#environment-variables)
5. [Getting Started (Local Dev)](#getting-started-local-dev)
6. [Deploying to Vercel](#deploying-to-vercel)
7. [Current Build State](#current-build-state)
8. [Handoff Notes for AI Assistants](#handoff-notes-for-ai-assistants)

---

## Tech Stack

| Layer        | Technology                        | Version   |
|--------------|-----------------------------------|-----------|
| Framework    | Next.js (App Router)              | 16.x      |
| UI Library   | React                             | 19.x      |
| Language     | TypeScript                        | 5.x       |
| Styling      | Tailwind CSS                      | 4.x       |
| CMS          | Sanity                            | 3.x       |
| CMS Bridge   | next-sanity                       | 12.x      |
| Hosting      | Vercel                            | —         |
| Node.js      | v25.9.0 (via Homebrew)            | 25.x      |
| Package Mgr  | npm                               | 11.x      |

---

## Project Structure

```
saos-website/
├── public/                          # Static assets (images, favicon, etc.)
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── (studio)/                # Route group — Sanity Studio (no shared layout)
│   │   │   └── studio/
│   │   │       └── [[...tool]]/
│   │   │           ├── page.tsx     # Renders embedded Sanity Studio at /studio
│   │   │           └── loading.tsx  # Studio loading state
│   │   ├── api/
│   │   │   └── revalidate/
│   │   │       └── route.ts         # Webhook endpoint for Sanity on-demand ISR
│   │   ├── layout.tsx               # Root layout (HTML shell, metadata)
│   │   ├── page.tsx                 # Homepage
│   │   └── globals.css              # Global styles / Tailwind directives
│   ├── components/
│   │   └── ui/                      # Reusable presentational components (add here)
│   ├── sanity/
│   │   ├── config.ts                # Sanity Studio configuration (plugins, schema)
│   │   ├── schemas/
│   │   │   ├── index.ts             # Exports all schema types
│   │   │   ├── storageUnit.ts       # Schema: vehicle storage unit listings
│   │   │   ├── page.ts              # Schema: generic CMS-driven pages
│   │   │   └── siteSettings.ts      # Schema: global site settings (singleton)
│   │   └── lib/
│   │       ├── client.ts            # Configured Sanity client (read)
│   │       ├── image.ts             # Sanity image URL builder helper
│   │       └── queries.ts           # All GROQ queries (centralised)
│   └── types/
│       └── sanity.ts                # TypeScript interfaces for Sanity documents
├── .env.local.example               # Environment variable template (copy → .env.local)
├── next.config.ts                   # Next.js config (Sanity CDN image domains)
├── vercel.json                      # Vercel deployment configuration
├── tsconfig.json                    # TypeScript config (@/* path alias → src/*)
└── package.json
```

---

## Sanity CMS

### Studio URL

The Sanity Studio is embedded in the Next.js app and accessible at:

```
http://localhost:3000/studio          (development)
https://your-domain.vercel.app/studio (production)
```

### Schema Types

#### `storageUnit`
Represents an individual vehicle/overlanding storage unit available for rent.

| Field           | Type          | Notes                                      |
|-----------------|---------------|--------------------------------------------|
| `name`          | string        | Required. Used as page title and slug base |
| `slug`          | slug          | Required. Auto-generated from name         |
| `size`          | number        | Floor area in m²                           |
| `pricePerMonth` | number        | Price in ZAR                               |
| `isAvailable`   | boolean       | Default: true                              |
| `features`      | array[string] | e.g. "24/7 Access", "CCTV"                 |
| `description`   | block content | Rich text description                      |
| `images`        | array[image]  | Each image has an `alt` text field         |

#### `page`
Generic CMS-driven page for content like About, Contact, FAQ.

| Field     | Type    | Notes                                |
|-----------|---------|--------------------------------------|
| `title`   | string  | Required                             |
| `slug`    | slug    | Required. Used as the URL path       |
| `order`   | number  | Controls nav menu order              |
| `seo`     | object  | metaTitle, metaDescription, ogImage  |
| `content` | blocks  | Rich text + image blocks             |

#### `siteSettings` (Singleton)
Global site configuration. Only one document of this type should exist in Sanity.

| Field            | Type   | Notes                                       |
|------------------|--------|---------------------------------------------|
| `siteName`       | string | Displayed in header / meta                  |
| `tagline`        | string | Hero tagline                                |
| `contactEmail`   | string |                                             |
| `contactPhone`   | string |                                             |
| `address`        | object | street, city, province, postalCode, country |
| `socialLinks`    | object | facebook, instagram, whatsapp               |
| `defaultSeo`     | object | Fallback SEO for all pages                  |

### GROQ Queries

All queries are centralised in `src/sanity/lib/queries.ts`. Import them by name:

```typescript
import { storageUnitsQuery, storageUnitBySlugQuery, siteSettingsQuery } from "@/sanity/lib/queries";
```

### CSV Import Readiness

The `storageUnit` schema is designed to accept CSV-imported data. When importing via CSV:
- Map columns to: `name`, `size`, `pricePerMonth`, `isAvailable`, `features` (semicolon-separated)
- Use the Sanity CLI or `@sanity/import` npm package
- `slug` will need to be generated from `name` during import

### On-Demand Revalidation (ISR)

Set up a Sanity webhook pointing to:
```
POST https://your-domain.vercel.app/api/revalidate?secret=YOUR_SECRET
```
The webhook body should include `_type` and `slug.current`. The handler revalidates the affected path automatically.

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
cp .env.local.example .env.local
```

| Variable                          | Where to get it                                              |
|-----------------------------------|--------------------------------------------------------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID`   | Sanity project dashboard → API → Project ID                  |
| `NEXT_PUBLIC_SANITY_DATASET`      | Usually `production`                                         |
| `NEXT_PUBLIC_SANITY_API_VERSION`  | Use `2024-01-01` or today's date                             |
| `SANITY_API_TOKEN`                | Sanity → API → Tokens → Add API Token (Editor role)         |
| `SANITY_REVALIDATE_SECRET`        | Generate with: `openssl rand -base64 32`                     |
| `NEXT_PUBLIC_SITE_URL`            | Your Vercel deployment URL                                   |

---

## Getting Started (Local Dev)

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/saos-website.git
cd saos-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and fill in your Sanity project credentials

# 4. Start the development server
npm run dev
# → App:    http://localhost:3000
# → Studio: http://localhost:3000/studio
```

---

## Deploying to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select this repository
4. In **Environment Variables**, add all variables from `.env.local.example`
5. Click **Deploy**

Vercel automatically detects Next.js and uses the settings in `vercel.json`.
Every `git push` to `main` triggers an automatic redeploy.

---

## Current Build State

**As of: 2026-04-19**

### What's complete
- [x] Next.js 16 App Router project scaffold (TypeScript, Tailwind CSS v4, ESLint)
- [x] Sanity packages installed (`next-sanity`, `@sanity/client`, `@sanity/image-url`)
- [x] Sanity Studio embedded at `/studio` route
- [x] Three Sanity schemas: `storageUnit`, `page`, `siteSettings`
- [x] Sanity client, image builder, and GROQ queries configured
- [x] TypeScript interfaces for all Sanity documents (`src/types/sanity.ts`)
- [x] On-demand ISR webhook handler (`/api/revalidate`)
- [x] Next.js config with Sanity CDN image domain allowlist
- [x] Vercel deployment config (`vercel.json`)
- [x] Environment variable template (`.env.local.example`)
- [x] This README

### What's next (not yet built)
- [ ] Homepage (`src/app/page.tsx`) — hero, features, CTA sections
- [ ] Storage listings page (`src/app/storage/page.tsx`)
- [ ] Storage unit detail page (`src/app/storage/[slug]/page.tsx`)
- [ ] Dynamic CMS page renderer (`src/app/[slug]/page.tsx`)
- [ ] Navigation / Header component (`src/components/ui/Header.tsx`)
- [ ] Footer component (`src/components/ui/Footer.tsx`)
- [ ] Contact form
- [ ] Create Sanity project at sanity.io and add credentials to `.env.local`
- [ ] Vercel deployment and custom domain setup

---

## Handoff Notes for AI Assistants

**Read this section if you are picking up this project mid-build.**

### Path Aliases
`@/*` maps to `src/*`. Always use `@/` imports, never relative `../../` paths.

### Routing Convention
This project uses the **App Router** (not Pages Router). All routes live under `src/app/`. The `(studio)` folder is a route group — it does not appear in the URL.

### Sanity Integration Pattern
1. Fetch data in **Server Components** using `sanityClient` from `@/sanity/lib/client`
2. Use named GROQ queries from `@/sanity/lib/queries` — do not write inline GROQ strings
3. Use `urlFor()` from `@/sanity/lib/image` for all Sanity image URLs
4. Type all Sanity data with interfaces from `@/types/sanity.ts`

### Key Architectural Decisions
- **No Sanity project has been created yet** — must run `npx sanity init` or create a project at sanity.io, then fill `.env.local`
- The Studio is embedded (not a separate repo) for simplified Vercel deployment
- ISR via webhooks is wired up but requires Vercel env vars and a Sanity webhook to be configured
- Tailwind CSS v4 is used — syntax differs from v3 (no `tailwind.config.js` for basic usage; use CSS variables)

### Do Not
- Do not move schemas outside of `src/sanity/schemas/`
- Do not write GROQ queries inline in page components — add them to `queries.ts`
- Do not add `"use client"` to data-fetching components — keep them as Server Components
- Do not commit `.env.local` — it is gitignored
