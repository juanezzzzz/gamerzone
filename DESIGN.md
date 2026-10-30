---
name: GamerZone E-Sports Center
description: Landing de un gaming club de dos sedes. Grafito y nube que se alternan, un solo acento cian y dorado solo en la VIP.
colors:
  grafito: "#0b0d10"
  grafito-2: "#14171c"
  grafito-3: "#1d2128"
  sobre-oscuro: "#f4f6f8"
  sobre-oscuro-2: "#a3acb7"
  linea-oscura: "#262b33"
  nube: "#f4f5f7"
  blanco: "#ffffff"
  tinta: "#0b0d10"
  tinta-2: "#535c68"
  linea-clara: "#e1e4e9"
  acento: "#2fd8ec"
  acento-texto: "#00788a"
  sobre-acento: "#04161a"
  abierto: "#2fd8ec"
  cerrado: "#ff8a7a"
  error: "#c0392b"
  error-fondo: "#fdf1ef"
  vip: "#e2bd73"
  vip-noche: "#0f0c08"
typography:
  display:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline-xl:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  escena:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  precio:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
    fontFeature: "'tnum' 1"
  title:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 106"
  lead:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum' 1"
  label:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
  micro:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  radio-s: "0.75rem"
  radio-l: "1.75rem"
  radio-boton: "999px"
spacing:
  s-1: "0.5rem"
  s-2: "1rem"
  s-3: "1.5rem"
  s-4: "2rem"
  s-5: "3rem"
  s-6: "4.5rem"
  s-seccion: "clamp(5.5rem, 11vw, 10rem)"
  gutter: "clamp(1rem, 4vw, 3rem)"
  ancho-max: "76rem"
  nav-h: "3.75rem"
components:
  boton:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.sobre-acento}"
    typography: "{typography.body}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.5rem"
    height: "3rem"
  boton-claro:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.5rem"
    height: "3rem"
  boton-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.sobre-oscuro}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.5rem"
    height: "3rem"
  boton-vip:
    backgroundColor: "{colors.vip}"
    textColor: "{colors.vip-noche}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.5rem"
    height: "3rem"
  tarjeta-clara:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.radio-l}"
    padding: "2rem"
  tarjeta-oscura:
    backgroundColor: "{colors.grafito}"
    textColor: "{colors.sobre-oscuro}"
    rounded: "{rounded.radio-l}"
    padding: "2rem"
  tarifa-vip:
    backgroundColor: "{colors.vip-noche}"
    textColor: "{colors.sobre-oscuro}"
    padding: "2rem"
  pastilla:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    typography: "{typography.micro}"
    rounded: "{rounded.radio-boton}"
    padding: "0.3rem 0.65rem"
  etiqueta:
    backgroundColor: "{colors.grafito-3}"
    textColor: "{colors.sobre-oscuro}"
    typography: "{typography.micro}"
    rounded: "{rounded.radio-boton}"
    padding: "0.15rem 0.5rem"
  filtro-activo:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.25rem"
    height: "2.5rem"
  pestana-activa:
    backgroundColor: "{colors.sobre-oscuro}"
    textColor: "{colors.grafito}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.25rem"
    height: "2.5rem"
  campo:
    backgroundColor: "{colors.nube}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.radio-s}"
    padding: "0.6rem 0.85rem"
    height: "2.75rem"
---

# Design System: GamerZone E-Sports Center

## Overview

**Creative North Star: "La vitrina de producto"**

La landing se lee como una página de producto de consola: calma, premium y con la información siempre a un vistazo. Dos superficies se alternan con propósito. Grafito para la experiencia (hero, equipos, VIP, comodidades, reserva) y nube con tarjetas blancas para la información (precios, sedes y horario, juegos, preguntas). El visitante sabe en qué modo está por el color del suelo que pisa.

Una sola familia variable, Archivo, hace todo el trabajo: ancha y pesada en los títulos, ancho normal en el texto. Un único acento, el cian del logo, marca acciones, estado en vivo y cifras clave, y firma el trazo de los íconos de dato; nunca pinta titulares ni fondos que no sean botones. El dorado vive en un solo cuarto: la sala VIP y su precio. La profundidad sale de la alternancia de superficies, radios grandes y líneas de un pixel, no de brillos. El movimiento es de producto: un escenario fijo que recorre los equipos, una sala que crece a sangre desde una ventana y una sola entrada (fundido y 24px de subida) para el contenido corriente.

