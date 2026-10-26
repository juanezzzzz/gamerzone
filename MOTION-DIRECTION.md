# Motion direction

## Principio
Un solo momento orquestado por escena. El movimiento cuenta el recorrido físico: entrar, subir, llegar a la VIP.

## Niveles
| Nivel | Qué | Herramienta | Duración |
|---|---|---|---|
| Micro | Hover, focus, botones, accordion | CSS | 200–300 ms |
| Reveal | `[data-reveal]` entra con opacity 0 → 1 y y 40 → 0 | GSAP | 0.7 s `power2.out`, stagger 0.1 |
| Secuencia | Hero, PCs, consolas, VIP, planes | ScrollTrigger pinned + scrub | Según scroll |
| Transición | Cambio de acento cian → dorado al entrar a la VIP | GSAP sobre custom properties | 0.9 s |
| Ambiente | Marquesina de juegos | GSAP ticker, velocidad × scroll | Continuo |

## Momentos firmados
1. **Hero**: video `clip-path: inset(18% 22% 18% 22%)` → `inset(0)`; título `font-stretch` 50 % → máximo que quepa.
2. **Statement**: cada palabra pasa de 50 % a 100 % de ancho al cruzar el centro.
3. **VIP**: imagen crece de ventana central a full bleed; indicador de piso rueda de 1 a 2.

## Easing
- Reveal: `power2.out`
- UI: `cubic-bezier(.16, 1, .3, 1)`
- Marquesina y scrub: `none`

## Reglas
- Lenis `lerp: 0.12`, conectado al ticker de GSAP.
- Videos solo se reproducen en viewport.
- `prefers-reduced-motion: reduce`: sin Lenis, sin pins, sin scrub, sin marquesina; todo visible en reposo.
