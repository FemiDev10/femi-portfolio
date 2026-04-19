# Femi Jimoh Portfolio — Full Project Context
> Paste this into Codex to continue building the portfolio

---

## WHO IS FEMI
- **Name:** Femi Jimoh
- **Role:** Product Designer · Design Engineer · Technical PM
- **Experience:** 5 years professional (Dec 2020 – present)
- **Location:** Lagos, Nigeria · Remote-friendly
- **Email:** femijimoh@gmail.com
- **Status:** Open to new roles

---

## TECH STACK
- Next.js (App Router)
- Tailwind CSS
- Framer Motion (page transitions, scroll animations)
- GSAP + ScrollTrigger (scroll pin, advanced effects)
- DM Sans font (Google Fonts or Fontsource)

---

## DESIGN SYSTEM
- **Background:** #fff
- **Text:** #111
- **Muted text:** #888, #aaa, #bbb, #ccc
- **Borders:** 1px solid #e8e8e8 or #f0f0f0
- **Font:** DM Sans — weights 300, 400, 500
- **Border radius cards:** 10px
- **No dark mode**
- **No hover overlays on cards** — text always visible below image

---

## DESIGN INSPIRATION
- **Grid + overall layout:** ajanwachuku.work
- **Scroll animations:** taamannae.dev
- **HCI project presentation:** diana.lu
- **General white space:** abatisamuel.pro, aydaoz.co

---

## NAVIGATION
```
● Femi Jimoh    Home  Work  Me  HCI  Fragments  Contact    X  Li  Bē
```
- Sticky, `backdrop-filter: blur(8px)`, border-bottom appears on scroll
- Active link = #111, inactive = #aaa
- Logo is a black dot + "Femi Jimoh"

---

## PAGES

### 1. HOME PAGE — sections in order:

**A. Hero**
- Statement: "Femi Jimoh turns messy problems into products people *can't stop using* — then codes every pixel himself."
- Effect: Word-by-word reveal on load — each word starts `color: #ddd, filter: blur(4px)`, staggers to `color: #111, filter: blur(0)` at 80ms per word
- Below statement: two-column meta row fades in after words reveal
  - Built for: Fintech · Health · Consumer · Enterprise
  - Open to: Senior Designer · Design Engineer · Technical PM

**B. Work Grid**
- Filter tabs (plain text spans, NO buttons, NO borders):
  - All¹² | Mobile Apps⁴ | Web App² | Experimental⁴ | HCI²
  - Active = #111 + 1.5px black underline. Inactive = #666. Zero background.
- 3-column grid, cards stagger in with IntersectionObserver
- Each card: image on top (aspect-ratio 4/3.2, border-radius 10px) + text below
- Card text: Title + Year on same row, description, link
- **Magnetic cursor effect on cards ONLY:**
  - Hide default cursor site-wide (`cursor: none`)
  - Small dot (10px) follows mouse instantly
  - Ring (36px border) follows with lerp lag (factor 0.1)
  - On card hover: card translates `dx*0.12, dy*0.12` | image translates `dx*0.08, dy*0.08 scale(1.02)` | ring expands to 60px | "View →" label appears
  - On mouseleave: reset with `transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1)`

**Cards content:**
1. F1 Money Race (2025) — dark bg #0c0c0c — Flutter/HCI experiment
2. Chainrails (2025) — warm bg #f0eeea — SDK payment UI
3. Peer Virtual Cards (2025) — blue bg #e6edf4 — locked 🔒
4. Blueprint Savings (2024) — dark navy bg — VISA card spinning animation
5. Decision Fatigue Study (2024) — cream bg — HCI research N=48
6. Design System DP (2025) — dark grid bg — "DP." in large text