Rechazos confirmados por el build: sin glow de neón en la interfaz, sin degradados en tipografía, sin ruido decorativo.

**Key Characteristics:**
- Alternancia grafito / nube con significado: experiencia sobre oscuro, información sobre claro.
- Un acento cian, raro y funcional; dorado encerrado en la VIP.
- Archivo variable: títulos a ancho 112% y peso 800, texto a 100% y peso 400.
- Radios grandes (28px en tarjetas y medios), botones en píldora, líneas de 1px.
- Cifras tabulares en todo el sitio.
- Foto y video a sangre bajo un velo que da la lectura; el texto nunca compite con el medio.
- Los cambios de fondo aparecen por capas: se anima la opacidad, nunca el color.

## Colors

Neutros fríos casi sin croma, un cian eléctrico como única voz y un dorado cálido confinado a la VIP.

### Primary
- **Cian del logo** (`acento`): botón principal sobre oscuro, enlaces con flecha, hover de los links del menú, línea del paso activo en Equipos, hora de hoy en el horario, íconos de comodidades, estado "abierto", anillo de foco y selección.
- **Cian legible** (`acento-texto`): la versión del acento que cumple contraste sobre claro. Íconos de sedes, checks de planes y plataformas, ahorro, enlaces, hover del FAQ, separador de la marquesina y anillo de foco de los campos.
- **Tinta sobre cian** (`sobre-acento`): texto del botón cian.

### Secondary
- **Dorado VIP** (`vip`): solo dentro de la sala VIP y en su tarifa. Lema, íconos, precio, botón y enlace de la VIP. Fondo de la sala y de su tarifa: `vip-noche`, un negro cálido que reemplaza al grafito.

### Tertiary
- **Coral cerrado** (`cerrado`): punto de estado cuando la sede está cerrada. `abierto` comparte el valor del acento y es su alias semántico.
- **Rojo de error** (`error`, con fondo `error-fondo`): campo inválido y su mensaje en el formulario de reserva. Solo sobre claro.

### Neutral
- **Grafito** (`grafito`): suelo de las secciones de experiencia, del menú móvil, del CTA móvil y de la tarjeta de horario dentro de la sección clara.
- **Grafito 2** (`grafito-2`): fondos de medios mientras cargan y carril de las pestañas de Equipos.
- **Grafito 3** (`grafito-3`): etiqueta "Transnochón" y barra de scroll.
- **Texto sobre oscuro** (`sobre-oscuro`) y **texto secundario sobre oscuro** (`sobre-oscuro-2`).
- **Línea oscura** (`linea-oscura`): divisores de 1px en filas, horario, menú y pie.
- **Nube** (`nube`): suelo de las secciones claras y relleno de los campos. **Blanco** (`blanco`): tarjetas sobre nube, panel de reserva y pastillas de plataforma.
- **Tinta** (`tinta`), **tinta secundaria** (`tinta-2`) y **línea clara** (`linea-clara`): texto y divisores sobre claro. `linea-clara` también es el carril de filtros de Juegos.

`--grafito-4` está declarado en `tokens.css`, pero ningún componente lo consume: no tiene rol y queda fuera de la paleta normativa hasta que lo tenga.

### Named Rules
**The Un Acento Rule.** El cian marca acciones, estado en vivo y cifras clave, y firma el trazo de los íconos de dato y el separador de la marquesina. Nunca colorea un titular ni llena un fondo que no sea un botón.

**The Cuarto Dorado Rule.** `--vip` y `--vip-noche` existen solo dentro de la sala VIP y en su tarifa. Ningún otro componente los toma prestados.

**The Contraste en Claro Rule.** Sobre `.claro` el acento se escribe con `acento-texto`, y el botón sólido pasa a tinta con texto blanco. El cian puro no va como texto sobre nube. La única excepción es el botón de envío del panel de reserva, que conserva el fondo cian con texto `sobre-acento` porque es la conversión de la página.

## Typography

**Display Font:** Archivo (con Segoe UI, system-ui, sans-serif)
**Body Font:** Archivo, la misma familia variable (ejes `wdth` 62–125 y `wght` 100–900)

**Character:** Una grotesca que cambia de voz con el eje de ancho: expandida y pesada grita el título, a ancho normal informa sin ruido. No hay segunda familia.

