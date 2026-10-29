# GamerZone E-Sports Center — instrucciones para el agente

Landing de GamerZone, un gaming club (e-sports center) de dos pisos en Colombia. La carpeta se llama "zona gamer", pero la marca es **GamerZone**. La dirección completa está en `C:\Users\Usuario\Downloads\PROMPT-MAESTRO.md` y en los documentos de esta carpeta. Léelos antes de tocar código.

## Rol
Director de arte que también programa. Optimiza para dirección artística, no para completitud.

## Workflow
1. Ingerir: `DESIGN-BRIEF.md`, `ART-DIRECTION.md`, `MOTION-DIRECTION.md`, `COPY-DIRECTION.md`, `ASSET-MANIFEST.md`, `PLAN-MAESTRO.md`.
2. Auditar con screenshots a 1440, 768 y 390.
3. Componer en palabras antes de escribir CSS.
4. Construir una sección a la vez, completa.
5. QA visual en los tres anchos. Una sección está lista cuando se ve bien en todos, no cuando compila.
6. Las composiciones más débiles se rediseñan, no se parchean.

## Reglas
- Todo dato y texto editable del negocio vive en `src/data/contenido/*.json`, que el cliente edita desde el panel `/admin` (Sveltia CMS, `public/admin/config.yml`). `src/data/local.ts` los lee y los adapta para las secciones. Un campo nuevo se agrega en los tres lugares: JSON, `config.yml` y `local.ts`. Lo no confirmado lleva `pendiente: true`. Mientras `revision` sea true en `negocio.json`, la página lleva noindex.
- Nunca dos secciones seguidas con la misma composición (ver tabla en `ART-DIRECTION.md`).
- Tokens de `src/styles/tokens.css` para color, tipo y espacio. Sin `!important`, sin estilos inline, sin Tailwind.
- El dorado (`--vip`) solo existe dentro de la sala VIP y en su precio.
- Solo se animan `transform`, `opacity`, `clip-path` y `font-stretch` del display.
- `prefers-reduced-motion: reduce` desactiva Lenis, pins y scrubs.

## Comandos
- `npm run dev` — servidor local
- `npm run build` — sitio estático en `dist/`
- `npm run assets` — descarga y gradea el material de Pixabay (requiere `PIXABAY_KEY` en `.env`)
