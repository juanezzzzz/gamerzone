# Motion direction

## Principio
Un solo momento orquestado por escena. El movimiento cuenta el recorrido físico: entrar, subir, llegar a la VIP.

## Niveles
| Nivel | Qué | Herramienta | Duración |
|---|---|---|---|
| Micro | Hover, focus, botones, accordion | CSS | 200–300 ms |
| Reveal | `[data-reveal]` entra con opacity 0 → 1 y y 24 → 0 | GSAP | 0.9 s `expo.out`, stagger 0.08 |
| Secuencia | Hero, PCs, consolas, VIP, planes | ScrollTrigger pinned + scrub | Según scroll |
| Ambiente | Marquesina de juegos | GSAP ticker, velocidad × scroll | Continuo |

## Momentos firmados
1. **Hero**: la tarjeta de video (con el ancho del contenedor y bordes redondeados) se abre a sangre mientras sube.
2. **PCs**: la media queda fija y cambia con la spec que cruza el centro de la pantalla.
3. **Consolas**: recorrido horizontal pinned; cada foto se descubre con clip-path.
4. **VIP**: la sala crece desde una ventana central y el contenido sube.

## Easing
- Reveal: `expo.out`
- UI: `cubic-bezier(.16, 1, .3, 1)`
- Marquesina y scrub: `none`

## Reglas
- Lenis `lerp: 0.12`, conectado al ticker de GSAP.
- Videos solo se reproducen en viewport.
- `prefers-reduced-motion: reduce`: sin Lenis, sin pins, sin scrub, sin marquesina; todo visible en reposo.