### Hierarchy
- **Display** (800, `--t-display`, 0.96, ancho 112%, -0.035em): solo el titular del hero. `text-wrap: balance`.
- **Headline XL** (800, `--t-4xl`, 0.98, ancho 112%, -0.03em): título de las secciones a sangre (VIP, Comodidades, Reserva). Con interlínea 0.95, la hora grande del horario.
- **Headline** (800, `--t-3xl`, 1.02, ancho 112%, -0.025em): título de las secciones de información (Precios, Sedes, Juegos, FAQ).
- **Escena** (800, `--t-escena`, 1.02, ancho 112%, -0.025em): títulos de los grupos de Equipos, que deben caber junto a la lista dentro de una pantalla fija.
- **Precio** (800, `--t-precio`, 1, ancho 112%, -0.03em): monto principal de cada tarifa y de la VIP.
- **Title** (700, `--t-xl`, 1.2, ancho 106%, -0.01em): subtítulos, nombres de sede y de comodidad (sede y título del panel en 800).
- **Lead** (400, `--t-l`, 1.5): bajada bajo cada título, máximo 44ch (50ch en el hero), color secundario. Sobre un medio a sangre sube al color primario.
- **Body** (400, `--t-m`, 1.6): texto corrido; respuestas del FAQ a 60ch.
- **Label** (600, `--t-s`, 1.3): datos, notas, links de navegación, etiquetas de campo.
- **Micro** (600, `--t-xs`, 1.3): pastillas, etiquetas, ahorro, títulos de la barra de datos.

### Named Rules
**The Ancho es Voz Rule.** La jerarquía se marca con `font-stretch` y peso, no con otra familia: `--ancho-titulo` (112%) para títulos y cifras, 106% para títulos menores, `--ancho-texto` (100%) para leer.

**The Cifra Tabular Rule.** `font-variant-numeric: tabular-nums` está en el body: precios, horas y años se alinean siempre.

## Layout

Contenedor centrado de `min(100% - 2 * --gutter, --ancho-max)` con gutter fluido. Las secciones respiran con `--s-seccion` arriba y abajo. Dos secciones claras seguidas (Precios y Sedes) eliminan el padding superior de la segunda y se separan con una línea clara de 1px más `--s-6`.

Ritmo de espacio en pasos de `--s-1` a `--s-6` (0.5rem a 4.5rem). Las cabeceras de sección son una rejilla: título a la izquierda y bajada a la derecha sobre la misma base (1.1fr / 0.9fr), que se apila bajo 64rem, con `--s-5` o `--s-4` antes del contenido.

Vocabulario de composiciones: a sangre con el contenido abajo (hero, comodidades); carta de tres columnas (tarifas); columnas sobre una línea sin tarjeta (planes); split con un lado pegado bajo la barra (sedes, FAQ); escenario fijo a pantalla completa, lista a la izquierda e imagen a la derecha (equipos); ventana que crece a sangre (VIP); marquesina más lista filtrable de dos columnas (juegos); medio a sangre con panel a la derecha (reserva). La secuencia vigente vive en `ART-DIRECTION.md`. Nunca dos secciones seguidas con la misma composición.

Puntos de corte: 64rem (las rejillas pasan a una columna, los pins de Equipos y VIP se apagan, los lados pegados se sueltan, aparece el menú) y 47.99rem (móvil: tarifas y planes a una columna, botones de acción a ancho completo, CTA fijo inferior). En tablet y móvil la imagen y las pestañas de Equipos quedan pegadas bajo la barra, sobre grafito, y la lista corre debajo. Barra fija de `--nav-h`.

## Elevation & Depth

Sistema plano con capas tonales. La profundidad sale del cambio de superficie (grafito, grafito-2, nube, blanco) y no de sombras. La sombra corriente es la de la tarjeta blanca sobre nube, casi imperceptible. Las tarjetas oscuras se separan por tono. El único objeto que flota de verdad es el panel de reserva sobre su video.

Los medios a sangre llevan un velo de grafito (`vip-noche` en la VIP), un degradado que oscurece solo donde va el texto. La barra de navegación es casi sólida: dos capas apiladas, oscura al 92% y clara al 94%, con `backdrop-filter: saturate(180%) blur(20px)`. El CTA móvil es opaco, porque translúcido se vuelve gris sobre las secciones claras.

