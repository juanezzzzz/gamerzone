# Art direction

El orden sigue las preguntas del visitante (auditoría de UX, 2026-10-26): qué es → cuánto cuesta → dónde queda → qué hay → qué juegos → planes y dudas. Lo atmosférico va al final. Nunca dos composiciones iguales seguidas.

| # | Sección | Responde | Composición | Media |
|---|---|---|---|---|
| 1 | Apertura | ¿Qué es? | **Logo 3D en una pantalla** (`<gamerzone-logo autoplay>`): se arma solo en ~4 s; subtítulos "Sala de videojuegos" → "Juega en grande" → "Bienvenido a GamerZone" | `public/logo/gamerzone-logo.glb` |
| 2 | Hero | ¿Qué es? ¿Abierto? | **Full screen**: "GAMER ZONE" + franja de datos rápidos (sedes, abierto ahora, PC desde, transnochón) y CTA | `piso1-sala.mp4` |
| 3 | Tarifas | ¿Cuánto cuesta? | **Sticky + lista**: carta de precios | — |
| 4 | Sedes | ¿Dónde? ¿Horario? | **Editorial con número**: estado de hoy en grande + horario semanal; las dos sedes con "Cómo llegar" y "Reservar en esta sede" | — |
| 5 | PCs | ¿Qué equipos? | **Split**: 4 specs a la vista (botones); la media muestra la spec elegida | `gpu`, `piso1-sala`, `teclado`, `ventilador` |
| 6 | Consolas | ¿Qué consolas? | **Horizontal pinned**: paneles de 62vw y eje 2005 → 2020 con distancias reales (~3 pantallas). Tablet/mobile: carrusel | `xbox-*` |
| 7 | Sala VIP | ¿Para grupos? | **Centrado** con acento dorado, capacidad y precio | `vip` |
| 8 | Juegos | ¿Tienen mi juego? | **Marquesina** de ambiente + **lista filtrable** (Todos/PC/Xbox) con plataforma por juego | — |
| 9 | Planes | ¿Hay paquetes? | **Boletos apilados** con talón; muestra el ahorro frente a la tarifa por hora | — |
| 10 | FAQ | Dudas | **Sticky + accordion**: pago, transnochón, torneos, bonos, sedes | — |
| 11 | El lugar | Comodidades | **Full bleed pinned**: termómetro y comodidades | `escalera` |
| 12 | Galería | Ambiente | **Grid asimétrico** de 4 fotos (sin personas), marcado como referencia | stock |
| 13 | Statement | Marca | **Tipográfico** | — |
| 14 | CTA final | Reservar | **Full screen** "¿JUGAMOS?" sobre el video del hero | `piso1-sala.mp4` |

Datos que se repiten (capacidad y precio VIP, precio por hora del PC, horario) salen de una sola fuente en `src/data/local.ts`.

Testimonios: se omiten hasta tener reseñas reales. No se inventan.

## Mobile (< 48rem)
- CTA fijo inferior "Reservar sesión" (se oculta en apertura, hero, VIP y CTA final).
- Consolas y galería: carrusel horizontal con snap.
- PCs: título, media y specs en ese orden.
