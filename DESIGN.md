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
  tinta-hover: "#262b33"
  acento: "#2fd8ec"
  acento-hover: "#6ae6f4"
  acento-texto: "#00788a"
  sobre-acento: "#04161a"
  abierto: "#2fd8ec"
  cerrado: "#ff8a7a"
  vip: "#e2bd73"
  vip-hover: "#ecd09a"
  vip-noche: "#0f0c08"
typography:
  display:
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
  radio-m: "1.25rem"
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
  boton-hover:
    backgroundColor: "{colors.acento-hover}"
  boton-claro:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.5rem"
    height: "3rem"
  boton-claro-hover:
    backgroundColor: "{colors.tinta-hover}"
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
  boton-vip-hover:
    backgroundColor: "{colors.vip-hover}"
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
  pastilla:
    backgroundColor: "{colors.grafito-2}"
    textColor: "{colors.sobre-oscuro}"
    typography: "{typography.micro}"
    rounded: "{rounded.radio-boton}"
    padding: "0.35rem 0.8rem"
  filtro-activo:
    backgroundColor: "{colors.sobre-oscuro}"
    textColor: "{colors.grafito}"
    rounded: "{rounded.radio-boton}"
    padding: "0 1.25rem"
    height: "2.5rem"
---

# Design System: GamerZone E-Sports Center

## Overview

**Creative North Star: "La vitrina de producto"**

La landing se lee como una página de producto de consola: calma, premium y con la información siempre a un vistazo. Dos superficies se alternan con propósito. Grafito para la experiencia (hero, PCs, consolas, VIP, juegos, cierre) y nube con tarjetas blancas para la información (precios, sedes y horario, comodidades, preguntas). El visitante sabe en qué modo está por el color del suelo que pisa.

Una sola familia variable, Archivo, hace todo el trabajo: ancha y pesada en los títulos, ancho normal en el texto. Un único acento, el cian del logo, marca acciones, estado en vivo y cifras clave; nunca decora. El dorado vive en un solo cuarto: la sala VIP y su precio. La profundidad sale de la alternancia de superficies, radios grandes y líneas de un pixel, no de brillos. El movimiento es de producto: medios que crecen a sangre con el scroll, columnas pegadas y una sola entrada (fundido y 24px de subida) para todo lo demás.

Rechazos confirmados por el build: sin glow de neón, sin degradados en tipografía, sin ruido decorativo.

**Key Characteristics:**
- Alternancia grafito / nube con significado: experiencia sobre oscuro, información sobre claro.
- Un acento cian, raro y funcional; dorado encerrado en la VIP.
- Archivo variable: títulos a ancho 112% y peso 800, texto a 100% y peso 400.
- Radios grandes (28px en tarjetas y medios), botones en píldora, líneas de 1px.
- Cifras tabulares en todo el sitio.
- Medios que entran como tarjeta redondeada y se abren con `clip-path`.

## Colors

Neutros fríos casi sin croma, un cian eléctrico como única voz y un dorado cálido confinado a la VIP.

### Primary
- **Cian del logo** (`acento`): botón principal sobre oscuro, enlaces con flecha, estado "abierto", día de hoy en el horario, marcador del eje de consolas, íconos de plataforma, separadores de la marquesina, anillo de foco y selección. Su hover es **Cian claro** (`acento-hover`).
- **Cian legible** (`acento-texto`): la versión del acento que cumple contraste sobre claro. Íconos de sedes y comodidades, checks de planes, ahorro, enlaces y hover del FAQ, y el punto "abierto" dentro de `.claro`.
- **Tinta sobre cian** (`sobre-acento`): texto del botón cian.

### Secondary
- **Dorado VIP** (`vip`): solo dentro de la sala VIP y en su tarjeta de precio. Lema, íconos, precio, botón y enlace de la VIP. Hover `vip-hover`; fondo de la sala `vip-noche`, un negro cálido que reemplaza al grafito.

### Tertiary
- **Coral cerrado** (`cerrado`): punto de estado cuando la sede está cerrada. `abierto` comparte el valor del acento y es su alias semántico.

### Neutral
- **Grafito** (`grafito`): suelo de las secciones de experiencia, del menú móvil y de la tarjeta de horario dentro de la sección clara.
- **Grafito 2** (`grafito-2`): fondos de medios mientras cargan, pastillas de ficha y plataforma, carril de filtros.
- **Grafito 3** (`grafito-3`): etiquetas sobre grafito y barra de scroll.
- **Texto sobre oscuro** (`sobre-oscuro`) y **texto secundario sobre oscuro** (`sobre-oscuro-2`).
- **Línea oscura** (`linea-oscura`): divisores de 1px en listas, ejes y pie.
- **Nube** (`nube`): suelo de las secciones claras. **Blanco** (`blanco`): tarjetas sobre nube.
- **Tinta** (`tinta`), **tinta secundaria** (`tinta-2`) y **línea clara** (`linea-clara`): texto y divisores sobre claro. `tinta-hover` es el hover del botón sólido sobre claro.

### Named Rules
**The Un Acento Rule.** El cian solo marca acciones, estado en vivo y cifras clave. Si un elemento cian no se puede tocar ni informa un estado, no es cian.