**C. Quote Break — Scroll Pin + Word Scramble**
- Wrapper: `height: 500vh`, position relative
- Inner panel: `position: sticky; top: 0; height: 100vh; display: flex; align-items: center; padding: 48px`
- Text: "Most designers stop at Figma. I stop at [ROLLING WORD]"
- Rolling word is italic, color #bbb, inside a clip container
- As user scrolls through the wrapper, word scrambles to next value:
  1. production. → "No handoff. No translator. No waiting. Just the work, shipped."
  2. the browser. → "Designed in Figma. Coded by hand. Zero dev dependencies."
  3. your hands. → "Research, design, code — one person, full ownership."
  4. the real world. → "Shipped. Live. Used by real people. That's the metric."
  5. shipped. → "From brief to browser. No excuses. Just delivery."
- Scramble: 22 frames at 28ms, random chars settle left to right
- Progress dots (5) on right side track current step
- Subtitle fades out/in on each change
- Use GSAP ScrollTrigger: `pin: true, scrub: 1`

**D. Fragments Section**
- Background: #090909 with dot grid — `background-image: radial-gradient(circle, #2a2a2a 1px, transparent 1px); background-size: 28px 28px`
- Label: "Experiments & fragments" + "Drag anything ↗"
- Canvas: `position: relative; height: 860px`
- All items are `position: absolute`, draggable via mousedown/mousemove/mouseup
- Items scattered across canvas, each slightly rotated
- Fragment items (all draggable):
  - F1 app icon (gradient red, 🏎 emoji, 110x110, border-radius 24px)
  - Phone mockup (Peer Virtual Cards)
  - Payment UI card (Orthrus/Chainrails)
  - VISA card (gradient purple/blue)
  - Gaze study icon (purple gradient with SVG eye)
  - Colour tokens grid (8 swatches)
  - LMS icon (📚)
  - Nigeria research stamp (yellow border stamp style, 500+ users)
  - Social Savings icon (💰)
  - Decision fatigue bar chart
  - Contripay icon (💳)
  - 99% badge
  - Softkode stat (50+)
  - Check-it icon (☑️)
  - DP Design System badge (yellow)

**E. Testimonials Section**
- Heading: "Trusted by amazing people and teams across the globe."
- 3-column CSS grid, 2 rows, shared borders (no gap):
  - `border-top` + `border-left` on grid, `border-right` + `border-bottom` on each cell
- Layout: quote, logo, quote / logo, quote, logo
- **Logo cells:** Count-up numbers on IntersectionObserver trigger
  - 500+ (Users researched) → hover shows "FourthCanvas"
  - 25% (Dev time saved) → hover shows "DriveVault"
  - 5 (Years experience) → hover shows "Paymi Solutions"
  - Count easing: `1 - Math.pow(1 - progress, 3)` over 1000ms
  - On hover: fade out number, show company name in #ccc
- **Quote cells:** Blank on load, fade in on hover, stay visible permanently
  - Quote 1: "Femi shipped our design system in 3 weeks." — Adaeze Okonkwo, CPO Paymi Solutions
  - Quote 2: "He understood our users better than we did after the first week." — Sarah Adeyemi, CEO Contripay
  - Quote 3: "500+ users across all 36 states. His rigour is rare." — Tunde Kehinde, Research Lead FourthCanvas

**F. Scroll Fingerprint Footer**
- Heading: "We were watching how you read this. Here's what we saw."
- Sub: "Everyone scrolls differently. Yours is already drawn below."
- Captures scroll velocity samples throughout page visit
- When this section enters viewport (IntersectionObserver), reveals user's waveform
- Their waveform: SVG path, black, 2px stroke, 64px height, full width
- Label above waveform: "You — just now" + scroll personality descriptor
  - Pauses > 30% = "Careful reader"
  - Avg velocity > 1.5 = "Fast skimmer"
  - Spikes > 20% = "Curious explorer"
  - Default = "Steady reader"
