# Asset manifest

Todo el material actual es **stock complementario** de Pixabay (licencia Pixabay: uso libre sin atribución obligatoria). Se reemplaza por fotos reales del local en cuanto existan. `npm run assets` lo regenera; los créditos quedan en `public/media/creditos.json`.

| Archivo | Fuente | Grading | Uso | Estado |
|---|---|---|---|---|
| `public/media/piso1-sala.mp4` | Pixabay 181093 | vivo | Hero | Stock. Reemplazar por recorrido real del piso 1 |
| `public/media/teclado.mp4` | Pixabay 31806 | vivo | PCs (spec periféricos), CTA final | Stock |
| `public/media/ventilador.mp4` | Pixabay 8064 | vivo | PCs (spec refrigeración) | Stock |
| `src/assets/media/gpu.webp` | Pixabay 5268574 | vivo | PCs (spec gráfica), galería | Stock |
| `src/assets/media/xbox-360.webp` | Pixabay 4061103 | vivo | Consolas | Stock. **Es un control rojo moderno, no de 360**: reemplazar |
| `src/assets/media/xbox-one.webp` | Pixabay 1136046 | vivo | Consolas, galería | Stock |
| `src/assets/media/xbox-series-s.webp` | Pixabay 10225432 | vivo | Consolas | Stock |
| `src/assets/media/escalera.webp` | Pixabay 7334038 | vivo | El lugar, galería | Stock |
| `src/assets/media/jugadores.webp` | Pixabay 4566163 | vivo | Galería | Stock |
| `src/assets/media/vip.webp` | Pixabay 2270554 | vip, pantalla desenfocada | Sala VIP | Stock. Reemplazar por la VIP real |

## Marca (fuente: `Desktop/blender/gamerzone-logo`)
| Archivo | Uso |
|---|---|
| `public/logo/gamerzone-logo.glb` | Logo 3D de la apertura (Meshopt, 1,8 MB) |
| `public/logo/gamerzone-poster.webp` | Respaldo del logo 3D mientras carga o sin WebGL |
| `src/assets/brand/gamerzone-logo.png` | Emblema 2D: barra, footer (Astro lo pasa a WebP) |
| `public/favicon.png`, `public/apple-touch-icon.png` | Generados desde el emblema |

## Pendiente de producir
1. Video de recorrido del local (puerta → piso 1 → escalera → VIP), 4K horizontal.
2. Foto de cada consola del local sobre fondo oscuro.
3. Foto de la sala VIP con luz cálida y un juego en pantalla.
4. Fotos de grupos jugando (de espaldas o perfil).
5. Upscale con Magnific y el mismo grading de `scripts/assets.mjs`.
