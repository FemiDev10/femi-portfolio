# Femi Jimoh — Portfolio Context

## Project Overview
Personal design portfolio for **Femi Jimoh** — Product Designer + Design Engineer. Built with Next.js App Router, Tailwind CSS, deployed on Vercel via GitHub (`FemiDev10/femi-portfolio`). Working directory: `/Users/mac/Desktop/Myport/femi-portfolio`.

---

## Tech Stack
- **Framework**: Next.js (App Router) — read `node_modules/next/dist/docs/` before touching Next.js internals
- **Styling**: Tailwind CSS + inline styles + `<style>` JSX blocks (media queries live in `<style>` blocks, NOT inline)
- **Deployment**: Vercel → GitHub `FemiDev10/femi-portfolio`, branch `main`
- **Key rule**: CSS media queries cannot override inline styles. All layout-critical responsive styles must use `className` + a `<style>` block.

---

## File Structure (key files)

```
app/
  page.tsx                          — Home page (hero, project grid, filters)
  projects/
    [slug]/page.tsx                 — Slug-based case study system (PRIMARY)
    f1-money-race/page.tsx          — Custom dedicated page (full editorial, black/white/grey)
    paymi-agent/
      page.tsx                      — Server component, exports metadata, imports PaymiPage
      PaymiPage.tsx                 — Full client-side case study ("use client"), ~1000 lines
    moneyrace/page.tsx              — Simple animated oval track (secondary)
  hci/
    fall-detection/page.tsx         — HCI case study
components/
  Nav.tsx                           — Navigation
  Footer.tsx                        — Footer (PhysicsCanvas, CTA, social links)
  PhysicsCanvas.tsx                 — Matter.js physics sim in footer
lib/
  projects.tsx                      — Project card data (thumbnails, titles, links, categories)
public/
  moneyRace/                        — All F1 Money Race assets (committed)
  paymi app/                        — ALL Paymi Agent assets (note: space in folder name)
    Homepage.png                    — 3D marketing photo (phone on orange pedestal) — HERO IMAGE
    mainHome.jpeg                   — Real UI screenshot — used as portfolio card thumbnail
    Dashboard Updated.png           — Redesigned dashboard (wide grey-bg composition, 2 phones)
    stateofacc.png                  — Statement of account (very long vertical document)
    Activate Account.png            — KYC stepper progress (wide landscape composition)
    Login User.png                  — Auth screens composition
    Phone Verification.png          — OTP verification screens
    Create Password.png             — Password creation screens
    Device Reg..png                 — Device registration screens
    old dashboard design/
      Component.png                 — Original v1 dashboard (single phone, purple card)
      Old Design.png                — Even earlier design iteration
    individual account/
      Step 1.png                    — Account type selection (landscape composition)
      Step 2.png                    — Personal details (VERY wide, many screens — stacked layout)
      Step 3.png                    — Address details (landscape composition)
      Step 4.png                    — Selfie / face match (VERY wide — stacked layout)
      Step 5.png                    — KYC documents (landscape composition)
      KYC Completed.png             — KYC completed states (landscape composition)
    transactional history/
      Component.png                 — OLD homepage screenshot (was used as "before")
      Component-1.png               — Transaction history + request statement
      Categories filter.png         — Filter by category
      Categories filter-1.png       — Filter by status
      Component-2.png               — Statement timeframe picker
      Component-3.png               — Custom date range
    add money/
      Withdraw.png                  — POS withdrawal — enter amount
      insert card.png               — Insert card into mPOS
      card inserted.png             — Card detected
      card pin.png                  — Customer enters PIN
      select acc type.png           — Select account type
      sucess page.png               — Withdrawal successful
      Add money-2.png               — Add money entry screen
      transfer.png                  — Bank transfer details
    bank network status/
      first desgin .png             — FIRST design (flat good/bad bank lists — before)
      Check bank network - withdrawal.png   — Final: withdrawal tab (per scheme)
      Check bank network - transfer.png     — Final: transfer tab
      Check bank network - bills.png        — Final: bills tab
      Check bank network - withdrawal_card.png  — OLD file (no longer used)
      Check bank network - deposits_transfer.png — OLD file (no longer used)
      Withdraw.png                  — Withdraw screen (no longer used in this section)
    beneficiar transfer money/
      Bill.png, Bill-1.png, Bill-2.png, Bill-3.png, Bill-4.png
      New.png, New-1.png, New-2.png
    internet connection & session timeout/
      Component.png, Component-1.png, Component-2.png
    state/Success/
      Airtime.png, Cable TV.png, Data.png, Electricity.png
      Success receipt.png, Error receipt.png, Transfer.png, Withdrawal.png
```

---

## Slug System (`app/projects/[slug]/page.tsx`)

All standard case studies use this file. **Static routes override dynamic routes** — never create a `page.tsx` under `app/projects/[name]/` unless you intend to bypass the slug system entirely.

