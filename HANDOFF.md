# Portfolio Handoff Brief

**Project:** Femi Jimoh Portfolio — Next.js (App Router), deployed on Vercel
**Repo:** `FemiDev10/femi-portfolio` on GitHub
**Working dir:** `/Users/mac/Desktop/Myport/femi-portfolio`

---

## Routes

- `/` — Home
- `/work` — Projects list
- `/me` — About page (main focus of recent work)
- `/hci` — HCI case studies index
- `/hci/fall-detection` — Fall detection project case study
- `/fragments` — Miscellaneous
- `/contact` — Contact

---

## /me Page (`app/me/page.tsx`)

Fully rebuilt to match the energy of ajanwachuku.work/me. Structure:

1. Large statement at the top
2. Bio paragraph
3. Horizontal auto-scrolling infinite carousel of personal photos/videos
4. "Currently" section
5. Experience list

### Carousel

- `ITEMS` array of ~24 items (images + videos), duplicated `[...ITEMS, ...ITEMS]` for infinite loop
- Auto-scrolls at 1.5px/frame via `requestAnimationFrame`
- **Loop gap fix:** uses `loopResetRef` pointing to first item of second copy. `loopWidth = loopResetRef.offsetLeft - itemRefs[0].offsetLeft` — NOT `scrollWidth / 2` (that was wrong because it included the 48px `padding-left`)
- **Lazy video loading:** `IntersectionObserver` per video card, `rootMargin: "0px 600px 0px 600px"`, no `src` until near viewport, `preload="none"` — prevents page hanging from simultaneous video downloads
- All items use uniform `height: 370px` with NO per-item overrides, so captions always appear below images
- `align-items: flex-start` on the strip so items are top-aligned

### Media files

All personal media lives in `public/myImages/`. Key notes:
- HEIC/HEIF files were converted to JPEG for browser compatibility
- Large MOV files (88MB, 101MB) excluded from git; only MP4 versions are committed
- Filenames with special chars are URL-encoded in `src` props (`&` → `%26`, `@` → `%40`, space → `%20`)

---

## HCI Fall Detection Case Study (`app/hci/fall-detection/page.tsx`)

Replaced `PhotoPlaceholder` boxes in the "Construction" section with real images:

- `/myImages/Falldetection_device.jpeg` — full width, 4:3 aspect ratio
- `/myImages/circuitBoard.jpeg` — left of 2-col grid, 1:1
- `/myImages/ciruitBoardOpened.jpeg` — right of 2-col grid, 1:1

Committed and pushed to `main`.

---

## Key Files

| File | Purpose |
|------|---------|
| `app/me/page.tsx` | /me page + infinite carousel |
| `app/hci/fall-detection/page.tsx` | Fall detection case study |
| `components/Nav.tsx` | Shared navigation |
| `components/PhotoStrip.tsx` | Smaller 6-photo strip (used elsewhere, not the main carousel) |
| `public/myImages/` | All personal photos and videos |

---

## Known Issues

- Vercel occasionally shows "Error Latest" — likely due to repo size (~211MB in public/). Check the **Logs tab** on Vercel for the exact error if a deployment fails.
- Mobile view on `/me` was flagged as a potential improvement area but no specific changes were requested yet.

---

## Git State

Everything is committed and pushed. Vercel auto-deploys from `main`.
