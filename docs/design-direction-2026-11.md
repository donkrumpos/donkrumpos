# Design direction: "Well Made" print shop (2026-11-10)

This supersedes the Two Hands homepage in `design-direction-2026-10.md`. The field-journal
tokens (Fraunces / Newsreader / Plex, paper and umber) carry over.

## The idea

**A well-run print shop.** Plain, fast structure. The hand shows only at the edges, in the
masthead and the woodcut illustration. The case studies carry the practical side. It has to work
for three audiences at once: creative brands, corporate buyers (the "$200K SaaS for a law firm"),
and nonprofits and conservancies. No tech showing off. Contino Studio is the spirit, in Foggy's
own version: one signature, then quiet; fewer, bigger proofs; framed with space.

- Research behind it: `reports/Most beautiful designer portfolios.md`. Foggy found none of the
  10 inspiring, which suggests open ground.
- **No personal art on this site.** Forest Guardians and similar work stays with Yonder. Foggy
  will cut new ornaments and illustrations.

## Locked choices

- **Prototype:** `archive/prototypes/home-2026-11/print-shop.html`. Defaults equal the chosen set;
  the switcher and URL params are prototype-only.
- **Masthead:** "Well Made" in Fraunces 900, `opsz` 144, one ink. It has a light SVG-noise wear
  mask and no drop shadow. Ultra slab was rejected as too Wild West.
- **Inks:** ink `#221c16` + rust `#97522b` on paper `#f4efe4`. Black & cream was tried and not
  chosen.
- **Header:** the flat-ink DK monogram (`img/dk-ink.png`), with "DON KRUMPOS" in Libre Franklin
  600, caps, tracked .34em. Under 640px the name hides and only the DK shows.
  - A top strip reads "Don Krumpos · Design & Build" and "Algoma, Wisconsin · 25 years at the
    trade".
- **Hero:** no box. The landscape woodcut (`img/land-left.png` and `land-right.png`, cut from
  `landscape.png`) is a full-bleed backdrop at about 20% opacity.
  - The halves are pinned to the window edges and pulled out by `--pull:-7vw`, so the middle
    "lake" opens as the window widens.
  - The edges are ragged and organic, baked into the alpha.
  - The masthead, lines and copy sit in the lake.
  - At 1000px and below, the landscape moves below the copy at full strength.
- **Job book:** three proofs (Optum appointments, Preserve Explorer, Donor pipeline). Each is a
  paper plate with registration marks and a ticket (kind, title, blurb, Client / Role / Run).
  These are the **B · Paper** proofs.
- **Parked:** the plotting / draw-in animation and the scroll drift. Foggy said "we can wait on
  that." The wordmark collapse animation was rejected.

## Open, small

- The "PRODUCT DESIGN · SYSTEMS · MAPS" line is in Big Shoulders. Consider moving it into the
  Franklin family.
- The hero paragraph sits over the route line at a 20% screen. If legibility suffers, lighten the
  screen or add a paper halo.
- The conservation restriction is lifted (the DCLT contract is ending), so "Conservation" in the
  imprint line is fine.
- The `orn-*.png` crops and `reveal-mask.png` are unused leftovers and are not committed.

## Build plan (next sessions)

1. **Homepage (done 2026-11-10):** port the prototype into Astro as `src/pages/index.astro`. The
   Lens moves off `/` and stays at `/lab`.
   - Convert the landscape halves to WebP; they are about 770 KB as PNG.
   - Load fonts with only the weights used.
   - Drop the prototype switcher.
2. **Site-wide shell (done 2026-11-11):** carry the new header, strip and footer imprint into the shared layout, so
   every page matches at launch.
3. **Inner pages (done 2026-11-11):** restyle Work, case studies, About, Services and Contact in the print-shop
   language (plates, tickets, paper proofs). Content comes from `~/Documents/Projects/freelance`.
4. **Launch:** check mobile and accessibility, then push. A push is not a deploy: confirm the
   Cloudflare Pages check-run.
5. **Later:** Foggy's own ornaments, the drawn-in animation, and maybe "Well Made" as a brand or
   domain.
