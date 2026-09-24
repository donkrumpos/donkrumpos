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

## Positioning: Place & Story (as of 2026-09-23)

The 06-09 "surgical-fix" frame is **superseded**. The site's umbrella is the
**Place & Story practice**: finding the story of a place and giving it form.
Murals lead; maps/interpretive work and donor/CRM systems are further forms;
enterprise design leadership stays as the corporate door. Strategy source:
`reliquary/career/place-and-story-practice.md`.

- **Design system:** the field journal (`src/styles/global.css`): Lens palette
  site-wide, Fraunces / Newsreader / IBM Plex Mono, plates, pin-rules, umber
  band. Foggy loved it; don't drift back to stock/minimal.
- **`/field-study`** is the entry offer, **unlisted until 2027-01-01** (noindex,
  sitemap filter, not in nav; `FIELD_STUDY_PUBLIC` in services.astro). To
  launch, flip all four.
- **Field Notes** (`src/content/notes/`): Foggy's voice and hand only. Drafts
  build in dev only; nav link appears with the first published note.
- **Never name Door County orgs as prospects or pitch conservation** while the
  DCLT contract runs; the existing DCLT case studies stay as past work.

## The homepage is the Lens (as of 2026-09-07)

`/` renders `src/components/TheLens.astro` — the fullscreen porthole deep map
(MapLibre over `public/map/dk-sepia.json`, gold mural pins from
`public/lab/pins.json`, silver case-study pins, daily "overlooked place"
opening). `/lab` is the same component mounted as the archived Lab 001
prototype (noindex, unlinked). The old homepage featured-work grid was a
subset of `/work`, which is where all of it still lives. Regenerate pins with
`node scripts/build-pins.mjs`; regenerate the first-paint poster by visiting
`/lab?poster` in dev. The earlier "index.astro hero → variant (c) copy" item
is superseded by this.

## Positioning frame (for build choices)

Anchor design and build decisions against:

- **Foggy's positioning copy** (locked 2026-06-09): *"Small mission-driven organizations deserve better than the WordPress + plugin treadmill. I do surgical fixes — specific named problems, clean handoffs, owned-stack systems your team can actually run."*
- **Standard anchored against:** The Nerdery (real engineering at scale), at solo-practitioner scale. NOT Bold Bison (agency-flavored marketing).
- **Audience:** EDs / ops leads at small mission-driven orgs evaluating Foggy for site + app builds.
- **Tone:** calm, confident, expert-driven, specific. Not aggressive, not woo-getting, not click-baiting.

Full positioning rationale, lane structure, and architecture details: `reliquary/career/freelance-entrepreneur-sketch.md`.
