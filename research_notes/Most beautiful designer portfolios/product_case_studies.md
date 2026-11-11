# Product designer and design-engineer portfolios: case-study craft (2025–2026)

Method note: every URL below was fetched on 2026-11-10 with `curl -L` (HTTP status recorded) and/or WebFetch. Visual framing (plates, crops, mockups) was inferred from page HTML/CSS signals (counts of `<video>`, `aspect-ratio`, `<figcaption>`, background colors) and WebFetch text extraction. **No screenshots were rendered**, so claims about how screens look are structural, not visual. A report writer should treat "beauty" judgments as unverified unless someone looks at the pages.

## Which senior product designers / design engineers have personal sites widely cited as gold-standard?

### Takeaway
The most-cited "taste" sites (Rauno Freiberg, Emil Kowalski, Paco Coursey, Jakub Krehel, Brian Lovin, Alasdair Monk) mostly skip classic case studies. They prove craft through dated logs of interaction studies, shipped open-source components, and essays. The strongest live example of the full case-study format among current independents is Gabriel Valdivia's site. Simon Pan's Uber case study, once the canonical gold standard, is now password-gated.

### Cited Findings

**Shortlist (all live, HTTP 200, unless marked)**

1. **Gabriel Valdivia, gabrielvaldivia.com** (200). Independent product design and strategy consultant.
   - The work index is filterable by sector: AI, Children, Civic Tech, Consumer, Creator Economy, Enterprise, Fintech, Hardware, Healthcare, Social, VR. Projects include Kale, Daylight, Supper (BI), Workmate, Slingshot AI, Patreon 2.0, and Facebook 360. Titles listed on the index include "Online Retirement: Modernizing federal retirement", but `/work/online-retirement` returns 404 and no link to it appears in the index HTML — [gabrielvaldivia.com/work](https://www.gabrielvaldivia.com/work)
   - Case template: a short overview, then a credits block (**Team** with linked collaborators, **Services**, **Date**), hero images, then headed sections pairing prose with imagery. Daylight's sections are "Boot up animation", "App selection", "Home explorations", "Web app", and "Design System". Each states a design rationale, e.g. the boot animation framed as "more like an arrival", app selection "action-first" and organized by intent — [Daylight case](https://www.gabrielvaldivia.com/work/daylight)
   - Supper (AI business intelligence, 2023–2025) has one paragraph of positioning, then media only. The page CSS includes a warm off-white `background-color:#FFFDFA` and fixed `aspect-ratio` media boxes (1.6, 1.97) — [Supper case](https://www.gabrielvaldivia.com/work/supper)
   - Weaknesses:
     - No outcomes or metrics.
     - No visible captions; alt text is generic ("Daylight - image 1").
     - Stray "0" counters render in the extracted text.
     - No next-case navigation, only a footer.
     - Source: [Daylight case](https://www.gabrielvaldivia.com/work/daylight)

2. **Rauno Freiberg, rauno.me** (200). Staff Design Engineer at Vercel, previously at The Browser Company (Arc), and a contributor to cmdk — [yespress profile](https://yespress.io/rauno-freiberg)
   - `/craft` is a reverse-chronological log of about 30 dated interaction studies, from "Posters, August 2026" and "History of Software Design, February 2026" back to 2021. Entries are tagged "View Production", "View Prototype", or "Read Essay" — [rauno.me/craft](https://rauno.me/craft)
   - The craft page HTML has 65 `<video playsInline loop muted autoPlay>` elements and 83 `aspect-ratio` declarations. Media is reserved-size and loops silently, which is an engineering-as-beauty signal: no layout shift — [rauno.me/craft](https://rauno.me/craft)
   - `/projects` lists History of Software Design (2026), Devouring Details (2025), Web Interface Guidelines (2023), Vesper, Bookmarks, ⌘K, uiwtf, Flow, and UI Playbook — [rauno.me/projects](https://rauno.me/projects)
   - Weaknesses: no problem/decision/outcome case studies and no enterprise work shown. It reads as a design-engineer reel, not a hiring case file.

3. **Emil Kowalski, emilkowal.ski** (200). Design engineer; "In the past, I've worked at Linear and Vercel." He is "currently taking a break from work."
   - Projects: Sonner, Vaul, animations.dev, aiforui.dev.
   - His essays act as case studies: "Building a Toast Component — My experience building Sonner", "Building a Drawer Component", "Developing Taste", "You Don't Need Animations".
   - Source: [emilkowal.ski](https://emilkowal.ski/)
   - Weakness: no product case studies; the homepage leads with a course promo ("Enrollment for my animation course is open!") — [emilkowal.ski](https://emilkowal.ski/)

4. **Paco Coursey, paco.me** (200). "Webmaster at Linear. In the past I've developed the Vercel design system, website, and dashboard."
   - Projects: ⌘K, Writer, Next Themes.
   - The "Now" paragraph states values: "Typography, motion design, copywriting, performance—the web is an endless me[dium]".
   - Source: [paco.me](https://paco.me/)
   - Weakness: the Vercel dashboard work, which is dense enterprise UI, is named but not shown as a case study — [paco.me](https://paco.me/)

5. **Jakub Krehel, jakub.kr** (200). Design engineer, linked to Interfere.
   - `/work/*` pages (drag-gesture, gradients, motion-gestures, shared-layout-animations) embed live, working UI specimens in the prose. The drag-gesture page renders a realistic notification stack (an "Interfere 11:24 AM Login to Interfere" card), then a "Structure" section explaining the build.
   - The page has 10 `<figure>` elements and 0 raster `<img>`, so the specimens are real DOM, not screenshots.
   - Source: [jakub.kr/work/drag-gesture](https://jakub.kr/work/drag-gesture)
   - Weakness: these are component studies, not client case studies; no outcomes.

6. **Josh Puckett, joshpuckett.me** (200). Co-founder of Iteration (a design practice for early-stage founders) and Graphical. He led teams at Wealthfront, Dropbox, and Groupon.
   - The bio is an "interactive paragraph": hovering a role blurs (`filter: blur(2px)`) and dims the other text, and company names tint to their brand color on hover.
   - Projects: Interface Craft, DialKit, Pica, Locale.
   - Source: [joshpuckett.me](https://www.joshpuckett.me/)
   - Weakness: no case-study pages were found; `/interface-craft` returned 404 on the guessed path. The Interface Craft project is linked off-site.

7. **Alasdair Monk, alasdairmonk.com** (200).
   - Roles: co-founder of Superlogical (2026–now), founding designer at poolside (2023–2026), VP of Design at Vercel (2022–2023), Principal Designer at HashiCorp, UX Architect at Heroku, Head of Design at GoCardless.
   - The site is a one-page résumé plus Mac and iOS apps (Echo, Bonsplit "120 fps tab bar and split pane library").
   - Source: [alasdairmonk.com](https://www.alasdairmonk.com/)
   - Weakness: no case studies at all. It belongs on the list only as a model of restraint plus enterprise/devtools credibility.

8. **Brian Lovin, brianlovin.com** (200). "Software designer… currently making AI products at Notion."
   - The site is a hub of writing (2026 posts), "App Dissection — Breaking down well-designed apps", "Staff Design — Navigating the IC career path", "Crit — Solicited app redesigns", and a curated "Sites" list of well-designed websites.
   - Source: [brianlovin.com](https://brianlovin.com/)
   - Weakness: no first-person case studies.

9. **Johny Vino, johnyvino.com** (200). Human Interface Designer at Apple since 2019, inventor on 7+ patents — [johnyvino.com](https://johnyvino.com/)
   - The one-page portfolio mixes Apple Maps work (iOS 14–26, linked to keynote YouTube timestamps and press) with enterprise work: Zoho Dashboards, Tekion automotive retail, and Vinosoft (wine-trade orders/accounting) — [johnyvino.com](https://johnyvino.com/)
   - Apple work is shown in device frames. Enterprise work appears as flat screenshot crops in multi-image galleries. There are titles and short descriptions but no image captions — [johnyvino.com](https://johnyvino.com/)
   - DesignerUp highlights his case studies' "representing complex data" sections and calls him an "engineers' designer" — [DesignerUp](https://designerup.co/blog/10-exceptional-product-design-portfolios-with-case-study-breakdowns/)
   - Weakness: there are no dedicated case-study pages any more. Cards link out to YouTube, 9to5Mac, and company homepages.

10. **Karri Saarinen, karrisaarinen.com** (200). Linear co-founder/CEO.
    - The site is essays only, but several are retrospective case studies: "Designing Coinbase", "Building Airbnb design system", "Developing Airbnb Cereal", "Every feature should earn its place", "Output isn't design".
    - Source: [karrisaarinen.com](https://karrisaarinen.com/)
    - Weakness: blog format; screens play a supporting role.

**Checked and demoted**
- Simon Pan: `simonpan.com/work/uber/` returns **401 (Flywheel "Password Required")**. The once-canonical Uber pickup case study is no longer public — [simonpan.com/work/uber](https://simonpan.com/work/uber/). DesignerUp still describes it as walking through "challenge, kickoff, research, reframing, redesign, strategy, launch, and impact" — [DesignerUp](https://designerup.co/blog/10-exceptional-product-design-portfolios-with-case-study-breakdowns/)
- Karolis Kosas (karoliskosas.com/cinemaclub, 200)
  - Strengths: has "My role" and "Results" sections and clear decision prose (default sort by distance; favorites based on users frequenting about three cinemas).
  - Weaknesses: results are given without figures, images have no captions or alt beyond his name, there is no next-case link, and no date is given (the project is pre-2020) — [Cinema Club](https://karoliskosas.com/cinemaclub/)
- Tom Petty's dashboard case study (`tom.pe/gc-dashboard.html`) returns **404** — [tom.pe](https://www.tom.pe/gc-dashboard.html)
- Raphael Schaad, raphaelschaad.com (200)
  - Profile: "Designer & Engineer" specializing in "user experience, data visualization, and human–machine learning", with an MIT background, building Cron.
  - Weakness: the full portfolio is offered only on request — [raphaelschaad.com](https://raphaelschaad.com/)
- Not reachable (curl 000/timeout) on 2026-11-10: ryolu.com, juliustarng.com, joeybanks.com, jordansinger.com, danwilson.design, eliseo.design. These are **unverified**.

**What hiring leaders say they want**
- Michael Yap (Head of Product Design, Acorns; ex-Etsy) wants case studies that show "how design shaped key decisions, not just how screens looked". He treats craft (typography, imagery, filmed prototype motion) as "a trust signal" before the case study is read — [Josh Cusick Substack guest post](https://joshcusick.substack.com/p/what-i-look-for-in-design-portfolios)
- Design-engineer review guidance: "A Design Engineer who only shows renders invites the worst suspicion… that a designer handed you the visuals and an engineer wired them up" — [learncursor.dev](https://www.learncursor.dev/tracks/design-engineer-interview/design-engineer-portfolio-and-craft-review)
- Roundups repeatedly recommend fewer, deeper case studies, impact in the first scroll, and an explicit role. These are vendor blogs, so treat them as opinion — [UXfolio](https://blog.uxfol.io/ux-portfolio-examples/), [Fountain Institute](https://www.thefountaininstitute.com/blog/senior-product-designers-hired)

### Inferences
- No single site on this list meets all three audiences:
  - Design-engineer sites (Rauno, Jakub, Emil) win the engineering director and the agency creative director but give a hiring manager no decisions or outcomes.
  - Valdivia's case template wins the hiring manager's structure test (team, services, date, rationale) but lacks outcomes and captions.
  - donkrumpos can combine the two: Valdivia's credits block and rationale-per-section, plus Rauno/Jakub's reserved-ratio, live-or-looping media, plus captions and outcomes, which none of them have.
- Captions are the near-universal gap. 0 `<figcaption>` elements were found on Valdivia, Kosas, or Rauno's craft page. A field-journal "plate" with a numbered mono caption (Plate 3, what to look at, the decision it shows) would be distinctive, not derivative.
- Valdivia's sector filters, which include Enterprise, Healthcare, and Civic Tech, are a direct model for showing Optum/NielsenIQ/maps work next to murals without tone clash.

### Gaps
- Visual framing (dark plates vs. light backgrounds, crop strategy, device-mockup use) was not visually confirmed for any site; no screenshots were taken.
- No current, verifiable example was found at Stripe, Figma, or Apple whose personal site has full public case studies. Most are gated, essay-only, or unreachable.

## Which present enterprise / complex-UI work beautifully?

### Takeaway
I found weak evidence that anyone on the "taste" circuit presents dense enterprise UI beautifully in public. The best live examples are Valdivia's Supper (BI) and his sector-filtered index, and Johny Vino's flat Zoho/Tekion galleries. Paco Coursey and Alasdair Monk name Vercel/HashiCorp dashboard work but don't show it.

### Cited Findings
- Supper is an AI business intelligence tool, "explore data and visualize trends without SQL knowledge… transparent sourcing and consistent logic". The case is presented as a short paragraph plus fixed-ratio media on a warm #FFFDFA ground — [Supper](https://www.gabrielvaldivia.com/work/supper)
- Johny Vino shows Zoho Dashboards and Vinosoft accounting screens as flat crops in multi-image galleries rather than device mockups — [johnyvino.com](https://johnyvino.com/)
- Paco Coursey "developed the Vercel design system, website, and dashboard" but shows no dashboard case — [paco.me](https://paco.me/)
- Alasdair Monk lists Vercel, HashiCorp, and Heroku leadership with no visual work — [alasdairmonk.com](https://www.alasdairmonk.com/)
- A GitHub PR shows the "enterprise dashboard as case study" approach: a Carbon-inspired theme, plus a case page covering architecture, key decisions, and known gaps, labeled as a demo — [GitHub PR](https://github.com/Albuqr/Data-Platform/pull/3). Low-authority source.

### Inferences
- Senior enterprise designers seem to keep dense work behind NDA, passwords (Simon Pan's 401 is typical), or essays. A public, beautifully captioned Optum/NielsenIQ case with redacted data would itself be a differentiator.
- Flat crops on a consistent ground (Vino, Valdivia) beat device frames for dense screens. This supports donkrumpos's planned umber plates. Crop to the decision region and caption it rather than shrinking full screens.

### Gaps
- I found no healthcare-specific personal portfolio that met the beauty bar and could be verified live.

## Which demonstrate engineering craft as part of the beauty?

### Takeaway
Rauno, Jakub Krehel, Josh Puckett, and Alasdair Monk show engineering in the page itself: reserved-ratio autoplay media, live DOM specimens, blur-focus text interactions, and 120 fps native components.

### Cited Findings
- Rauno's /craft uses 65 muted inline looping videos and 83 aspect-ratio boxes, so there is no layout shift on a media-heavy page — [rauno.me/craft](https://rauno.me/craft)
- Jakub embeds working interactive components (0 raster images on the drag-gesture page) with a "Structure" explanation — [jakub.kr](https://jakub.kr/work/drag-gesture)
- Josh Puckett's bio paragraph uses CSS blur/dim focus on hover, with a `prefers-color-scheme: dark` override — [joshpuckett.me](https://www.joshpuckett.me/)
- Alasdair Monk ships "Bonsplit — 120 fps tab bar and split pane library for macOS" — [alasdairmonk.com](https://www.alasdairmonk.com/)
- Emil Kowalski's and Paco Coursey's open-source components (Sonner, Vaul, ⌘K) are their proof of craft — [emilkowal.ski](https://emilkowal.ski/), [paco.me](https://paco.me/)

### Inferences
- Ideas donkrumpos could borrow:
  - Reserve aspect ratios on every plate.
  - Use muted, looping, `playsinline` clips for map interactions instead of GIFs.
  - Embed one live specimen (for example a small MapLibre map inside a plate) in the map-tools case. That proves "builder", not just "designer".

### Gaps
- No Lighthouse or accessibility audits were run on any candidate.
