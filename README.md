# Don Krumpos — Portfolio

Astro-powered design portfolio. Clean, fast, markdown-driven case studies.

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

Create a new `.md` file in `src/content/projects/` (copy `_template.md` to start):

```markdown
---
title: "Project Name"
description: "One-liner for the grid card."
date: 2024-01-01
client: "Client Name"
role: "Art Director"
category: "UI/UX"          # Options: UI/UX, Branding, Design Systems, Print
tools: ["Figma", "Adobe Creative Suite"]
thumbnail: "/images/projects/my-project-thumb.jpg"
images:
  - "/images/projects/my-project-hero.jpg"
  - "/images/projects/my-project-detail-1.jpg"
featured: true
order: 1
draft: false
---

## The Challenge

What problem were you solving?

## Approach

Your process, key decisions, research.

## Solution

Walk through the final design.

## Results

Outcomes — metrics, feedback, adoption.
```

Put images in `public/images/projects/`.

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Short description for the list page."
date: 2025-02-24
tags: ["process", "design thinking"]
draft: false
---

Write your post here.
```

## Project Structure

```
src/
├── components/          # Header, Footer, ProjectCard
├── content/
│   ├── projects/        # Case study markdown files
│   │   └── _template.md # Copy this to start a new project
│   └── blog/            # Journal posts
├── layouts/             # Base layout
├── pages/
│   ├── index.astro      # Home (featured projects)
│   ├── about.astro
│   ├── contact.astro
│   ├── work/            # Work grid (grouped by category) + detail pages
│   └── blog/            # Journal list + post pages
└── styles/
    └── global.css
public/
└── images/projects/     # Project images
```

## Customization

- **Bio / contact info**: Edit `about.astro` and `contact.astro`
- **Colors / typography**: CSS variables at top of `global.css`
- **Domain**: Update `site` in `astro.config.mjs`
- **Categories**: Defined in `content.config.ts` — currently UI/UX, Branding, Design Systems, Print
