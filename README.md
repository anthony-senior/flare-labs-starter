# Flare Labs Starter

Next.js + Sanity + Vercel starter template for client projects.

## Setup

1. Clone this repo
2. `npm install`
3. Create a Sanity project at [sanity.io/manage](https://sanity.io/manage)
4. Copy `.env.local` and fill in your Sanity project ID
5. `npm run dev` to start locally
6. Visit `/studio` to access the Sanity CMS dashboard

## Stack

- **Next.js 16** - React framework
- **Sanity** - Headless CMS (client-editable content)
- **Tailwind CSS 4** - Styling
- **Vercel** - Hosting & deployment
- **TypeScript** - Type safety

## Deployment

Push to GitHub. Vercel auto-deploys on every push.

## Content Schemas

- **Site Settings** - Site name, logo, navigation, footer
- **Pages** - Generic pages with hero + body content
- **Posts** - Blog posts with featured image, excerpt, body
