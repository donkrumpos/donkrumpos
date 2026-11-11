# Editorial / Print / Hand-Made Designer Portfolios (2025–2026)

Method note: Every URL below was fetched on 2026-11-10 (curl HTTP status + HTML/CSS pull, plus WebFetch for content). Typefaces and palette hex values come from each site's own CSS (`font-family` declarations, `@font-face` files, Typekit kit CSS, CSS custom properties). I did **not** view screenshots, so I can't confirm margins, grid, image treatment or motion visually. Where a description depends on the page structure WebFetch reported, it says so. I found almost no formal recognition (awards, galleries) for these specific sites in 2025–2026, and recognition is marked as a gap unless sourced.

Source for recognition lists: Typewolf's "Top 40 Favorite Designer Portfolio Sites" is titled 2026, but every feature on it dates from 2015–2020 (from the screenshot dates). That makes it a stale source for this period. None of its 40 sites are in the shortlist below — [Typewolf portfolio list](https://typewolf.com/portfolio-sites).

## Which individual designers' sites use serif-led editorial typography and warm paper palettes with real control?

### Takeaway
The strongest examples pair a distinctive text or display serif with a utilitarian sans and/or mono: a three-voice system much like donkrumpos's Fraunces / Newsreader / Plex Mono. They also keep the paper tone very close to white (off-white or cream, not tan) and stay restrained. The elite ones are Jason Santa Maria, Maggie Appleton, Craig Mod, Elliot Jay Stocks and Jessica Hische. Their polish comes from foundry-grade type and discipline, not from texture or ornament.

### Cited Findings

