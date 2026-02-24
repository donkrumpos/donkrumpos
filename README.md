# Foggy Portfolio

Astro-powered portfolio site. Clean, fast, markdown-driven.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Build to ./dist
npm run preview    # Preview the build
```

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. In Cloudflare Pages, create a new project from your repo
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Set your custom domain in Cloudflare Pages settings

## Adding Projects

Create a new `.md` file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "One-liner for the grid card."
date: 2025-01-01
category: "Mural"
thumbnail: "/images/projects/my-project-thumb.jpg"
images:
  - "/images/projects/my-project-1.jpg"
  - "/images/projects/my-project-2.jpg"
  - "/images/projects/my-project-3.jpg"
featured: true       # Show on home page
order: 1             # Lower number = appears first
draft: false         # Set true to hide
---

Write your project description here. Full markdown supported.
```

Put images in `public/images/projects/`.

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Short description for the list page."
date: 2025-02-24
tags: ["murals", "process"]
draft: false
---

Write your post here.
```

## Project Structure

```
src/
├── components/       # Header, Footer, ProjectCard
├── content/
│   ├── projects/     # Project markdown files
│   └── blog/         # Blog post markdown files
├── layouts/          # Base layout
├── pages/
│   ├── index.astro   # Home (featured projects)
│   ├── about.astro
│   ├── contact.astro
│   ├── work/         # Project grid + detail pages
│   └── blog/         # Journal list + post pages
└── styles/
    └── global.css    # All styles
public/
└── images/           # Static images
```

## Customization

- **Site name / bio**: Edit `Header.astro`, `index.astro`, `about.astro`
- **Colors / typography**: Edit CSS variables at the top of `global.css`
- **Domain**: Update `site` in `astro.config.mjs`
- **Contact links**: Edit `contact.astro`
