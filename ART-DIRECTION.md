# Art direction

Rediseño del 2026-10-29: landing estándar de la categoría, con acabado premium (vara: páginas de producto de Apple y Xbox.com). Nada de mundos conceptuales. El orden sigue las preguntas del visitante: qué es → cuánto cuesta → dónde queda → qué hay → qué juegos → comodidades y dudas. Nunca dos composiciones iguales seguidas.

Superficies: oscuro grafito para la experiencia, claro para la información. Un solo acento, el cian del logo. El dorado vive solo en la sala VIP.

| # | Sección | Responde | Superficie | Composición | Media |
|---|---|---|---|---|---|
| 1 | Apertura | ¿Qué es? | Oscura | **Logo 3D en una pantalla** (`<gamerzone-logo autoplay>`) | `public/logo/gamerzone-logo.glb` |
| 2 | Hero | ¿Qué es? ¿Abierto? | Oscura | **Centrado**: título, subtítulo, dos CTA y franja de datos (estado en vivo, PC desde, sedes, transnochón). Debajo, una tarjeta de video que se abre a sangre con el scroll | `piso1-sala.mp4` |
| 3 | Precios | ¿Cuánto cuesta? | Clara | **Tres columnas de tarifa** (la VIP oscura con dorado) + **filas de planes** comparables, con el ahorro a la vista | — |
| 4 | Sedes | ¿Dónde? ¿Horario? | Clara | **Split**: sedes con "Cómo llegar" / "Reservar aquí", y una tarjeta oscura fija con el estado de hoy y el horario semanal | — |
| 5 | PCs | ¿Qué equipos? | Oscura | **Media fija + specs que pasan**: cada spec que cruza el centro enciende su media | `gpu`, `monitor`, `teclado`, `ventilador` |
| 6 | Consolas | ¿Qué consolas? | Oscura | **Horizontal pinned** con el eje 2005 → 2020 a distancias reales. Tablet y móvil: carrusel | `xbox-*` |
| 7 | Sala VIP | ¿Para grupos? | Oscura cálida | **Centrado a sangre**: la sala crece desde una ventana central; dorado en lema, íconos, precio y botón | `vip` |
| 8 | Juegos | ¿Tienen mi juego? | Oscura | **Marquesina** de dos filas + **lista filtrable** (Todos/PC/Xbox) | — |
| 9 | Comodidades | ¿Cómo es el lugar? | Clara | **Bento**: foto grande (dos pisos) + clima, servicio, sillas y tienda | `escalera` |
| 10 | FAQ | Dudas | Clara | **Sticky + accordion** | — |
| 11 | Reserva | Reservar | Oscura | **Tarjeta de video** "¿Jugamos?" + **panel de reserva** claro (nombre, sede, qué, día, hora, personas, comentario) que abre WhatsApp con el mensaje armado. "Reservar" de la barra, el hero y el CTA móvil llevan aquí | `piso1-sala.mp4` |

Datos que se repiten (capacidad y precio VIP, precio por hora del PC, horario) salen de una sola fuente en `src/data/local.ts`.

Testimonios: se omiten hasta tener reseñas reales. No se inventan.

## Mobile (< 48rem)
- CTA fijo inferior "Reservar sesión" (se oculta en apertura, hero, VIP y CTA final).
- Consolas: carrusel horizontal con snap.
- PCs: la media queda fija arriba y las specs pasan debajo.
- Comodidades: una por fila, con el ícono a la izquierda.
