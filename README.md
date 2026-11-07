# AAA Hardware

A **frontend-only** online tech store for laptops, monitors, components and accessories in Pakistan — built with **Vite + React (JavaScript)** as a student assignment project. The layout and shopping flow are *inspired by* online computer stores in Pakistan, with AAA Hardware's own name, colours, content and sample products.

> No backend. No database. No MongoDB. Products live in a local file, and the cart/wishlist live in the browser.

## Tech Stack

- **Vite 5** — dev server and build tool
- **React 18** — UI, plain JavaScript (no TypeScript)
- **CSS** — one stylesheet, custom theme: dark slate + violet/indigo gradient + cyan accent
- **localStorage** — cart and wishlist persistence

## Features

- Home page with a 3-slide hero, a CSS 3D hero visual (floating layered cards in perspective, animated rings) and 3D tilt cards
- **3D tilt effect** on product cards and category tiles — cards tilt following the mouse (pure React + CSS, no 3D library)
- Shop page with live **search, category/brand/price filters and sorting**
- Product detail pages: visual gallery with switching colour swatches, price and saving, highlights, quantity stepper, full specs table, related products
- **Cart** (quantity +/-, remove, subtotal) and **Wishlist** (move to cart), both saved in localStorage
- **Demo checkout** — validated form (name, Pakistani mobile, email, address, city, payment choice) that shows an "Order Placed" screen with a generated order number and clears the cart
- **Demo login / sign-up** — validated forms with success messages only; no real accounts are created
- About, Contact (demo form) and Policies pages, newsletter box (demo), features strip and a full footer

## Categories & Products

7 categories only, 24 sample products in total, prices in PKR (Rs.):

| Category | Products |
|---|---|
| Laptops | 4 |
| Monitors | 4 |
| GPU (Graphic Cards) | 3 |
| SSD | 3 |
| RAM | 3 |
| Laptop Accessories | 4 |
| Mobile Accessories | 3 |

Product visuals are gradients + icons (no external images), so the site works fully offline.

### Deliberately NOT included

To keep this assignment simple, the following were intentionally skipped: order tracking, gaming chairs, printers, network gear, PSU/power supplies, a generic "peripherals" category, and a PC builder tool. Checkout and accounts are front-end demos only — no real payment or order is ever processed.

## Project Structure

```
aaa-hardware/
├── index.html              # page title + root element
├── vite.config.js          # Vite + React plugin
├── package.json            # scripts and dependencies
└── src/
    ├── main.jsx            # app entry point
    ├── App.jsx             # state-based routing + cart/wishlist state
    ├── index.css           # the whole theme / stylesheet
    ├── data/
    │   └── products.js     # categories + all 24 products (edit products here!)
    ├── components/
    │   ├── Header.jsx      # top bar, header, navigation + Products dropdown
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx # one product card (used everywhere)
    │   └── Tilt.jsx        # reusable 3D tilt wrapper
    └── pages/
        ├── Home.jsx
        ├── Shop.jsx            # listing + filters + sort
        ├── ProductDetail.jsx
        ├── CartPages.jsx       # Cart + Wishlist
        ├── CheckoutLogin.jsx   # Checkout + Login/Sign-up
        └── StaticPages.jsx     # About + Contact + Policies
```

**Routing note:** this app uses simple state-based routing (`App.jsx` keeps the current page in React state). There is no react-router, which makes deployment simpler — no rewrite/redirect rules are needed on Netlify or Vercel.

**Want to change a product?** Edit `src/data/products.js` — change a price, name or badge and the whole site updates.

---

## Step-by-Step: Run, Push to GitHub, Deploy

### A) Run it in VS Code

1. Unzip the project and open the `aaa-hardware` folder in VS Code (**File → Open Folder…**).
2. Open a terminal: **Terminal → New Terminal**.
3. Check Node is installed:
   ```
   node -v
   npm -v
   ```
   (If these error, install Node.js LTS from https://nodejs.org and restart VS Code.)
4. Install packages (first time only):
   ```
   npm install
   ```
5. Start the site:
   ```
   npm run dev
   ```
6. Open the address Vite prints, e.g. `http://localhost:5173/`.
7. Stop the server with **Ctrl + C**.

Other commands: `npm run build` creates the production site in `dist/`; `npm run preview` previews that built version locally.

### B) Push it to GitHub

1. In the VS Code terminal, inside the project folder:
   ```
   git init
   git add .
   git commit -m "AAA Hardware frontend"
   ```
   The included `.gitignore` already excludes `node_modules` and `dist` — do not upload those.
2. On https://github.com create a **new empty repository** named `aaa-hardware` (do NOT add a README there).
3. Connect and push (use the repo address GitHub shows you):
   ```
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/aaa-hardware.git
   git push -u origin main
   ```
4. For later updates, just repeat:
   ```
   git add .
   git commit -m "describe your change"
   git push
   ```

### C) Deploy it

**Netlify**
- Drag-and-drop: run `npm run build`, then drag the `dist` folder onto https://app.netlify.com/sites — done.
- Or connect GitHub: **Add new site → Import an existing project**, pick this repo, build command `npm run build`, publish directory `dist`.

**Vercel**
- On https://vercel.com: **Add New → Project**, import this GitHub repo, Framework Preset **Vite**, build command `npm run build`, output directory `dist`, then **Deploy**.

No rewrite rules are needed on either host because the app is state-routed.

---

*A full standalone copy of the step-by-step guide is also provided as `aaa-hardware-guide.md` alongside the project zip.*