**Current slug entries:**
- `payzeep-merchant-portal`
- `payzeep-merchant-admin`
- `safepulse`
- `payzeep-checkout`
- `payzeep-api-docs` (has links: Live Docs + Checkout Demo)
- `paymi-agent` → **BYPASSED** — uses dedicated `app/projects/paymi-agent/page.tsx`
- `drivevault-driver`
- `drivevault-rider`

---

## Paymi Agent Case Study — FULL CUSTOM PAGE

### Route
`/projects/paymi-agent` → `app/projects/paymi-agent/page.tsx` (server) → `PaymiPage.tsx` (client)

### Image path helper
```ts
const p = (path: string) => `/paymi%20app/${path.replace(/ /g, "%20")}`;
```
All images under `public/paymi app/` use this. Filenames with spaces are URL-encoded. `&` in folder names (`internet connection & session timeout`) renders fine — browser decodes it correctly. All `<Image>` components use `unoptimized` prop.

### Key components in PaymiPage.tsx

**`Img`** — Portrait phone screenshots, no synthetic frame:
```tsx
<Img src={p("...")} width={220} label="..." index={i} shadow={true} />
```

**`WideImg`** — Landscape Figma compositions (multi-screen layouts in grey containers):
```tsx
<WideImg src={p("...")} label="..." maxWidth={460} index={0} />
```

**`CountUp`** — Count-up animation using `useInView` + `requestAnimationFrame`  
**`Pulse`** — Pulsing green/yellow/red network status dots  
**`Ticker`** — Continuous horizontal scrolling marquee  
**`Callout`** — Left-border italic callout quotes  

### CSS classes (in `<style>` block)
```css
.scr-row        — horizontal scroll row, overflow-x auto, no scrollbar
.two-col        — flex two-column layout (collapses at 900px)
.step-row       — CSS grid 300px / 1fr for KYC steps (side-by-side)
.step-row.rev   — flipped: 1fr / 300px with order overrides
.step-stack     — full-width stacked: text above, image below (used for steps 2 & 4)
.step-text      — grid cell: KYC step text block
.step-img       — grid cell: KYC step image block
.hero-phone-wrap — hides on mobile (max-width: 640px)
.vs-divider     — hides on mobile (max-width: 640px)
.pad            — reduced padding on mobile (64px 24px)
.paymi-ticker   — scrolling marquee animation
.paymi-ring     — pulsing dot animation
```

### Sections (top to bottom)
1. **Hero** — dark `#050d1a`, `Homepage.png` (3D phone on pedestal) floating with scroll parallax + idle float. Hero image: `clamp(460px, 44vw, 700px)` wide. No blue gradient — pure dark with subtle dot grid.
2. **Ticker** — scrolling tag strip
3. **Overview** — product description + count-up stats grid
4. **The Challenge** — 3 numbered problems (01/02/03)
5. **Redesign 01 — Home Screen** — before (`old dashboard design/Component.png`, maxWidth 280) vs after (`Dashboard Updated.png`, maxWidth 460) + 4-point design decision grid + Callout
6. **POS Card Withdrawal** — 6-screen scroll row (`Withdraw`, `insert card`, `card inserted`, `card pin`, `select acc type`, `sucess page`)
7. **Add Money** — 2 screens (`Add money-2.png`, `transfer.png`) — separate section from withdrawal
8. **Bank Network Monitor** — dark section. Design evolution: `first desgin .png` (flat list) → `Check bank network - withdrawal.png` (tabbed). "Why it changed" explanation card. All 3 tab screenshots in scroll row. "The Aha Moment" card.
9. **KYC Onboarding** — 5 steps. Steps 1, 3, 5 use `.step-row` / `.step-row.rev` grid. Steps 2 & 4 use `.step-stack` (text above, full-width image below). KYC Completed: 2 WideImg at maxWidth 460.
10. **Connection & Session Timeout** — dark `#111`, 3 component screenshots centered
11. **Transaction History** — 5-screen scroll row (justified center) + Statement of Account (height-constrained to 560px with white gradient fade at bottom)
12. **Transaction States** — Bill payment success/error receipts. 2 scroll rows (justified center).
13. **Saved Beneficiaries** — 8-screen scroll row
14. **Authentication** — 4 WideImg screens (Login, Phone Verification, Create Password, Device Registration)
15. **Reflection** — italic heading + 3 body paragraphs + 4 numbered learnings
16. **Credits** — Femi Jimoh + Oladunni Treasure + Back to work link

### Portfolio homepage card (lib/projects.tsx)
The Paymi card thumbnail now uses the **actual** `mainHome.jpeg` image (real UI screenshot), not a generated placeholder:
```tsx
thumbnail: (
  <div className="w-full h-full relative overflow-hidden bg-[#0b1120]">
    <img src="/paymi%20app/mainHome.jpeg" alt="Paymi Agent mobile app"
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
  </div>
),
```

---

