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
1. **Intro**: el logo 3D se arma en unos 3 s encima de la página y se desvanece mientras entra el hero.
2. **Hero**: el fondo se queda atrás con el scroll y el contenido se va.
3. **Precios**: la carta sube y se abre desde el centro.
4. **Equipos**: la sección se fija y el scroll recorre los pasos; cada uno cambia la imagen y llena su línea de cian.
5. **VIP**: la sala crece desde una ventana central y luego aparece la información.
6. **Comodidades**: la foto se mueve más despacio que la página.

## Easing
- Reveal: `expo.out`
- UI: `cubic-bezier(.16, 1, .3, 1)`
- Marquesina y scrub: `none`

## Reglas
- Lenis `lerp: 0.12`, conectado al ticker de GSAP.
- Videos solo se reproducen en viewport.
- `prefers-reduced-motion: reduce`: sin Lenis, sin pins, sin scrub, sin marquesina; todo visible en reposo.