**The Cuarto Dorado Rule.** `--vip`, `--vip-hover` y `--vip-noche` existen solo dentro de la sala VIP y en su tarifa. Ningún otro componente los toma prestados.

**The Contraste en Claro Rule.** Sobre `.claro` el acento se escribe con `acento-texto`, y el botón sólido pasa a tinta con texto blanco. El cian puro no va como texto sobre nube.

## Typography

**Display Font:** Archivo (con Segoe UI, system-ui, sans-serif)
**Body Font:** Archivo, la misma familia variable (ejes `wdth` 62–125 y `wght` 100–900)

**Character:** Una grotesca que cambia de voz con el eje de ancho: expandida y pesada grita el título, a ancho normal informa sin ruido. No hay segunda familia.

### Hierarchy
- **Display** (800, `--t-4xl`, 0.98, ancho 112%, -0.03em): titular del hero y la hora grande del horario. `text-wrap: balance`.
- **Headline** (800, `--t-3xl`, 1.02, ancho 112%, -0.025em): título de cada sección, nombres de consola, valores de specs de PC.
- **Precio** (800, `--t-precio`, 1, ancho 112%, -0.03em): monto principal de cada tarifa y de la VIP.
- **Title** (700, `--t-xl`, 1.2, ancho 106%, -0.01em): subtítulos, nombres de plan, sede y comodidad (estos últimos en 800).
- **Lead** (400, `--t-l`, 1.5): bajada bajo cada título, máximo 44ch (52ch en el hero), color secundario.
- **Body** (400, `--t-m`, 1.6): texto corrido; respuestas del FAQ a 60ch.
- **Label** (600, `--t-s`, 1.3): datos, notas, links de navegación, franja de datos del hero.
- **Micro** (600, `--t-xs`, 1.3): pastillas, etiquetas, años del eje, ahorro.

### Named Rules
**The Ancho es Voz Rule.** La jerarquía se marca con `font-stretch` y peso, no con otra familia: `--ancho-titulo` (112%) para títulos y cifras, 106% para títulos menores, `--ancho-texto` (100%) para leer.

**The Cifra Tabular Rule.** `font-variant-numeric: tabular-nums` está en el body: precios, horas y años se alinean siempre.

## Layout

Contenedor centrado de `min(100% - 2 * --gutter, --ancho-max)` con `--ancho-max` de 76rem y gutter fluido. Las secciones respiran con `--s-seccion` arriba y abajo; dos secciones claras seguidas (sedes, FAQ) eliminan el padding superior y se separan con una línea clara de 1px más `--s-6`.

Ritmo de espacio en pasos de `--s-1` a `--s-6` (0.5rem a 4.5rem). Las cabeceras de sección son una rejilla con `--s-2` entre título y bajada, y `--s-5` antes del contenido.

Composiciones recurrentes: rejilla asimétrica de dos columnas con un lado pegado (`position: sticky` bajo la barra, `top: calc(--nav-h + --s-3/--s-4)`) en sedes, PCs y FAQ; tres tarjetas en fila para tarifas; filas comparables separadas por línea para planes y juegos; bento de 4 columnas para comodidades; pista horizontal con eje para consolas. Nunca dos secciones seguidas con la misma composición.

Puntos de corte: 64rem (las rejillas de dos columnas pasan a una, la pista de consolas se vuelve carrusel nativo con snap, aparece el menú) y 47.99rem (móvil: tarjetas a una columna, botones de acción a ancho completo, CTA fijo inferior). Barra fija de `--nav-h` (3.75rem).

## Elevation & Depth

Sistema plano con capas tonales. La profundidad sale del cambio de superficie (grafito, grafito-2, nube, blanco) y no de sombras. La única sombra es la de la tarjeta blanca sobre nube, casi imperceptible. Sobre oscuro no hay sombras: las tarjetas oscuras se separan por tono.

Barras flotantes (nav sólida, CTA móvil, pie de foto del bento) usan vidrio: grafito o nube translúcidos con `backdrop-filter` y una línea de 1px como borde.

