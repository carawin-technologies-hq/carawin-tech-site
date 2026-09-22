# Carawin site update — 17 Aug 2026

## What was updated

- Reworked AI product detail pages so every Carawin AI product has its own:
  - accurate product-specific introduction
  - focus/context
  - capabilities
  - workflow
  - designed outcomes
  - dedicated visual asset
- Expanded solution pages for Smart Classroom, Virtual Classroom, ICT Lab, STEM Lab, Innovation Lab, Language Lab, LMS, Digital Content, Assessment, Digital Records, Institutional ERP and Teacher Training.
- Expanded institution pages for Future-Ready Schools, Colleges & Universities and Digital University.
- Added 22 local SVG visual assets under `public/images/details/`.
- Removed the forced `text-white` inheritance on AI pages that caused light-theme sections/CTAs to become unreadable.
- Added responsive detail-page layouts, workflow cards, outcome cards, hover states and reveal animations.
- Added a more restrained ambient layer around the existing Three.js background while reducing the readability wash that could interfere with content.
- Preserved reduced-motion behaviour.
- Kept the existing Next.js/Tailwind/Three.js architecture and reusable components.

## STEM page context

The STEM Lab copy describes STEM as an interdisciplinary learning environment connecting science, technology, engineering and mathematics through inquiry, experimentation, making, measurement, prototyping and iteration. The implementation highlights robotics/coding, electronics, sensors and microcontrollers, 3D design/prototyping and data/modelling rather than presenting STEM as four unrelated subjects.

This is consistent with the supplied project brief's positioning of the STEM Lab as hands-on STEM infrastructure, and with UNESCO's description of STEM as an interdisciplinary approach that develops critical thinking, innovation and problem solving. UNESCO's education material on innovation labs also describes practical environments containing electronics, science equipment, robotics, sensors, 3D printers, computers and microcontroller boards.

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

The source package intentionally does not include `node_modules` or `.next`; those are generated locally.
