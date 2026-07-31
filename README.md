# Engsolutions Portfolio

A personal engineering portfolio site — dark editorial design, scroll-triggered
motion, and a working contact form.

**Live:** [engsolutions-portfolio.netlify.app](https://engsolutions-portfolio.netlify.app)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) for scroll reveals, staggered entrances, and magnetic hover buttons
- [Resend](https://resend.com) for delivering contact-form submissions by email

## Sections

Hero, Philosophy (about), Featured Projects (with a blueprint detail dialog per
project), Expert Solutions (services), Client Endorsements (testimonials), and
a Contact form with a global footer.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form setup

The contact form emails submissions via Resend instead of storing them in a
database. To make it work locally:

1. Create a free account at [resend.com/signup](https://resend.com/signup) (no card required).
2. In the dashboard, go to **API Keys** → **Create API Key**.
3. Create a `.env.local` file in the project root with:

   ```
   RESEND_API_KEY=your-api-key
   CONTACT_TO_EMAIL=you@example.com
   ```

   `CONTACT_TO_EMAIL` is where submissions get sent. The free Resend tier
   sends from the shared `onboarding@resend.dev` address, so no custom domain
   verification is required.

Without these variables the form fails gracefully with an error message
instead of crashing.

## Scripts

| Command         | Description                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)   |
| `npm run build` | Production build                   |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Deployment

Deployed on [Netlify](https://netlify.com), which auto-detects the Next.js
App Router and API routes with zero extra config. Set `RESEND_API_KEY` and
`CONTACT_TO_EMAIL` as environment variables on the Netlify project before
deploying.
