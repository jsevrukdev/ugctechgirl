# UGC Tech Girl

Personal portfolio for **Julia** ([@ugctechgirl](https://www.instagram.com/ugc.techgirl/)) — a Europe-based UGC creator filming in English and Russian for tech, skincare, AI tools, SaaS, and finance.

Live site: [https://jsevrukdev.github.io/ugctechgirl/](https://jsevrukdev.github.io/ugctechgirl/)

Contact: [ugcgirl@outlook.com](mailto:ugcgirl@outlook.com)

## Stack

Vite, React, TypeScript, Tailwind CSS v4. No backend.

## Local development

```bash
npm install
npm run prototype
```

Open [http://localhost:5173/](http://localhost:5173/).

The production build always shows **layout A** (cinematic studio). Locally you can still compare:

| Variant | Name | How |
| --- | --- | --- |
| A | Cinematic studio (live) | default, or `?variant=A` |
| B | Brand media kit | `?variant=B` |
| C | Community HQ | `?variant=C` |

Arrow keys or the floating switcher cycle layouts. The switcher is hidden in production.

Theme follows the system `prefers-color-scheme`, with a sun/moon toggle in the header.

## Edit copy

Profile, niches, services, FAQs, and socials live in [`src/data.ts`](src/data.ts). Layout A is [`src/variants/VariantA.tsx`](src/variants/VariantA.tsx). Search and share tags are in [`index.html`](index.html).

## Deploy

Pushes to `cursor/ugc-portfolio-prototype` (or `main`) run [GitHub Pages](.github/workflows/pages.yml). After a green **Deploy GitHub Pages** run, hard-refresh the live URL if the browser is caching an old bundle.
