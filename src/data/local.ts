// Todos los datos del negocio. El contenido editable vive en ./contenido/*.json y se cambia
// desde el panel /admin (Sveltia CMS); este archivo lo lee y lo deja listo para las secciones.
// Lo que no está confirmado lleva `pendiente: true`. Mientras REVISION sea true, la página
// lleva noindex y subraya los datos pendientes.
import type { ImageMetadata } from 'astro'
import { url } from '../lib/url'
import negocio from './contenido/negocio.json'
import portada from './contenido/portada.json'
import sedes from './contenido/sedes.json'
import horario from './contenido/horario.json'
import precios from './contenido/precios.json'
import pcs from './contenido/pcs.json'
import consolas from './contenido/consolas.json'
import vip from './contenido/vip.json'
import juegos from './contenido/juegos.json'
import comodidades from './contenido/comodidades.json'
import faq from './contenido/faq.json'
import reserva from './contenido/reserva.json'

/* ---------- Imágenes: el panel guarda el nombre del archivo en src/assets/media ---------- */

const imagenes = import.meta.glob<ImageMetadata>('../assets/media/*.{webp,jpg,jpeg,png,avif}', {
  eager: true,
  import: 'default',
})
const porNombre = new Map(Object.entries(imagenes).map(([ruta, img]) => [ruta.split('/').pop()!, img]))
/** Busca una imagen por nombre de archivo (acepta rutas: solo cuenta el nombre). */
export function imagen(valor: string): ImageMetadata {
  const nombre = valor.split('/').pop() ?? ''
  const img = porNombre.get(nombre)
  if (!img) throw new Error(`No existe la imagen "${valor}" en src/assets/media`)
  return img
}
// Los videos viven en public/: se sirven tal cual, respetando la base del sitio
const medio = (ruta: string) => (ruta ? url(ruta) : '')

/** $4.000: punto de miles, sin decimales. */
export const pesos = (n: number | string) => `$${Number(n).toLocaleString('es-CO')}`

/* ---------- Negocio ---------- */

export const REVISION = negocio.revision

export type Dato = { texto: string; pendiente: boolean }

export const NEGOCIO = {
  nombre: 'GamerZone',
  lema: 'E-Sports Center',
  ciudad: negocio.ciudad,
  whatsapp: negocio.whatsapp,
  instagram: negocio.instagram,
}

export const SEDES = sedes.sedes.map((s) => ({
  nombre: s.nombre,
  direccion: { texto: s.direccion, pendiente: s.pendiente },
  barrio: { texto: s.barrio, pendiente: s.pendiente },
  mapa: s.mapa,
}))

export const waLink = (mensaje = 'Hola, quiero reservar en GamerZone.') =>
  `https://wa.me/${NEGOCIO.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`

/* ---------- Horario ---------- */

// dia: 0 = domingo … 6 = sábado. Horas en formato 24 h; cierra pasa de 24 cuando sigue
// abierto después de medianoche (30 = 06:00 del día siguiente). Rige en las dos sedes.
const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
export const HORARIO = {
  pendiente: horario.pendiente,
  dias: horario.dias
    .filter((d) => d.abierto)
    .map((d) => {
      // El panel puede guardar las horas como texto: se pasan a número
      const abre = Number(d.abre)
      const cierra = Number(d.cierra)
      return {
        dia: DIAS.indexOf(d.dia),
        abre,
        // En el panel se escribe la hora de cierre tal cual (6 = 6 a. m.); si es menor o igual
        // que la de apertura, es del día siguiente
        cierra: cierra <= abre ? cierra + 24 : cierra,
        transnochon: d.transnochon,
      }
    }),
}

/* ---------- Precios y planes ---------- */