### Shadow Vocabulary
- **Tarjeta** (`box-shadow: 0 1px 2px rgb(11 13 16 / 0.04), 0 8px 24px -12px rgb(11 13 16 / 0.12)`): tarjetas blancas sobre nube (tarifas, sedes, comodidades). Solo en claro.
- **Línea de barra** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.06)`, o `0 1px 0 var(--linea-clara)` sobre claro): borde inferior de la nav sólida y superior del CTA móvil.

### Named Rules
**The Sin Glow Rule.** No hay resplandores ni sombras de color. La única luz que se mueve es el pulso del punto "abierto".

**The Superficie Rule.** Toda sección clara lleva `.claro`. Toda superficie oscura dentro de una sección clara (tarifa VIP, tarjeta de horario, foto del bento) lleva `data-superficie="oscura"`, para que la barra de navegación lea bien sobre qué está.

## Shapes

Formas amables y grandes. Tarjetas, medios y ventanas usan `--radio-l` (28px); el pie de foto flotante usa `--radio-m` (20px). Botones, filtros, pastillas y etiquetas son píldoras (`--radio-boton`). Los puntos de estado y el marcador del eje son círculos. Los bordes son líneas de 1px, nunca marcos gruesos.

Los medios hablan con `clip-path`: el video del hero empieza recortado al ancho del contenedor con `round --radio-l` y se abre a sangre; la VIP entra como ventana central recortada; cada foto de consola se descubre de derecha a izquierda. En móvil la tarjeta del cierre pierde el radio y va a sangre.

## Components

### Buttons
Píldoras firmes y directas.
- **Shape:** píldora (`--radio-boton`), alto mínimo 3rem, padding horizontal 1.5rem, peso 700 a `--t-m`.
- **Primary:** cian con texto `sobre-acento` sobre oscuro. Dentro de `.claro` pasa a tinta con texto blanco.
- **Hover / Active:** hover a `acento-hover` (o `tinta-hover` en claro); `active` escala a 0.97.
- **Ghost:** transparente con contorno interior de 1.5px en `currentColor`; hover con velo gris al 12%.
- **VIP:** dorado con texto `vip-noche`; solo en la sala VIP.
- **Compacto:** 2.25–2.5rem de alto y `--t-s` en la nav, sedes y planes. A ancho completo en móvil.

### Enlace con flecha
Texto 600 en acento (o `acento-texto` en claro) con flecha de línea; en hover se subraya y la flecha avanza 3px.

### Chips
- **Pastilla:** `grafito-2`, texto micro 600, píldora. Fichas de consola y plataformas de juego.
- **Filtro:** carril `grafito-2` con píldoras transparentes; activo invierte a `sobre-oscuro` con texto grafito.
- **Etiqueta:** `grafito-3` en la tarjeta de horario.

### Cards / Containers
- **Corner Style:** `--radio-l` (28px).
- **Background:** blanco sobre nube; grafito o `vip-noche` cuando es superficie oscura dentro de claro.
- **Shadow Strategy:** solo la sombra de tarjeta, solo en blanco sobre nube.
- **Border:** ninguno; las listas internas usan líneas de 1px.
- **Internal Padding:** `--s-4`, `--s-3` en móvil.

### Navigation
Barra fija, transparente sobre la apertura. Pasado el 80% de la primera pantalla se vuelve vidrio grafito al 72% con blur de 20px y saturación 180%; sobre secciones claras toma vidrio nube y texto tinta. Links a `--t-s` en color secundario que suben a primario en hover. Bajo 64rem, menú a pantalla completa con links display (800, ancho 112%) que entran escalonados cada 40ms, y botón de reservar a ancho completo.

### Estado en vivo
Punto de 8px más texto. Coral si está cerrado, cian si está abierto, con pulso de 2s que se apaga con reduced motion.

### Íconos
Trazos de Lucide en línea, 24px de caja, grosor 1.75, terminaciones redondeadas, `currentColor`. Un solo grosor en todo el sitio; tamaños de 1.1rem en franjas de datos, 1.5rem por defecto, 1.75–2rem en tarjetas.

### Medio que se abre
Video o foto que entra como tarjeta redondeada del ancho del contenedor y crece a sangre con scroll (`clip-path` con scrub 0.6). Firma del hero y de la VIP.

### Lista de filas
Filas separadas por línea de 1px arriba y abajo, nombre a la izquierda y dato a la derecha. Tarifas secundarias, planes, horario semanal, catálogo de juegos y FAQ (con un "+" que gira 45° al abrir).

## Do's and Don'ts

### Do:
- **Do** marcar cada sección de información con `.claro` y cada superficie oscura dentro de ella con `data-superficie="oscura"`.
- **Do** sacar todo color, tamaño y espacio de `src/styles/tokens.css`; sin `!important`, sin estilos inline, sin Tailwind.
- **Do** usar `acento-texto` para el acento sobre claro y `acento` sobre oscuro.
- **Do** escribir títulos en Archivo 800 a ancho 112% con tracking negativo, y texto a ancho 100%.
- **Do** animar solo `transform`, `opacity`, `clip-path` y el `font-stretch` del display, con la curva `--ease-ui` (`cubic-bezier(0.16, 1, 0.3, 1)`) o `expo.out` en GSAP.
- **Do** usar una sola entrada para el contenido: `data-reveal`, fundido y 24px de subida, 0.9s, escalonado de 0.08s.
- **Do** desactivar Lenis, pins y scrubs con `prefers-reduced-motion: reduce`; la pista de consolas pasa a carrusel nativo y la marquesina se oculta.

### Don't:
- **Don't** usar el dorado (`--vip`) fuera de la sala VIP y su precio.
- **Don't** poner dos secciones seguidas con la misma composición.
- **Don't** usar glow de neón, sombras de color ni degradados sobre tipografía.
- **Don't** usar el cian como decoración: si no es acción, estado en vivo o cifra clave, no es cian.
- **Don't** añadir antetítulos (kickers o eyebrows) sobre los títulos de sección.
- **Don't** sumar una segunda familia tipográfica ni íconos de glifo o emoji; los íconos son trazos de línea.