## Home Page (`app/page.tsx`)

- Project grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, shows first 6 matching filter
- Filter section has `id="work"` for `/#work` hash navigation
- Each card has a `thumbnail: React.ReactNode` — either JSX mockup or real asset
- **F1 Money Race card thumbnail**: `<video src="/moneyRace/screen-recordingV2.mov" autoPlay muted loop playsInline>` on `bg-[#0d0d12]`, sized `height: 115%` centered
- Categories: "Mobile Apps", "Web App", "Experimental", "HCI"

---

## Nav (`components/Nav.tsx`)

- "Work" link → `href="/#work"` (scrolls to grid on home, navigates from other pages)
- `isActive()` returns `false` for any href containing `#`

---

## Footer (`components/Footer.tsx`)

- Big CTA section (white bg) → PhysicsCanvas → hint strip (dark) → Footer bar (dark)
- Socials: LinkedIn, X/Twitter, Behance, Resume PDF
- Nav links: Home, Work, Me, HCI, Fragments, Contact
- Mobile: footer-bar switches to white background

---

## F1 Money Race Case Study (`app/projects/f1-money-race/page.tsx`)

Fully custom editorial page. Key design rules:
- **Palette**: black / white / grey only (`#111`, `#f0f0f0`, `#888`, `#555`)
- **Screen component**: flat `#f0f0f0` bg, zero border-radius, uses CSS var `--sw` for responsive width
- CSS classes: `.mr-sec`, `.mr-screen-wrap`, `.mr-screen-inner`, `.mr-overview-grid`, `.mr-stats-grid`, `.mr-decision-row`, `.mr-v1v2`, `.mr-version-frame`, `.mr-screens-row`, `.mr-facts-grid`, `.mr-arrow`

---

## Design Constraints / Rules

1. **No inline style for responsive things** — use className + `<style>` block
2. **No border-radius on phone screens** — use flat grey `#f0f0f0` backgrounds
3. **Black/white/grey palette only** for F1 Money Race page
4. **No comments** in code unless the WHY is non-obvious
5. **Videos**: always `autoPlay muted loop playsInline`
6. **Images with spaces in path**: always use the `p()` helper and `unoptimized` on `<Image>`
7. **Git**: always quote `app/projects/[slug]/page.tsx` in shell commands (zsh glob)
8. **Public assets**: must be explicitly `git add`ed — they don't auto-stage
9. **No synthetic phone frames** — Figma exports already have phone frames baked in. Use `Img` or `WideImg`, never wrap in an extra frame component.
10. **Wide vs narrow images**: `Img` for portrait single-phone screenshots; `WideImg` for landscape multi-phone Figma compositions

---

## Known Image Notes — Paymi

| Image | Type | Notes |
|-------|------|-------|
| `Homepage.png` | Portrait | 3D marketing shot — phone on orange pedestal. **Hero image only.** |
| `mainHome.jpeg` | Portrait | Real app UI screenshot. **Portfolio card thumbnail only.** |
| `Dashboard Updated.png` | Wide | Redesigned dashboard — 2 phones in grey bg |
| `old dashboard design/Component.png` | Portrait | Original v1 — single phone, purple balance card |
| `individual account/Step 2.png` | VERY wide | Many phones in a row — use `stack: true` / `.step-stack` |
| `individual account/Step 4.png` | VERY wide | Many phones in a row — use `stack: true` / `.step-stack` |
| `stateofacc.png` | Very tall | Long document — constrain to maxHeight 560 with fade gradient |
| `bank network status/first desgin .png` | Note: space before `.png` | First design iteration — flat list |

---

## Pages Still To Build

- `/me` — About page
- `/contact` — Contact page
- `/work` — Dedicated work listing page
- `/fragments` — Fragments page
- PhotoCarousel: real photos (currently gradient placeholders)

---

## Potential Paymi Page Fixes Still Outstanding

- Review overall page on mobile (some sections may need responsive tuning)
- The `.step-row.rev` alternating pattern is affected by `.step-stack` interrupting the index — step 3 (index 2) now gets the `.rev` class but step 3 is after the stacked step 2 which doesn't use the grid — visually verify this looks right
- `bank network status/Withdraw.png` exists in the folder but is no longer referenced — can ignore or remove
- `Check bank network - withdrawal_card.png` and `Check bank network - deposits_transfer.png` are old files, no longer used in any section
- Statement of account fade gradient assumes white (#fff) background — matches the section bg

---

## Deployed URLs

- **Production**: Vercel (auto-deploys from `main`)
- **Checkout Demo live link**: `zeepway.com/checkout-demo` (linked from payzeep-api-docs)

---

## Owner

- **Name**: Femi Jimoh
- **Email**: femijimoh10@gmail.com (portfolio contact)
- **GitHub**: FemiDev10
- **Social**: linkedin.com/in/femijimoh · twitter.com/femijimoh · behance.net/femijimoh