- Divider line
- "Everyone else" — list of previous visitor waveforms in light grays (#c8c8c8 range)
- Each row: SVG waveform + time ago label
- "Add mine to the wall →" — plain underlined text, color #111, always visible
- Saves to persistent storage, shows all previous visitors

**G. Footer Bar**
```
● Femi Jimoh    Home  Work  Me  HCI  Contact    ● Open to new roles    © 2025 Femi Jimoh. Built by hand.
```

---

### 2. ABOUT PAGE (/me)

**Intro:**
"Designer who builds. Engineer who designs.
5 years of making things *work beautifully* —
without handing them off to anyone."

**Two-column bio:**
Left: "I'm Femi Jimoh — a product designer, design engineer, and PM based in Lagos. I started in UX, got obsessed with HCI research, then taught myself to code so I'd never have to describe a design to a developer again."

Right: "I care about the gap between what a product promises and what it actually delivers. Most of my best work has been closing that gap — quietly, precisely, without drama."

**Currently pills:** Open to new roles · Lagos · Remote-friendly · Available now

**Experience list** (newest first, no descriptions, just company + role + date):
1. DriveVault — Product Designer & PM — Feb '25 – now
2. Paymi Solutions — Product Designer (UI/UX) — Jun '24 – now
3. Contripay — Product Designer — Oct '24 – Mar '25
4. FourthCanvas — UX Researcher — Apr '24 – Jun '24
5. Aimsity — UI/UX Designer — Nov '23 – Dec '23
6. Check-it — UI/UX Designer — Aug '22 – Oct '22
7. Softkode — Lead Designer — Dec '20 – Dec '22

**Skills grid (3 cols):**
- Design: Product Design, UX / Interaction, Design Systems, Visual Design
- Engineering: React / Next.js, Flutter, Tailwind CSS, Framer Motion
- Research & PM: HCI Research, Mixed Methods, Technical PM, QA & Delivery

**Elsewhere links:** LinkedIn ↗ · X / Twitter ↗ · Behance ↗ · Resume ↗ · femijimoh@gmail.com

---

### 3. CONTACT PAGE (/contact)

- Heading: "Let's build something *worth remembering.*"
- Sub: "Whether you're hiring, collaborating, or just want to talk design and code — my inbox is open. I reply within 24 hours."
- Big email link: femijimoh@gmail.com (font-size 26px, border-bottom 1.5px solid #111)
- Divider
- Socials row: LinkedIn · X/Twitter · Behance · Resume PDF
- Availability: ● green pulse dot + "Available for new roles · Lagos · Remote-friendly"

---

## KEY ANIMATIONS SUMMARY

| Effect | Where | How |
|--------|-------|-----|
| Word reveal | Hero | Stagger blur→sharp, 80ms per word |
| Card stagger | Work grid | IntersectionObserver, translateY + opacity |
| Magnetic cursor | Work grid cards only | mousemove lerp, ring + dot cursor |
| Scroll pin + scramble | Quote section | GSAP ScrollTrigger pin, char scramble |
| Dot grid | Fragments section | CSS radial-gradient background |
| Drag | Fragments items | mousedown/mousemove/mouseup absolute positioning |
| Count-up + hover flip | Testimonials logos | IntersectionObserver, cubic easing |
| Blank → hover reveal | Testimonials quotes | opacity 0→1, stays revealed |
| Scroll fingerprint | Footer | IntersectionObserver, SVG path from velocity samples |
| Page transitions | All nav | Framer Motion AnimatePresence |

---

## WHAT'S NOT BUILT YET
- Case study pages (individual project deep dives)
- HCI page
- Fragments page (separate dedicated page)
- Real photos in photo section
- Real testimonials (placeholders used)
- Actual project links

---

## IMPORTANT RULES
1. Filter tabs are `<span>` not `<button>` — zero browser default styles
2. No hover overlays on work cards — text always shows below image
3. Magnetic cursor ONLY on work grid cards
4. Fragments section dot grid background is CSS only, no image
5. Scroll fingerprint "Add mine" button is plain underlined text, never transparent
6. Experience list has NO bullet descriptions — just company, role, date
