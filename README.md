# Strideind Website

A modern, minimalist industrial website built with React.

## Tech Stack
- React 18
- Manrope font (Light 300 & Bold 700/800)
- CSS custom properties (no Tailwind/extra dependencies)
- Lucide icons (via CDN if needed)
- StrideAI chatbot powered by Claude API

## Color Palette
- Teal: `#1a9fa0` (matches logo)
- Black: `#0a0a0a`
- Dark variants: `#111111`, `#161616`, `#1e1e1e`
- White with opacity utilities

## Getting Started

```bash
npm install
npm start
```

## Replacing Placeholder Images
Search for `images.unsplash.com` in the component files and swap with your own image paths. Images are used in:
- `Hero.js` — hero background
- `About.js` — about section photo
- `Industries.js` — industry panel images (5 photos)
- `Projects.js` — project card images (3 photos)

## StrideAI Chatbot
The chatbot uses the Anthropic Claude API. It's pre-configured with a system prompt describing Strideind's services. The API key is handled by the claude.ai environment — for production deployment, add your own `ANTHROPIC_API_KEY` via a backend proxy.

## Sections
1. **Hero** — Full-screen with animated headline and stats
2. **About** — Company story + 3 pillars
3. **Services** — 6-card grid with hover animations
4. **Industries** — Interactive tab panel (Automotive, Aerospace, Medical, Energy, FMCG)
5. **Projects** — 3 case study cards
6. **Contact** — Form + contact info
7. **Footer** — Links + branding
8. **StrideAI** — Floating chat button (bottom-right)

## Notes
- All fonts set to Manrope Light (300) for body, Bold (700/800) for headings
- Fully responsive (mobile, tablet, desktop)
- Replace `/public/logo.png` to update the logo across the entire site
