# Art direction

Estructura del 2026-10-30, sobre el rediseño del 2026-10-29: landing estándar de la categoría, con acabado premium (vara: páginas de producto de Apple y Xbox.com). Nada de mundos conceptuales. El orden sigue las preguntas del visitante: qué es → cuánto cuesta → dónde queda → qué hay → qué juegos → comodidades y dudas. Nunca dos composiciones iguales seguidas.

Superficies: oscuro grafito para la experiencia, claro para la información. Un solo acento, el cian del logo. El dorado vive solo en la sala VIP.

| # | Sección | Responde | Superficie | Composición | Media |
|---|---|---|---|---|---|
| — | Intro | Marca | Oscura | **Logo 3D encima de la página**, unos 3 s, una vez por visita. No ocupa scroll y cualquier gesto la salta | `public/logo/gamerzone-logo.glb` |
| 1 | Hero | ¿Qué es? ¿Abierto? | Oscura | **A sangre**: video de fondo, título grande abajo a la izquierda, CTA a la derecha y barra de datos (estado, PC, sedes, transnochón) | `piso1-sala.mp4` |
| 2 | Precios | ¿Cuánto cuesta? | Clara | **Una carta de tres columnas** (la VIP oscura con dorado) + **tres planes sobre una línea** | — |
| 3 | Sedes | ¿Dónde? ¿Horario? | Clara | **Split**: sedes con "Cómo llegar" / "Reservar aquí", y tarjeta oscura fija con el estado de hoy y el horario | — |
| 4 | Equipos | ¿Qué hay? | Oscura | **Escenario fijo**: lista a la izquierda con pestañas PC/Xbox, imagen a la derecha. El scroll recorre los 7 pasos en escritorio; en tablet y móvil se elige con un toque | `gpu`, `monitor`, `teclado`, `ventilador`, `xbox-*` |
| 5 | Sala VIP | ¿Para grupos? | Oscura cálida | **A sangre**: la sala crece desde una ventana central. En escritorio la información va a la izquierda y la pantalla queda a la vista; en tablet y móvil, la pantalla arriba y la información abajo | `vip` |
| 6 | Juegos | ¿Tienen mi juego? | Clara | **Marquesina** de transición + **lista de dos columnas filtrable** | — |
| 7 | Comodidades | ¿Cómo es el lugar? | Oscura | **Foto a sangre** con parallax y cinco comodidades en una fila | `escalera` |
| 8 | FAQ | Dudas | Clara | **Sticky + accordion** | — |
| 9 | Reserva | Reservar | Oscura | **A sangre**: "¿Jugamos?" + panel claro que abre WhatsApp con el mensaje armado. "Reservar" de la barra, el hero y el CTA móvil llevan aquí | `teclado.mp4` |

Datos que se repiten (capacidad y precio VIP, precio por hora del PC, horario) salen de una sola fuente en `src/data/local.ts`.

Testimonios: se omiten hasta tener reseñas reales. No se inventan.

## Mobile (< 48rem)
- CTA fijo inferior "Reservar sesión" (se oculta en hero, VIP y reserva).
- Equipos: imagen y pestañas quedan fijas arriba; la lista se toca debajo.
- Precios: las tres tarifas apiladas.
- Comodidades: una por fila, con el ícono a la izquierda.
