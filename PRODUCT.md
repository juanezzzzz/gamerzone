# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: the individual player who comes alone to play on a better PC than the one at home. Price per hour and the specs of the machine decide the visit. They usually check the site on a phone before leaving, looking for the price, the nearest sede and whether it is open now.

Secondary (confirmed in the data, not the main target): friend groups that play consoles together, and whoever organizes a birthday or private session in the VIP room.

## Product Purpose
GamerZone · E-Sports Center is a two-floor gaming club in Colombia with two sedes of the same brand. The landing answers, in order: what it is, how much it costs, where it is and whether it is open, what equipment and games there are, and how to book. Success is equal parts a WhatsApp message (booking, VIP, plans, questions) and a visit straight to the sede (PC and console need no booking).

## Positioning
Not a neighborhood internet room with old PCs. Confirmed differentiators: better equipment (gaming PCs, high-refresh monitors, gaming peripherals), comfort (two floors, air conditioning, service at your seat, drinks and snacks) and the Friday/Saturday transnochón (open all night).

## Operating Context
- Pay by time played, at the end. Cash, transfer, Nequi, card (datáfono). Gift vouchers exist.
- PC and console: walk in. VIP room: book by WhatsApp.
- Consoles: Xbox 360, Xbox One, Xbox Series S. Games include EA Sports FC, Call of Duty, Valorant, League of Legends, Fortnite, Fall Guys, World of Warcraft.
- Tournaments and private-room rental exist.
- Same schedule in both sedes; live "open now" status uses Colombia time.

## Capabilities and Constraints
- Astro static site, GSAP + ScrollTrigger, Lenis, Three.js (3D logo). Deploy to GitHub Pages.
- Every business fact lives in `src/data/local.ts`; anything unconfirmed carries `pendiente: true`, and while `REVISION = true` the page is noindex.
- Undecided: sede addresses, WhatsApp number, all prices, PC specs, hours, VIP capacity, plans. All marked `pendiente`.
- `prefers-reduced-motion: reduce` turns off smooth scroll, pins and scrubs.

## Brand Commitments
- Name: **GamerZone**, tagline **E-Sports Center**. Never "Zona Gamer".
- Logo: 2D emblem and the 3D `<gamerzone-logo>` component (`public/logo/gamerzone-logo.glb`, `src/scripts/gz-logo.js`) that opens the site.
- Voice: a confident Colombian peer, short sentences, no corporate marketing ("Llegas, te sientas y juegas.", "¿Jugamos?"). Main CTA "Reservar sesión" opens WhatsApp.
- Spanish (Colombia). Prices like `$5.000`, 24 h times.
- "EA Sports FC", never "FIFA". Game logos and covers only from official press kits.
- Standing preference (2026-10-29): a normal, premium, informative landing in the category standard, at the craft level of Apple product pages and Xbox.com. No experimental concept worlds: the business owner has to understand it at a glance.

## Evidence on Hand
- No real photos or video of the venue yet. Current media is Pixabay stock (`public/media/`, `src/assets/media/`, credits in `public/media/creditos.json`), to be replaced. `xbox-360.webp` is not a 360 controller.
- No reviews or testimonials: none may be invented.
- No confirmed addresses, prices or specs (see `pendiente` flags).

## Product Principles
1. Information first: price, sede, open-now and how to book must be findable in seconds, especially on a phone.
2. Prove the equipment, don't hype it: specs stated plainly, like a configurator.
3. Nothing invented: unconfirmed facts are flagged, never dressed up as real.
4. Walk-in and WhatsApp are equal exits; the page serves both.
