# O-Zone Online Store

**English** | [Русский](README.ru.md)

A framework-free online store front end in vanilla JavaScript (ES modules) and SCSS, bundled with a hand-written Webpack 5 config. The UI is in Russian.

> 🎓 **Training project** · GloAcademy intensive · November 2025. The catalog, search, filters and cart were written in four days during the course (the `Day 1`–`Day 4` commits); the Webpack build, local data, combined filters and deployment were added later, see [Changed afterwards](#changed-afterwards).

**Live demo:** https://barbarafromtonshaevo.github.io/webpack-ozon/

![Deploy](https://github.com/BarbaraFromTonshaevo/webpack-ozon/actions/workflows/deploy.yml/badge.svg)

<p>
  <img src="./screenshots/desktop-catalog.webp" alt="Product catalog with the price filter on desktop" width="68%">
  <img src="./screenshots/mobile-catalog.webp" alt="Product catalog on mobile" width="24%">
</p>

## Features

- 28 product cards loaded from JSON, with a "Hot Sale" badge on discounted items.
- Search as you type, a category menu, a price range and an «Акция» (On sale) checkbox, all applied together.
- A heading above the grid shows the current category and the number of matches; when nothing matches, a hint replaces the empty grid.
- A cart kept in `localStorage`: add and remove items, a header counter and a total. «Оформить заказ» (Place order) sends the cart to the [jsonplaceholder](https://jsonplaceholder.typicode.com/) test API.
- Responsive grid; the price filter sits in a sidebar from 992 px and is hidden on smaller screens.

## Tech stack

| Area | Tools |
| --- | --- |
| Markup | HTML, Bootstrap 4 grid (CDN) |
| Styles | SCSS, GT Eesti Pro font |
| Logic | JavaScript (ES modules), `fetch`, `localStorage` |
| Build | Webpack 5 ([webpack.config.js](webpack.config.js), one function for both modes), webpack-dev-server, sass-loader, css-loader, MiniCssExtractPlugin, HtmlWebpackPlugin, html-loader, CopyPlugin |
| Hosting | GitHub Pages via GitHub Actions |

## Architecture

```
db/db.json ──► getData.js ──► state.js: applyFilters() ──► renderGoods.js ──► card grid
                                   ▲                              └──► changeInfo.js (heading)
        search.js · catalog.js · filter.js  (each updates its own field of the state)
```

1. [src/index.js](src/index.js) imports the SCSS and starts the modules; [search.js](src/modules/search.js), [catalog.js](src/modules/catalog.js) and [filter.js](src/modules/filter.js) write the query, category, price range and sale flag into the shared [state.js](src/modules/state.js) object.
2. `applyFilters()` runs the products from [getData.js](src/modules/getData.js) through every function in [filters.js](src/modules/filters.js) at once; [renderGoods.js](src/modules/renderGoods.js) draws the cards and [changeInfo.js](src/modules/changeInfo.js) updates the heading.
3. [cart.js](src/modules/cart.js) keeps the cart in `localStorage` and renders it with [renderCart.js](src/modules/renderCart.js).

### Webpack build

| Piece | Why |
| --- | --- |
| `sass-loader` → `css-loader` → `MiniCssExtractPlugin.loader` | Runs right to left: SCSS is compiled, `url()`s to fonts and images become dependencies, and the CSS goes to its own file so it loads in parallel with the script |
| `HtmlWebpackPlugin` + `html-loader` | `index.html` is the template; the plugin injects the hashed CSS and JS, html-loader passes the favicons through webpack |
| Asset modules (`asset/resource`) | Images, fonts and the manifest are copied to `dist/` with their final URLs substituted; the regex has `/i` because the fonts are `.OTF` |
| `CssMinimizerPlugin` | Minifies CSS in production; `'...'` in `minimizer` keeps the default Terser for JS |
| `CopyPlugin` | Copies `img/goods/` as is: the image paths are strings in `db.json`, so webpack can't see them and they must not get hashes |

- **Development:** `source-map` (original JS and SCSS in DevTools), no minification, `publicPath: '/'`.
- **Production:** Terser and cssnano, `[contenthash]` in file names for long-term caching, `publicPath: '/webpack-ozon/'` because GitHub Pages serves the project from a subfolder.

### Key decisions

- **Data as a static asset.** `new URL('../../db/db.json', import.meta.url)` makes webpack emit the JSON as a separate hashed file, so the course code still loads it with `fetch` and only [getData.js](src/modules/getData.js) changed.
- **One filter state.** Instead of each handler filtering the full list, the modules share one state object and one `applyFilters()`, so filters combine.

## Project structure

```
index.html            page template (webpack injects CSS and JS)
scss/style.scss       all styles
src/index.js          entry point; src/modules/ holds data, filter, rendering and cart modules
db/db.json            product data; img/goods/ holds one SVG placeholder per product id
webpack.config.js     build config; .github/workflows/ deploys to GitHub Pages
```

## Changed afterwards

- **Build.** The course version ran webpack on defaults and compiled SCSS with the Live Sass Compiler editor extension, with `dist/` and the CSS committed. I wrote the config described above, removed the build output from git, committed `package-lock.json` and set up deployment via GitHub Actions.
- **Data and images.** The course Firebase database now answers `401`, so products load from `db/db.json`. The product photos on the Ozon CDN no longer load either; I replaced them with local SVG placeholders (under 1 KB each: category color, product-type icon, model name).
- **Combined filters.** Picking a category and then entering a price used to reset the category; now all filters share one state.
- **Category menu.** `<li>` click handlers became `<button>`s with `data-category` and `aria-pressed`, with an "All products" item, a highlighted selection and keyboard support.
- **Heading and empty state.** The current category and the match count with Russian plural forms via `Intl.PluralRules`, using `.category-title` styles that were in the course SCSS but unused.

## Getting started

Requires Node.js 22.15+ (needed by webpack-dev-server 6 and sass-loader 17).

```bash
npm install
npm run dev          # http://localhost:8080
npm run build        # dist/; serve it under /webpack-ozon/, it won't open from file://
```

## Deployment

Deployed on GitHub Pages via GitHub Actions: every push to `main` runs `npm ci` and `npm run build` and publishes `dist/`. I chose Actions over the `gh-pages` package so that build output isn't stored in any branch and the site is always built from `main`.

## Known limitations

- The header cart counter doesn't reset after placing an order until the page is reloaded, and an order can be sent from an empty cart.
- Price bounds are exclusive (`>` and `<`): with "from 3624", a product priced at 3624 ₽ is hidden.
- The cart close icon is black because the SVG has `fill='005bff'` without `#`; the `GTEestiProDisplay` font is referenced but never loaded; the favicon manifest is empty.
- The cart opens via an `href="#"` link, the search field has no `label`, and neither the cart modal nor the category menu closes on Esc.

## What I'd improve

- **Load data once.** `getData()` runs on every keystroke; the products only need to be fetched once and kept in memory.
- **Error and loading states.** If the data doesn't arrive, the page stays empty, which is exactly what happened when Firebase started returning 401.
- **Safer rendering.** Cards are built with `innerHTML` template strings; real data would need escaping or `<template>`.
- **Fewer external dependencies.** All of Bootstrap is loaded for the grid alone, where CSS Grid would do.