**1. Jason Santa Maria — jasonsantamaria.com (LIVE, HTTP 200, © 2026)**
- Person and discipline: designer with 25+ years leading multidisciplinary teams. He consults through his practice Loud Room for start-ups, non-profits, type foundries and publishers, and co-founded A Book Apart (50+ titles), where he is Creative Director. Past roles: Senior Staff UX Designer at Shopify, Head of Design & Research at Netlify, Design Director at *Slate*. He wrote *On Web Typography* and designed the typefaces Citywide and Chonk — [jasonsantamaria.com](https://jasonsantamaria.com)
- Type system (from CSS): Roslindale (DJR's display serif) as `--font-serif`, HEX Franklin as `--font-sans`, and VCTR Mono in regular, italic and bold as `--font-mono`. That is a serif / sans / mono trio, structurally the same as Fraunces / Newsreader / Plex Mono — [jasonsantamaria.com](https://jasonsantamaria.com)
- Structure: a single text-led column with a headshot and section dividers made of "asterisk rules and underlined headings". It has a "Past Versions" archive (v1 2000–2002 through v5 2011–2022), and the footer credits the typefaces used — [jasonsantamaria.com](https://jasonsantamaria.com)
- Weaknesses: the page has no illustration, sketchbook or case-study imagery, so it is a résumé in good type rather than a showcase. Its beauty is restraint, not richness.

**2. Maggie Appleton — maggieappleton.com (LIVE, © 2026)**
- Person and discipline: "Designer, anthropologist, and mediocre developer", making visual essays about programming, design and anthropology. Currently exploring AI and software engineering at GitHub Next — [maggieappleton.com](https://maggieappleton.com)
- Type and palette (from CSS): Canela Deck (`--font-serif`) for headings, Canela Text (`--font-body`) for body copy, Lato for UI. `--color-cream: #f6f5f1` and `--color-light-cream: #fcfbf7` in light mode, with dark-mode equivalents `#1c1b18` and `#252420`. So she uses a warm cream paper with a warm near-black for dark mode, not a cold gray — [maggieappleton.com](https://maggieappleton.com)
- Structure: a "digital garden" ("a collection of imperfect notes, essays, and ideas growing slowly over time"), split into Essays, Notes, Patterns and Library (book covers). Essay and Pattern cards carry illustrated thumbnails — [maggieappleton.com](https://maggieappleton.com)
- Weaknesses: dates are shown only as relative phrases ("about 1 year ago"). Lato is a slightly generic UI partner for Canela. The card-grid homepage is less editorial than the essays themselves.

**3. Craig Mod — craigmod.com (LIVE)**
- Person and discipline: writer and photographer, focused on walking, Japan and the Kumano Kodō, who makes photo books. *Things Become Other Things* (Random House, 2025) was a 2025 Best Book of the Year per Shelf Awareness, Kirkus and Smithsonian (as stated on his site). *Kissa by Kissa* has 40 color plates and is in its 6th printing. A fine-art edition was "printed and bound in Japan". His essays include "Software Bonkers" (2026) — [craigmod.com](https://craigmod.com)
- Type (from the Typekit kit flb8dxt): FF Meta Serif (with small caps), FF Meta and Goodlife Sans / Condensed. Meta Serif with Meta is a classic same-family serif/sans pairing. A Hiragino Kaku Gothic fallback handles Japanese — [craigmod.com](https://craigmod.com), [kit CSS](https://use.typekit.net/flb8dxt.css)
- Weaknesses (per WebFetch): the homepage is busy, with repeated newsletter blocks, a shop and membership promotion. The subscriber count is inconsistent ("~50,000" in one place, "~40,000+" in another). It reads more as a publisher storefront than a quiet journal. He is not a designer-for-hire, so the site is a model for book and print conventions, not for portfolio structure.

**4. Elliot Jay Stocks — elliotjaystocks.com (LIVE; returned 403 to a bare curl, 200 with a browser UA)**
- Person and discipline: "a designer and author, usually doing something with typography". He has a book "published by Quarto in 2026", is teaching a new typography workshop in 2026, and lists 2025 contract design roles — [elliotjaystocks.com](https://elliotjaystocks.com)
- Gap: I couldn't extract font names from his CSS (likely self-hosted under obfuscated names). The palette was detected only as black and white.
- Weakness: I couldn't confirm anything visually beyond that.

**5. Jessica Hische — jessicahische.is (LIVE)**
- Person and discipline: letterer, illustrator and author (the page title is "Jessica Hische Inc.") — [jessicahische.is](https://jessicahische.is)
- Type and palette (from CSS): a custom display face self-hosted as `'Jess Hische Font No Stealing Plz'`, Mercury SSm (Hoefler) as `--font-serif`, Whitney as sans, and a dedicated "Numbers Depot" numeral font. Colors are `--color-cream: #fafaf8` with pink accents (`#EE9CB2`, `#ffeaee`) — [jessicahische.is](https://jessicahische.is)
- What to learn: her own hand is set as the brand display type, with a sober book serif (Mercury) underneath. That is the direct analog to the woodcut hand over Fraunces / Newsreader.
- Weaknesses: the pink palette is a personal brand choice and not transferable. The site is a studio ("Inc.") façade, though she is an individual.

**6. Mandy Brown — aworkinglibrary.com (LIVE, 2025/2026 content)**
- Person and discipline: writer, editor and coach (formerly an editorial and design lead). Strictly an editorial writer's site, not a designer portfolio.
- Type (from the Typekit kit fhq2xej): Chaparral Pro (Carol Twombly's slab-ish book serif) plus "dejarip". The CSS also has Georgia fallbacks and mid-gray UI tones — [aworkinglibrary.com](https://aworkinglibrary.com), [kit CSS](https://use.typekit.net/fhq2xej.css)
- Weakness: it is useful only as a reading-typography reference. It doesn't fit the portfolio brief.

**7. Gwern Branwen — gwern.net (LIVE; reference only, not a designer)**
- Source Serif 4 with Source Sans 3. The CSS defines text indent (1.75em/2.5em), justified alignment and hyphenation variables, and full dark-mode tokens. It is the best-known web implementation of book conventions: sidenotes and marginalia, justified text with hyphenation, and paragraph indents — [gwern.net](https://gwern.net)
- Weakness: gray, academic and dense. Borrow the mechanics, not the look.

### Inferences
- The "elite, not quaint" line seems to come down to: (a) a paper tone very close to white (#f6f5f1, #fafaf8, #FFFCF0) rather than a saturated tan, (b) one characterful serif plus a neutral workhorse, and (c) a utilitarian mono or sans that carries metadata. donkrumpos already has (b) and (c). The comparison set suggests checking (a): whether the cream and umber band read as "aged parchment" or as "fine paper".
- Jason Santa Maria and Jessica Hische both credit or brand their typefaces explicitly (a footer type credit; a custom font). A colophon is a cheap, elite-signalling book convention donkrumpos could adopt.

### Gaps
- No visual verification of margins, grid, image treatment or motion for any site (no screenshots taken).
- Elliot Jay Stocks's fonts are unidentified.
- No 2025–2026 gallery or award recognition found for any of these sites specifically.

## Which designer-developers combine an editorial look with real product or engineering work?

### Takeaway
Steph Ango (Obsidian), Matt Ström-Awn, Tom MacWright, Maggie Appleton (GitHub Next) and Jason Santa Maria (Shopify / Netlify) show taste plus systems most clearly. Steph Ango's Flexoki is the single most relevant artifact: a published, ink-and-paper color *system* built for a personal site, which turns "warm paper" from a mood into an engineered token set.

### Cited Findings

**8. Steph Ango — stephango.com (LIVE; Flexoki page dated 2025-01-07)**
- Flexoki "is inspired by analog inks and warm shades of paper". The name comes from flexography, "a common printing process for paper and cardboard". The paper base is `#FFFCF0`. Ango created it for his personal site. He has a background in dyes and inks through his companies Inkodye and Lumi, and made the Minimal theme for Obsidian — [Flexoki](https://stephango.com/flexoki)
- His site CSS uses a system-font content stack (falling back to Inter / IBM Plex Sans) and a mono stack that includes IBM Plex Mono, with `--flexoki-paper: #FFFCF0` and an accent `#FFE1C5` — [stephango.com](https://stephango.com)
- Weakness: the typography is deliberately system-default, so the beauty is in color and restraint. It's a palette reference, not a type reference.
- Gap: I relied on my own knowledge that he is Obsidian's CEO. The fetched page confirms only "made the Minimal theme for Obsidian".

**9. Matt Ström-Awn — mattstromawn.com (LIVE; matthewstrom.com redirects here; multiple 2026-dated posts)**
- "Designer, leader, and coach focused on building exceptional products and teams." Page title: "designer-leader" — [mattstromawn.com](https://mattstromawn.com)
- Type (from CSS): Charter Variable as serif (falling back to Palatino / Book Antiqua / Baskerville), Inter Variable as sans, and Geist Mono as mono. Colors: background `#f8f8fa` and highlight `#fbf8ce` (a pale highlighter yellow) — [mattstromawn.com](https://mattstromawn.com)
- What to learn: Charter (Matthew Carter's screen-era book face) is a credible, unshowy text serif, and the three-voice structure is again serif / sans / mono.
- Weakness: the palette is cool off-white, not warm, and the site leans toward a product-blog look rather than a print one.

**10. Tom MacWright — macwright.com (LIVE; posts dated 2026-09-01, 2026-10-01, 2026-11-01)**
- Type (from CSS): Century Supra (Matthew Butterick's Century revival), self-hosted with tabular figures (`century_supra_b_tab` regular, italic, bold and bold-italic), used for text, display and sans. A one-family, book-like voice. White background — [macwright.com](https://macwright.com)
- Discipline: software engineer with deep cartography roots. The homepage references Placemark (his map-data editor) and cycling in Vermont — [macwright.com](https://macwright.com)
- Gap: I'm relying on prior knowledge, not a fetched source, for his Mapbox / Observable / Val Town history.
- Weakness: very minimal and text-only, with no map-forward visuals on the homepage. It earns the "engineering + taste" badge, not the "beautiful" one.

**Maggie Appleton (above)** — a designer working in software engineering at GitHub Next, with an illustrated, Canela-set garden — [maggieappleton.com](https://maggieappleton.com)

**Jason Santa Maria (above)** — Shopify and Netlify product and design leadership plus type design — [jasonsantamaria.com](https://jasonsantamaria.com)

**Also checked:**
- Amelia Wattenberger — wattenberger.com (LIVE): a data-viz designer-developer using Parclo Serif (Black through Light, with italics) plus Inter. Accent `#3730a3` indigo on white. Editorial serif, but a cool, techy palette — [wattenberger.com](https://wattenberger.com)
- Brandur Leach — brandur.org (LIVE, 2026 dates): an engineer whose site is now Tailwind prose with ui-serif / Georgia. Too generic to recommend — [brandur.org](https://brandur.org)

### Inferences
- For a "product designer + builder", the most persuasive pattern is Ango's: publish the design system itself (Flexoki has its own page) as proof of systems thinking. A public "field journal palette / type specimen" page on donkrumpos would do the same job.
- None of these designer-developers combine a map homepage with an editorial look. That combination looks unclaimed among the sites checked.

### Gaps
- Recognition (e.g., Typewolf SOTD, SiteInspire) for these sites was not found in my searches.

## Any cartography/map-forward or naturalist personal sites done beautifully?

### Takeaway
The working cartographers (Andy Woodruff, Daniel Huffman, John Nelson) have live, current practices but plain portfolio shells (Lato / WordPress). Their *maps* are the beauty, not their sites. Eleanor Lutz (Tabletop Whale) is the most beautiful naturalist-cartographic body of work, but the blog is stale (last post April 2020). Shirley Wu's studio site (GT Alpina + GT Alpina Typewriter, with "art / notebook / about") is the closest to a refined field-notebook frame. I found no personal site that does map-forward + editorial at an elite level, which is the gap donkrumpos's Lens homepage could own.

### Cited Findings

**11. Andy Woodruff — andywoodruff.com (LIVE; 2026 work)**
- A Boston-area freelance cartographer, formerly at Axis Maps. Recent work: *Boston in 50 Maps* (2026, Belt Publishing), *Cincinnati in 50 Maps* (2025), a "Mountains and Lakes" map of the White Mountains / NH Lakes Region (2026), and a Maine Woods trail map for the Appalachian Mountain Club (2026, with Community Geographics) — [andywoodruff.com](https://andywoodruff.com/)
- Site: a "Modern Cartography" header, short bio, and a thumbnail grid of shaded relief, terrain and typographic city maps. Fonts: Lato via Google Fonts — [andywoodruff.com](https://andywoodruff.com/)
- Weakness: the shell is generic. Lato and a plain grid undersell print-grade maps.

**12. Daniel P. Huffman — somethingaboutmaps.com (LIVE)**
- A freelance cartographer in Madison, WI, "making maps for magazines, books, museums, nonprofits and more, since 2010". The site has portfolio, tutorials, blog, Patreon, YouTube and prints sections — [somethingaboutmaps.com](https://somethingaboutmaps.com)
- Gaps: there are no 2025/2026 dates on the homepage, and fonts couldn't be extracted. A Wisconsin peer is relevant to donkrumpos, but the site itself is a link hub.

**13. John Nelson — adventuresinmapping.com (LIVE, many 2026 references)**
- "Adventures In Mapping | John Nelson Maps – Maps and stuff. Fun things." A WordPress theme, with CSS referencing Work Sans, Urbanist, Texturina and Syne presets — [adventuresinmapping.com](https://adventuresinmapping.com)
- Weakness: the theme-default typography is not a design reference.
- Note: johnnelsonmaps.com did not resolve (HTTP 000).

**14. Eleanor Lutz — tabletopwhale.com (LIVE but STALE)**
- A science illustrator and data visualizer. Her "Atlas of Space" includes topographic and geologic maps of the Moon and a geologic map of Mars, drawing on 1970s historical maps. Labels are set in the Moon font (Jack Harvatt), with RedFlower titles. The newest post is April 1, 2020, and the copyright runs 2014–2024 — [tabletopwhale.com](https://tabletopwhale.com)
- Weakness: dormant, and outside the 2025–2026 window. It's a reference for map-as-specimen-plate image treatment only.

**15. Shirley Wu — shirleywu.studio (LIVE; 2025 Tokyo "in-between" series per image path)**
- Tagline "Art, data, and the creative process". Navigation: art / notebook / about, with a single featured image and a newsletter — [shirleywu.studio](https://shirleywu.studio)
- Type (from CSS): GT Alpina (Grilli Type's editorial serif) plus GT Alpina Typewriter (a mono cut of the same family). One family covers serif and "typewriter mono" — [shirleywu.studio](https://shirleywu.studio)
- Weakness: extremely sparse. The homepage shows one image and no bio, so it's an exemplar of confidence and quiet, not of information.
- Gap: her data-viz background comes from my prior knowledge, not the fetched page.

**Other naturalist / print-hand references (all LIVE):**
- Marian Bantjes — bantjes.com: "artist, designer, typographer, letterer and writer". Inkwell Tuscan and Knockout in the CSS, with posts in 2025 and 2026. Ornament and print editions, but WordPress presets elsewhere — [bantjes.com](https://bantjes.com)
- Jenny Odell — jennyodell.com: an artist and writer. Kandal (Typekit) with a Georgia fallback; the same kit includes Bree, Alternate Gothic and JAF Domus — [jennyodell.com](https://jennyodell.com)
- Nicholas Felton — feltron.com: "Information designer… Author of the Feltron Annual Reports". CSS uses `--serif` / `--sans` variables, and the annual reports are a print-native data tradition — [feltron.com](https://feltron.com)
- Gap: Felton's actual faces were not identified.
- Rachel Binx — rachelbinx.com: a map-jewelry and data designer, but the site uses Quicksand and Open Sans, so it's not a typographic reference — [rachelbinx.com](https://rachelbinx.com)

### Inferences
- Among the sites checked, no cartographer's personal site matches the quality of its maps. donkrumpos's MapLibre Lens plus field-journal type would be distinctive in this peer set if the surrounding chrome is as disciplined as Santa Maria's or Appleton's.
- Shirley Wu's one-family serif-plus-typewriter-mono approach (GT Alpina / Alpina Typewriter) is a cleaner alternative to mixing three unrelated families. It's worth noting as a contrast to Fraunces + Newsreader + Plex Mono.

### Gaps
- No beautiful, current (2025–2026), map-forward personal homepage by an individual was found. I couldn't search NACIS, Atlas of Design or Esri galleries for personal sites within the call budget.
- Daniel Huffman's and Andy Woodruff's awards (e.g., NACIS / Atlas of Design) weren't sourced.

## Is each URL live today?

### Takeaway
All shortlisted URLs returned HTTP 200 on 2026-11-10. There are two caveats: Eleanor Lutz's site is live but dormant since 2020, and Taylor Roy's Fonts In Use "Fraunces" entry no longer reflects her live site.

### Cited Findings
- Verified HTTP 200: maggieappleton.com, craigmod.com, robinrendle.com, frankchimero.com, tabletopwhale.com, macwright.com, jasonsantamaria.com, wattenberger.com, mattstromawn.com (via the matthewstrom.com redirect), somethingaboutmaps.com, jessicahische.is, visualcinnamon.com, aworkinglibrary.com, gwern.net, rsms.me, djr.com, jennyodell.com, elliotjaystocks.com (403 to a bare curl, 200 with a browser UA), adventuresinmapping.com, andywoodruff.com, stephango.com, brandur.org, shirleywu.studio, feltron.com, bantjes.com, rachelbinx.com, christophniemann.com, taylorroy.com — verified by curl on 2026-11-10.
- Not reachable (HTTP 000): danielphuffman.com, johnnelson.com, johnnelsonmaps.com. Huffman's live site is somethingaboutmaps.com.
- Taylor Roy is listed on Fonts In Use as pairing Fraunces with Maison Neue — [Fonts In Use](https://fontsinuse.com/uses/77391/taylor-roy-portfolio-website). Her live site (taylorroy.com) now loads only Inter / Inter Display (from CSS), so that record is stale. It is excluded from the shortlist.
- Robin Rendle (robinrendle.com) now uses "MD UI" (a sans variable) plus Fira Code, with heavy 2025/2026 content. He's no longer a serif reference, so he's excluded.
- Frank Chimero (frankchimero.com) has a minimal page (backgrounds `#eeeeee` / `#3d4340`, Courier mono) and only light 2025 content. Excluded as too sparse to evaluate.
- David Jonathan Ross (djr.com) uses Input Sans Narrow trial fonts on a black/white UI. It's a type-foundry shop, not editorial, so it's excluded. His Roslindale appears via Jason Santa Maria.

### Inferences
- **Recommended shortlist for the report (ranked by relevance to donkrumpos):**
  1. Jason Santa Maria
  2. Maggie Appleton
  3. Steph Ango / Flexoki
  4. Craig Mod
  5. Jessica Hische
  6. Shirley Wu
  7. Matt Ström-Awn
  8. Tom MacWright
  9. Andy Woodruff
  10. Elliot Jay Stocks (lightly verified)

  Gwern (marginalia mechanics) and Eleanor Lutz (map plates, stale) are honorable references.

### Gaps
- Fonts In Use, SiteInspire, Minimal Gallery and Are.na weren't successfully mined for 2025–2026 individual entries. A general web search returned mostly font roundups, not curated personal sites.
