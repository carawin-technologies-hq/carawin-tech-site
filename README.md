
# Carawin Technologies — Full Redesigned Website

This is the full source project for the redesigned Carawin Technologies website.

## Design direction
- Oxford Blue / Deep Blue / Crimson brand system
- Intentional light and dark modes
- Existing Three.js visual language retained and refined
- Carawin-specific loading screen replacing the old Bharat Strategix loading copy
- Interactive hero wireframe ecosystem
- Header hover mega-menus
- Responsive mobile navigation
- Real internal routes for Solutions, AI products, Institutions, Government, Advisory, Insights, About, Careers, Partners and Contact
- Subtle Motion animations
- AI product pages with a distinct dark product-platform treatment

## Run locally

Requirements:
- Node.js 20+ recommended
- npm

From the project root:

```bash
npm install
npm run dev
```

Open http://localhost:3000

For production:

```bash
npm run build
npm start
```

## Important

Do not copy `node_modules` or `.next` from another project. Run `npm install` in this project so dependencies are installed from `package.json` / `package-lock.json`.

The project intentionally keeps the existing Three.js + React Three Fiber dependencies because the redesigned homepage terrain and persistent ambient visual use them.

