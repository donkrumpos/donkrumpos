# donkrumpos.com — site critique and design direction (2026-10-31)

**Status:** direction proposed, not yet approved. Nothing built from it yet.
**Context:** donkrumpos.com is the day-job portfolio (decided 2026-10-29; reliquary memory
`project_donkrumpos-dayjob-site`). Readers, in order: hiring managers / recruiters, product
teams, mission orgs buying owned systems. Homepage = "Two Hands" split
(`archive/prototypes/home-2026-10/B-two-hands.html`). Goal: a dev director, an agency CD and a
hiring manager should all land and think "taste and control."
**Gap:** the reference sites Foggy likes were never pasted. This pass is against the site's own
standard and the bar those three readers hold. Second pass against the references still owed.

## 1. Critique of the live site (as deployed 2026-10-31)

### Homepage (the Lens)
A beautiful object and the wrong door for this site. A hiring manager gets three-plus seconds
of a dark map and a monogram with no work, no role, no path. "Designer & Builder" is the only
descriptor. Foggy's own diagnosis: it delays the work. Two Hands replaces it. The Lens belongs on
Widdershins or Yonder.

### Header and nav
Subtitle "Place & Story · Algoma, Wisconsin" and the Worlds link both say art practice, not
product designer. Five nav items, no résumé.
Fix: Work · About · Contact (+ Field Notes when live); subtitle "Product design · Systems ·
Algoma, WI".

### Work index
- No hierarchy: every project is the same card at the same weight.
- Grouped by categories that no longer match the positioning (Walls first). One mural card sits
  alone in a three-column row.
- NielsenIQ and Optum share an identical stock "iPad on cyan" mockup. That cyan is the loudest
  color on the page and the only one outside the system.
- Nice Ride thumbnail crops the logo at both edges.
- A CD reads it as a template; a hiring manager can't tell which four projects matter.

### Case study template (Optum is the flagship and the worst offender)
The skeleton is sound (label, title, lede, meta bar). It fails at the images:
- Figma canvas screenshots with browser chrome, URL bar, layers panel and page list visible.
  Reads "unfinished" to a dev director, "no eye" to a CD.
- Dense clinical UI is shown inside the 680px prose column, so screens render at ~45% and are
  unreadable. The template has no wide or full-bleed image option.
- Hero is the stock cyan mockup and clashes with the paper.
- Every section is heading / paragraph / image / paragraph. No captions, no detail crops, no
  annotated decisions, no before/after, no outcome numbers.
- Page dead-ends: "back to work" only, no next case.
- NielsenIQ: same template, same cyan hero, three paragraphs before the first body image, and
  the IA diagram is a 1000×5039 scroll.
- Preserve Explorer is the strongest page: real product, own palette, "see it live" link. This is
  what the others should look like.

### Services
"One practice, several forms" with murals at 01 and design leadership at 04 inverts the day-job
order; 04 reuses the cyan mockup. Dashed rules and mono links are good and stay.

### About
Good bones; the portrait is the best photo on the site (real, in character, in palette). Facts
table leads with "Murals: more than forty"; "Awwwards Site of the Day, twice" is buried; no
résumé, LinkedIn or GitHub.

### Contact
A bare form with Lane B copy ("websites for small organizations"). No email, no "what happens
next," no availability line.

### Worlds
Strong prints (Green Man, Krampus) but the art register leaking in. Leaves the nav; content
waits for Widdershins.

### System level
The field journal (paper, umber, gold; Fraunces / Newsreader / IBM Plex Mono; plates, pin-rules,
umber footer) is distinctive and stays. It is the taste signal. What is missing is an **image
system**: screenshots are dropped raw onto paper with no frame, no plate, no consistent inset.
That one gap is most of the "competent, not elite" read.

Unverified: phone-width layout (the browser window would not resize in this pass; use the
390px-iframe recipe in memory `project_donkrumpos-session-workflow`).

## 2. What "taste and control" means to each reader
- **Hiring manager:** within ten seconds, what he does, where, at what level. Case studies with
  role clarity, outcomes, process shown not told. A résumé.
- **Agency CD:** typographic control, art-directed images, consistent frames, restraint, motion
  with intent.
- **Dev director:** real product under real constraints; the site itself performs (fast,
  accessible, no jank); the builds (Preserve Explorer, donor pipeline) show engineering.

## 3. Proposed direction: the field journal, two inks

Keep the whole existing system. Add one rule that makes Two Hands structural on every page:
**paper is the hand, umber is the system.** Every digital artifact (screens, design-system
sheets, diagrams) sits on a dark umber plate (`#1d1712` → `#11100e` radial, as in the
prototype's right half) with a hairline gold rule. Murals, prints and the portrait stay on
paper. The homepage seam becomes a rule the whole site obeys.

### Image system
Three plate components, every one with a mono caption:
1. **Full-width plate**: one screen at container width (1200px).
2. **Two-up plate.**
3. **Detail-crop plate.**
No device mockups, no stock backgrounds, ever. Hover: nothing, or a 1.02 scale.

### Homepage
Two Hands hero as decided (drag by the handle only; one 1.6s slide-in; no idle sway). Keep the
"thread" line but cut it to one sentence. Below: **Selected work** leads with four system cases
as large plates (Optum, NielsenIQ, Preserve Explorer, donor pipeline). Then one paper strip for
the hand that doors to Yonder.

### Work index
Replace the uniform grid with an editorial sequence: the four flagships as alternating large
plates (title, role, one-line outcome), then an **Also** ledger of mono rows (title · client ·
year · kind) for everything else. Categories become a chip filter at most.

### Case study template
- Full-width opening plate with caption.
- Facts bar: Client / Role / Team / Year / Stack (not "Tools").
- One-line outcome at the top.
- Prose stays at 680px; images break out to 1200px or full-bleed.
- Section rhythm: Problem → Approach → three to five titled **Decisions**, each with a crop →
  Outcome → Credits.
- Next-case footer.

### Services
Rename **What I do**, reorder: product design and design systems first; builds (maps, tools,
pipelines) second; public art third as a door to Yonder.

### About
Keep portrait and headline. Facts reordered role-first. Add résumé PDF, LinkedIn, GitHub.

### Contact
Email first and large, form second, one availability sentence.

### Nav and header
Work · About · Contact (+ Field Notes when live). Services folds into About or becomes "Hire".
Worlds off nav. Subtitle: "Product design · Systems · Algoma, WI".

### Motion
One intentional move per page: seam slide-in on home, scroll reveal on inner pages. No parallax.

## 4. The weak link: clean case-study exports (Foggy, from Figma)
Spec: select frame → export PNG @2x, no chrome, no device mockups. Trim to 1600×1000 for
primary screens, 1200×800 for detail crops, design-system sheets 1600 wide. Run through Astro's
image pipeline (`astro:assets`, WebP/AVIF). The umber plate is applied in CSS, never baked in.

Needed:
- **Optum:** dashboard, appointments, OCM letters, one design-system sheet, the four personas
  re-laid as a 2×2, one readable crop of the research board.
- **NielsenIQ:** dashboard, login, a cropped IA, UI elements.
- **Preserve Explorer:** already clean; add a phone crop.
- **Donor pipeline:** the SVG diagram re-drawn in system palette.

The two chrome-removed Optum crops in `archive/prototypes/home-2026-10/img/` are placeholders.

## 5. Build order (after Foggy approves the direction and the reference pass is done)
1. Plate components + case-study template.
2. Optum as the proof case with the clean exports.
3. Work index.
4. Homepage (Two Hands).
5. Services / About / Contact / nav.
