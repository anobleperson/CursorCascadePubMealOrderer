# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build to dist/
npm run preview   # Preview the production build locally
npm run deploy    # Build and deploy to GitHub Pages
```

There is no test framework configured.

## Architecture

This is a single-page React app (Vite + Tailwind CSS) for collecting meal orders at Cascades Pub, then copying them to clipboard to be shared.

**Data layer — `src/MenuOptions.js`**
The menu is a plain JS object keyed by meal name. Each meal has a `type` that controls ordering behaviour:
- `single` — no variations; ordered immediately on click
- `multi` — has a `variations` array (`[{ name, options[] }]`); a step-through modal wizard lets the user pick one option per variation before adding
- `custom` — free-text input via modal

**State — `src/App.jsx`**
Holds the `orders` array in state and provides `addOrder`, `updateOrder`, `removeOrder`, and `clearOrders` handlers. Passes them down to child components.

**Order object shape:**
```js
{ name: string, qty: number, custom: null | { details: string } | { [variationName]: string } }
```

**Components:**
- `MenuList` — renders a grid of `MealCard`s from the menu object
- `MealCard` — handles the ordering UX; opens a React Portal modal for `multi` and `custom` types; the `step` state tracks which variation is being selected in the wizard
- `OrderSummary` — lists current orders with quantity inputs and remove buttons; provides "Copy Orders" (formats and writes to clipboard) and "Clear All"

**Deployment:** GitHub Pages at `https://anobleperson.github.io/CursorCascadePubMealOrderer`. The `base` in `vite.config.js` must match the repo name for assets to resolve correctly.

**Note:** There is an empty `MenuOptions.js` at the project root — this is unused. The real data file is `src/MenuOptions.js`.
