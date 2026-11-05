# TOS Labs - Igloo Inc Replica

Exact replica of [Igloo Inc](https://www.igloo.inc/) for **TOS Labs**, the software division of **The Obsidian Studios**.

## Monorepo Structure

```
├── package.json
├── wrangler.toml
└── apps/
    └── web/
        ├── index.html
        ├── package.json
        └── assets/
            ├── index-2e130bc1.js
            ├── App3D-d68cb154.js
            ├── index-2e130bc1.css
            ├── audio/
            ├── fonts/
            ├── geometries/
            ├── images/
            └── libs/
```

## Local Development

To run the site locally:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Hosting & Deployment (Cloudflare Pages)

This project is optimized for deployment on Cloudflare Pages or any static site host.
- Build command: `npm run build`
- Build output directory: `apps/web`