### Shadow Vocabulary
- **Tarjeta** (`box-shadow: 0 1px 2px rgb(11 13 16 / 0.04), 0 8px 24px -12px rgb(11 13 16 / 0.12)`): carta de tarifas, sedes y segmento activo del formulario. Solo sobre claro.
- **Panel sobre medio** (`box-shadow: 0 24px 60px -20px rgb(0 0 0 / 0.5)`): solo el panel de reserva sobre el video.
- **Línea de barra** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.06)`, o `0 1px 0 var(--linea-clara)` sobre claro): borde inferior de la barra de navegación.

### Named Rules
**The Sin Glow Rule.** La interfaz no tiene resplandores ni sombras de color. La única luz que se mueve en ella es el pulso del punto "abierto". El bloom de los neones pertenece al logo 3D de la intro, que es un activo de marca y no se copia a ningún componente.

**The Superficie Rule.** Toda sección clara lleva `.claro`. Toda superficie oscura dentro de una sección clara (tarifa VIP, tarjeta de horario) lleva `data-superficie="oscura"`, porque la barra de navegación lee la superficie que tiene justo debajo y toma su tono. Un panel claro sobre oscuro (formulario de reserva) lleva `.claro` también.

**The Capa que Aparece Rule.** Un cambio de fondo nunca anima `background`: se apila una capa y se anima su `opacity`. Así funcionan el hover del botón y las dos capas de la barra.

**The Velo Rule.** Texto sobre un medio siempre va sobre un velo que sale del color de la superficie. El medio se ve donde no hay texto.

## Shapes

Formas amables y grandes. Tarjetas, medios y ventanas usan `--radio-l`; los campos del formulario usan `--radio-s`. Botones, filtros, pestañas, pastillas y etiquetas son píldoras (`--radio-boton`). Los puntos de estado son círculos. Los bordes son líneas de 1px; las únicas excepciones son el contorno de 1.5px del botón ghost y la línea de 2px en tinta que encabeza cada plan.

Los medios hablan con `clip-path`: la VIP entra como ventana central redondeada y se abre a sangre, y la carta de tarifas se abre desde el centro al entrar.

## Components

### Buttons
Píldoras firmes y directas.
- **Shape:** píldora (`--radio-boton`), alto mínimo 3rem, padding horizontal 1.5rem, peso 700 a `--t-m`.
- **Primary:** cian con texto `sobre-acento` sobre oscuro. Dentro de `.claro` pasa a tinta con texto blanco.
- **Hover / Active:** hover con una capa de `currentColor` al 12% que aparece por opacidad en 250ms; `active` escala a 0.97.
- **Ghost:** transparente con contorno interior de 1.5px en `currentColor`; el mismo hover.
- **VIP:** dorado con texto `vip-noche`; solo en la sala VIP.
- **Compacto:** 2.25–2.5rem de alto y `--t-s` en la barra y las sedes. A ancho completo y 3.25rem en el menú, el CTA móvil y el envío de la reserva.

### Enlace con flecha
Texto 600 en acento (`acento-texto` en claro, `vip` en la tarifa VIP) con flecha de línea; en hover se subraya y la flecha avanza 3px.

### Chips
- **Pastilla:** blanca sobre nube, texto micro 600, píldora, ícono de 0.95rem. Plataformas de cada juego.
- **Filtro (claro):** carril `linea-clara` con píldoras transparentes; activo invierte a tinta con texto blanco.
- **Pestaña (oscuro):** carril `grafito-2` con píldoras transparentes; activa invierte a `sobre-oscuro` con texto grafito.
- **Etiqueta:** `grafito-3` en la tarjeta de horario.

### Cards / Containers
- **Corner Style:** `--radio-l`.
- **Background:** blanco sobre nube; grafito cuando es superficie oscura dentro de claro.
- **Carta de tarifas:** una sola pieza de tres columnas separadas por línea; la tercera es la tarifa VIP en `vip-noche`. En tablet la VIP pasa a todo el ancho.
- **Shadow Strategy:** solo la sombra de tarjeta, solo en blanco sobre nube.
- **Border:** ninguno; las listas internas usan líneas de 1px.
- **Internal Padding:** `--s-4`, `--s-3` en móvil.

### Inputs / Fields
- **Style:** relleno nube, línea clara de 1px, `--radio-s`, alto mínimo 2.75rem, texto `--t-m`, etiqueta en Label encima.
- **Hover / Focus:** en hover la línea pasa a `tinta-2`; en foco, anillo de 2px en `acento-texto`, sin línea y fondo blanco.
- **Error:** línea `error`, fondo `error-fondo` y mensaje micro bajo el campo.
- **Segmentos:** carril nube con radio pequeño; la opción activa es blanca con la sombra de tarjeta.

### Navigation
Barra fija, transparente sobre la intro y la primera mitad del hero. Pasada esa mitad aparece la capa oscura; sobre superficies claras se cruza a la capa clara y el texto pasa a tinta, en 400ms y solo por opacidad. Links a `--t-s` en color secundario que suben a primario en hover y en la sección actual (`aria-current`). Bajo 64rem, menú opaco a pantalla completa con links en display (800, ancho 112%) que entran escalonados cada 40ms. Bajo 48rem el botón de reservar sale de la barra y lo reemplaza el CTA móvil.

### Intro
Capa fija de grafito sobre toda la página con el logo 3D, unos 3 segundos, una vez por visita. No ocupa scroll. Cualquier gesto la salta (rueda, toque, tecla, puntero) y se funde en 600ms mientras entra el hero. No aparece sin JS, con reduced motion, al volver en la misma visita ni al entrar directo a una sección.

### Escenario de Equipos
Sección de pantalla completa que se fija en escritorio: pestañas PC / Xbox y lista de pasos a la izquierda, imagen de hasta 46rem de alto a la derecha. Cada paso consume 42% del alto de la pantalla, sin scrub: el scroll elige el paso y el cambio es un fundido (imagen en 700ms, con escala de 1.05 a 1 en 1200ms). El paso activo llena de cian su línea superior y sube a opacidad plena. Tocar una fila o pestaña lleva el scroll a ese paso. Bajo 64rem no hay pin y el toque cambia el paso.

### Sala que crece
Foto recortada a una ventana central redondeada que crece a sangre con el scroll (`clip-path` con scrub 0.6) mientras baja el velo y sube la información. Pin en escritorio, con la información a la izquierda y la pantalla de la sala a la vista; en vertical, sin pin, con la pantalla arriba y la información abajo.

### Estado en vivo
Punto de 8px más texto. Coral si está cerrado, cian si está abierto, con una copia del punto que se expande y desvanece cada 2s. Reduced motion la apaga.

### Dato por confirmar
En modo revisión, un dato con `pendiente` lleva un subrayado punteado de 1px en `currentColor` al 35%.

### Íconos
Trazos de Lucide en línea, 24px de caja, grosor 1.75, terminaciones redondeadas, `currentColor`. Un solo grosor en todo el sitio; tamaños de 0.95–1.2rem en datos y listas, 1.5rem por defecto, 1.75rem en sedes.

### Lista de filas
Filas separadas por línea de 1px, nombre a la izquierda y dato a la derecha. Tarifas secundarias, horario semanal, catálogo de juegos y FAQ (con un "+" que gira 45° al abrir).

## Do's and Don'ts

### Do:
- **Do** marcar cada sección de información con `.claro` y cada superficie oscura dentro de ella con `data-superficie="oscura"`.
- **Do** sacar todo color, tamaño y espacio de `src/styles/tokens.css`; sin `!important`, sin estilos inline, sin Tailwind.
- **Do** usar `acento-texto` para el acento sobre claro y `acento` sobre oscuro.
- **Do** escribir títulos en Archivo 800 a ancho 112% con tracking negativo, y texto a ancho 100%.
- **Do** animar solo `transform`, `opacity`, `clip-path` y el `font-stretch` del display, con la curva `--ease-ui` (`cubic-bezier(0.16, 1, 0.3, 1)`) o `expo.out` en GSAP.
- **Do** usar una sola entrada para el contenido corriente: `data-reveal`, fundido y 24px de subida, 0.9s, escalonado de 0.08s. El hero, la carta de tarifas y la VIP tienen la suya.
- **Do** poner un velo bajo todo texto que vaya sobre foto o video.
- **Do** desactivar Lenis, pins y scrubs con `prefers-reduced-motion: reduce`; Equipos pasa a cambiar con un toque, la VIP queda abierta y la marquesina se oculta.

### Don't:
- **Don't** usar el dorado (`--vip`) fuera de la sala VIP y su precio.
- **Don't** poner dos secciones seguidas con la misma composición.
- **Don't** usar glow de neón ni sombras de color en la interfaz, ni degradados sobre tipografía.
- **Don't** colorear titulares ni fondos de cian: fuera del botón, el cian es texto de acción, estado, cifra o trazo de ícono.
- **Don't** animar `background` o `color` en hover: usa una capa con `opacity`.
- **Don't** añadir antetítulos (kickers o eyebrows) sobre los títulos de sección.
- **Don't** sumar una segunda familia tipográfica ni íconos de glifo o emoji; los íconos son trazos de línea.
