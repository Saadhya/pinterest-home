# Pinterest Home — Frontend System Design Practice

A responsive React + TypeScript implementation of a Pinterest-style homepage, built to support a frontend system-design discussion.

## What to discuss in an interview

- **Page architecture:** `App` owns feed/query state; `Header`, `MasonryGrid`, and `PinCard` are focused, reusable UI boundaries.
- **Masonry:** CSS multi-columns produce a lightweight responsive masonry feed. For production, prefer server-provided image dimensions and a virtualized position-based grid (or CSS Grid masonry once broadly supported) to reduce layout shifts and DOM cost.
- **Data fetching:** `src/api/pins.ts` intentionally models a cursor-paginated request. Replace it with React Query/SWR in production for caching, retries, stale data, request de-duplication, and optimistic saves.
- **Infinite scrolling:** This demo uses an explicit “Explore more” button. A production feed can place an `IntersectionObserver` sentinel after the virtualized list; protect against duplicate cursor requests.
- **Performance:** Image `loading="lazy"`, correctly sized image CDN URLs, responsive `srcset`, stable aspect ratio placeholders, CDN caching, and feed virtualization are key levers.
- **Accessibility:** Semantic landmarks, labeled icon controls, keyboard focus states, useful image alt text, and reduced-motion support are included.

## Run

```bash
npm install
npm run dev
```
