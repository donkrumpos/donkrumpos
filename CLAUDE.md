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

- **Design system:** the print shop (`src/styles/global.css`), which grew out
  of the field journal: paper, ink + rust, Fraunces / Newsreader / IBM Plex
  Mono, paper proofs with registration marks, tickets, the umber band. Don't
  drift back to stock/minimal.
- **`/field-study`** is the entry offer, **unlisted until 2027-01-01** (noindex,
  sitemap filter, not in nav; `FIELD_STUDY_PUBLIC` in services.astro). To
  launch, flip all four.
- **Field Notes** (`src/content/notes/`): Foggy's voice and hand only. Drafts
  build in dev only; nav link appears with the first published note.
- **Conservation is fair game again (2026-11-10):** the DCLT contract is
  ending, so the old "don't pitch conservation" rule is lifted. The DCLT case
  studies stay as past work.

## "Well Made" print shop (chosen 2026-11-10; live 2026-11-11)

**Status (2026-11-11): live on donkrumpos.com.** Build-plan steps 1–3 are
done and deployed. The whole site is in the print-shop language: `global.css`
holds the tokens (ink + rust; the old `--ochre`/`--gold` names alias rust),
the shell, `.page-header`, and the proof card (`ProofCard.astro`). The Lens is
at `/lab` only. Prototype and plan: `archive/prototypes/home-2026-11/` and
`docs/design-direction-2026-11.md`.

Decisions made on 2026-11-11, all live:

- **No murals or personal work on this site.** They live with Yonder; the
  footer and the About bio link there. The Worlds page is deleted (`/worlds`
  redirects to `/about/`), Mill Madonnas is a draft (its URL redirects to
  `/work/`), and the murals service is off Services. This narrows the
  "Murals lead" line in the positioning section above: on this site the
  practice shows maps, systems and design leadership only. `/field-study`
  (unlisted) is still built around the Mill Madonnas story.
- **Work page** = four lead proofs (the `LEADS` list in `work/index.astro`:
  Optum, NielsenIQ, donor pipeline, Preserve Explorer), then "Also in the
  book", a one-line-per-job ledger, then an "ask about any job" line.
- **Header** is sticky (the top strip scrolls away) with a frosted, hard-edged
  paper sheet behind it. On wide windows the inner-page woodcut runs up behind
  the header to the strip's rule. The header must not change height when
  stuck. `body` uses `overflow-x: clip`, not `hidden`, or sticky breaks.
- **Per-page woodcut crops:** `data-art="lighthouse|farm|road"` on
  `.page-header` (Work, About, Services). Pages without it show the whole block.

Open:

- The ledger has four rows. Foggy wants the fuller portfolio captured; a row
  needs only year, name, kind and an optional award, and rows without a
  write-up should not be links. The award is read from the description text
  for now and wants a real `award` field.
- Patterson Dental shows 2010 in the ledger but is dated 2011-01-01 (timezone
  slip in `getFullYear()`).
- Case studies should suggest a next piece, since Foggy sends direct links to
  the one that fits each inquiry. Audience-specific case studies use
  `unlisted: true` (built 2026-11-11; Eaglesoft uses it): reachable by direct
  link, but off the Work page, out of the sitemap and noindexed. `draft: true`
  projects and blog posts are not built at all.
- "Interpretive design" interests Foggy as a direction; not yet on the site.
- Build-plan step 4 (accessibility pass, inner pages at phone width) is only
  partly done.

## The Lens (homepage 2026-09-07 to 2026-11; now `/lab`)

`src/components/TheLens.astro` is — the fullscreen porthole deep map
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
