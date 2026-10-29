---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components"]
---

# Landing GamerZone (src/pages/index.astro)

Scope: the single public landing. Mode: Persuade.
Audience and job: a solo player who checks the site on a phone before leaving. They need price, nearest sede, open-now and how to book, in seconds. Exits: WhatsApp (book, VIP, plans) or walk in.
Constraints: data only from `src/data/local.ts` with `pendiente` flags; tokens only; no `!important`, inline styles or Tailwind; gold only for VIP; animate only transform, opacity, clip-path; reduced motion turns off Lenis, pins and scrubs. The 3D logo opening stays.
Sections, simplified (2026-10-29): Apertura, Hero, Precios (rates + plans), Sedes y horario, PCs, Consolas, Sala VIP, Juegos, Comodidades (bento, replaces Lugar + Galería), FAQ, CTA final. Statement removed.

## Direction contract

THESIS: The category standard, executed at Apple/Xbox product-page craft: a calm, premium, informative gaming-club landing. It refuses concept worlds, neon glow and decorative noise; the info a visitor came for is never more than one glance away.

OWN-WORLD: Two surfaces that alternate with purpose. Dark graphite (#0B0D10) for experience sections (hero, equipment, VIP, CTA) and soft light grey (#F4F5F7) with white cards for information (prices, sedes, comfort, FAQ). One accent, the logo cyan, used only for actions, live status and key figures. Gold appears only in the VIP. One variable grotesque (Archivo): expanded heavy for headlines, normal width for text. Large radii, hairline borders, no glows, no gradients on type.

STORY: The visitor learns what GamerZone is (gaming club, 2 sedes, open now), sees prices on one screen, finds the sede and today's hours, then gets convinced by the equipment, consoles, VIP and games, and books on WhatsApp or walks in.

FIRST VIEWPORT: After the logo opening, a centred hero: small eyebrow "GamerZone · E-Sports Center", a two-line headline, one sentence of subcopy, and two CTAs ("Reservar sesión" filled cyan, "Ver precios" ghost). Below them, a rounded video card of the room that grows to full bleed on scroll. A four-item info strip sits under the CTAs: open-now status, PC from price, 2 sedes, transnochón.

FORM: canon (standing exit), the category standard at full craft. Craft bar: Apple product pages and Xbox.com. Not on a ranked list. seed:1aef8f00f3029c02

Signature interaction and motion grammar: the hero video card scales to full bleed on scroll; PCs use a sticky media column that crossfades as each spec scrolls past; consoles keep the pinned horizontal panels with the 2005-2020 axis; VIP expands from a centred window. Everything else uses one reveal (fade and 24px rise, staggered). One easing family throughout.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
