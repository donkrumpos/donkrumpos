# donkrumpos — Portfolio Site

Astro 5 + Cloudflare Pages + MDX. Public-facing surface for Don Krumpos's freelance/consulting practice (Lane B + Lane D). Deploys to **donkrumpos.com**.

See `README.md` for stack details, dev commands, and content schemas.

## What this repo is (Claude orientation)

The **engineering layer** for donkrumpos.com. Pure build/deploy. Content is authored elsewhere.

## Cross-repo architecture

This repo sits within a 5-repo system. **Reliquary** (`~/Documents/Projects/reliquary`) is the master overseer — Foggy's identity briefing, strategic lanes, decisions log, and the freelance/entrepreneur build picture. Read its `CLAUDE.md` for personal context when a session needs it.

**Content comes from `~/Documents/Projects/freelance`** — the editorial layer. Case studies, services-page copy, positioning, blog posts are written there as markdown, then copied into this repo's `src/content/projects/`, `src/content/blog/`, or `src/pages/` as appropriate.

Sibling repos:
- **reliquary** — strategic overseer (identity, lanes, decisions)
- **freelance** — editorial layer (where this site's content is authored)
- **yonder-site** — engineering twin of this repo for yonderartland.com
- **dclt-strategic-system-v3** — DCLT day-job source data (do not read unless specifically needed; values boundary)

Stay in build/deploy mode here. Editorial decisions belong in freelance.

## Current state vs. target positioning (as of 2026-06-09)

The engineering foundation is solid (Astro 5 + content collections + Cloudflare Pages auto-deploy). But the site is currently positioned with an OLD polymath frame (categories: UI/UX, Branding, Design Systems, Print) that doesn't match the locked **surgical-fix positioning** decided 2026-06-09.

Pending positioning rework (phased — see `reliquary/career/freelance-entrepreneur-sketch.md` for the full multi-phase outline):

- **Category schema** → reshape to surgical-fix categories (Websites / Custom CRMs / Apps & Integrations / Brand systems — final names TBD)
- **`services.astro`** → surgical-fix positioning copy + published price floors ($10K static / $15K site+app / $40K custom CRM)
- **`index.astro` hero** → variant (c) copy from reliquary's Q3 answer
- **Footer** → yonderartland.com cross-link
- **`src/content/projects/`** → DCLT case studies (donor pipeline, website rebuild, etc.) land here once captured in freelance

This is a positioning rework on existing bones, not a rebuild.

## Positioning frame (for build choices)

Anchor design and build decisions against:

- **Foggy's positioning copy** (locked 2026-06-09): *"Small mission-driven organizations deserve better than the WordPress + plugin treadmill. I do surgical fixes — specific named problems, clean handoffs, owned-stack systems your team can actually run."*
- **Standard anchored against:** The Nerdery (real engineering at scale), at solo-practitioner scale. NOT Bold Bison (agency-flavored marketing).
- **Audience:** EDs / ops leads at small mission-driven orgs evaluating Foggy for site + app builds.
- **Tone:** calm, confident, expert-driven, specific. Not aggressive, not woo-getting, not click-baiting.

Full positioning rationale, lane structure, and architecture details: `reliquary/career/freelance-entrepreneur-sketch.md`.