export const TEXTOS = {
  portada,
  sedes: { titulo: sedes.titulo, texto: sedes.texto },
  precios: { titulo: precios.titulo, texto: precios.texto, nota: precios.nota, planes: precios.planesTitulo },
  pcs: { titulo: pcs.titulo, texto: pcs.texto },
  consolas: { titulo: consolas.titulo, texto: consolas.texto },
  juegos: { titulo: juegos.titulo },
  comodidades: { titulo: comodidades.titulo, texto: comodidades.texto, fotoTitulo: comodidades.fotoTitulo, fotoTexto: comodidades.fotoTexto },
  faq: { titulo: faq.titulo },
  reserva,
}

export const PRECIO_HORA_PC = { texto: pesos(precios.pc.hora), valor: Number(precios.pc.hora), pendiente: precios.pc.pendiente }
export const PRECIO_HORA_CONSOLA = { texto: pesos(precios.consola.hora), pendiente: precios.consola.pendiente }

export const VIP = {
  titulo: vip.titulo,
  lema: vip.lema,
  imagen: imagen(vip.imagen),
  capacidad: { texto: vip.capacidad, pendiente: vip.pendiente },
  precioHora: { texto: pesos(vip.precioHora), pendiente: vip.pendiente },
  features: vip.features,
}

export const TARIFAS = [
  {
    grupo: 'PC gamer',
    filas: [
      { nombre: 'Hora', precio: PRECIO_HORA_PC.texto, pendiente: precios.pc.pendiente },
      { nombre: 'Media hora', precio: pesos(precios.pc.mediaHora), pendiente: precios.pc.pendiente },
      { nombre: 'Transnochón, viernes y sábado', precio: pesos(precios.pc.transnochon), pendiente: precios.pc.pendiente },
    ],
  },
  {
    grupo: 'Consola Xbox',
    filas: [
      { nombre: 'Hora, por consola', precio: PRECIO_HORA_CONSOLA.texto, pendiente: precios.consola.pendiente },
      { nombre: 'Control adicional, por hora', precio: pesos(precios.consola.controlAdicional), pendiente: precios.consola.pendiente },
    ],
  },
  {
    grupo: 'Sala VIP',
    vip: true,
    filas: [{ nombre: `Hora, ${vip.capacidad.toLowerCase()}`, precio: VIP.precioHora.texto, pendiente: vip.pendiente }],
  },
]

// `horasPc`: si el plan equivale a horas de PC, la página calcula cuánto se ahorra.
export const PLANES = precios.planes.map((p) => ({ ...p, precio: pesos(p.precio), valor: Number(p.precio), horasPc: Number(p.horasPc) }))

/* ---------- Equipos ---------- */

export type Spec = { label: string; valor: string; nota: string; media: string; pendiente: boolean }
export const SPECS_PC: Spec[] = pcs.specs.map((s, i) => ({
  label: s.nombre,
  valor: s.valor,
  nota: s.nota,
  media: `spec-${i}`,
  pendiente: s.pendiente,
}))

// Cada spec muestra su video si tiene uno; si no, su imagen
export const MEDIA_PC: Record<string, { tipo: 'img'; src: ImageMetadata } | { tipo: 'video'; src: string; poster: string }> =
  Object.fromEntries(
    pcs.specs.map((s, i) => [
      `spec-${i}`,
      s.video ? { tipo: 'video' as const, src: medio(s.video), poster: medio(s.poster) } : { tipo: 'img' as const, src: imagen(s.imagen) },
    ])
  )

export const CONSOLAS = consolas.consolas.map((c) => ({ ...c, img: imagen(c.imagen) }))

export type Plataforma = 'pc' | 'xbox'
export const JUEGOS: { nombre: string; tag: string; en: Plataforma[] }[] = juegos.juegos.map((j) => ({
  nombre: j.nombre,
  tag: j.genero,
  en: j.en as Plataforma[],
}))

/* ---------- Lugar, preguntas y portada ---------- */

export const COMODIDADES = comodidades.items
export const COMODIDADES_FOTO = imagen(comodidades.imagen)

export const FAQ = faq.preguntas.map((f) => ({ p: f.pregunta, r: f.respuesta, pendiente: f.pendiente }))

export const PORTADA_MEDIA = { video: medio(portada.video), poster: medio(portada.poster) }
