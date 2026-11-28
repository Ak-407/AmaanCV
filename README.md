# Amaan Iqbal · CV and portfolio

A responsive, single-page React portfolio built with Create React App, Tailwind CSS, and Framer Motion.

## Local development

Run `npm ci`, then `npm start`. Open http://localhost:3000.

## Production

Run `npm run build`. The static site is written to `build/`. Relative asset URLs support both a domain root and a GitHub Pages repository path.

- **Vercel** — Import this repository, select Create React App, use `npm ci` for installation, `npm run build` for the build command, and `build` as the output directory.
- **GitHub Pages** — From an authenticated checkout, run `npm run build` and `npx gh-pages -d build`. In Settings → Pages, choose **Deploy from a branch**, then **gh-pages** and **/(root)**. The project URL is https://ak-407.github.io/AmaanCV/.

## Updating the CV

The page sections live in `src/components/Sections/`. Edit project descriptions and links in `src/portfolioData.js`. Projects can be searched by name or technology and filtered to live demos. The Blog Platform lists its demo as offline and its source link as pending. Original media remain under `public/imeges/` and `public/ss/`. Responsive portrait copies and the downloadable résumé are in `public/assets/`. Update the PDF when the résumé changes.

The social preview and canonical URL in `public/index.html` use the existing miramaan.vercel.app domain. Update them if the primary deployment changes.
