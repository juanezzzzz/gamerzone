# Plan maestro

## Diagnóstico de la versión 0.1 (Vite)
- Hero con túnel de neón: es la estética gaming cliché que el sistema prohíbe.
- Loader de pantalla completa para contenido estático.
- Faltaban cifras, statement, galería, tarifas, planes, FAQ, ubicación y CTA final.
- Specs de PCs como viñetas genéricas; hardware como miniaturas en tarjetas.
- Mobile era desktop apilado; sin CTA fijo.
- Sin fuente mono, datos sin `pendiente`, sin noindex, un `!important`.

## Fase 1 — Base (esta iteración)
- Migración a Astro estático, datos en `src/data/local.ts`, tokens, fuentes de Google Fonts.
- Las 14 secciones de `ART-DIRECTION.md` con su composición.
- QA a 1440, 768 y 390.

## Fase 2 — Material real
- Sesión de fotos/video del local según `ASSET-MANIFEST.md`.
- Upscale con Magnific, grading con `npm run assets`.
- Video del hero con HyperFrames (opcional).

## Fase 3 — Datos y publicación
- Confirmar todo lo marcado `pendiente` con el negocio.
- `REVISION = false`, deploy a GitHub Pages con Actions.

## Fase 4 — Audio (última capa)
- Sonidos sutiles con ElevenLabs (< 50 KB), solo tras interacción, con toggle de mute.
