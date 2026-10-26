// Todos los datos del negocio. Lo que no está confirmado lleva `pendiente: true`.
// Mientras REVISION sea true, la página lleva noindex y marca los datos pendientes.
import type { ImageMetadata } from 'astro'
import imgGpu from '../assets/media/gpu.webp'
import img360 from '../assets/media/xbox-360.webp'
import imgOne from '../assets/media/xbox-one.webp'
import imgSeries from '../assets/media/xbox-series-s.webp'
import imgEscalera from '../assets/media/escalera.webp'
import imgVip from '../assets/media/vip.webp'
import { url } from '../lib/url'

export const REVISION = true

export type Dato = { texto: string; pendiente: boolean }

export const NEGOCIO = {
  nombre: 'GamerZone',
  lema: 'E-Sports Center',
  ciudad: { texto: 'Colombia', pendiente: true },
  whatsapp: { numero: '570000000000', visible: '300 000 0000', pendiente: true },
  instagram: { texto: '@zonagamer', pendiente: true },
}

// Dos sedes, misma marca. Direcciones aún sin confirmar: van datos de referencia.
export const SEDES = [
  {
    nombre: 'Sede 1',
    direccion: { texto: 'Calle 00 # 00-00', pendiente: true },
    barrio: { texto: 'Barrio por confirmar', pendiente: true },
    mapa: 'https://maps.google.com/?q=GamerZone+E-Sports+Center',
  },
  {
    nombre: 'Sede 2',
    direccion: { texto: 'Carrera 00 # 00-00', pendiente: true },
    barrio: { texto: 'Barrio por confirmar', pendiente: true },
    mapa: 'https://maps.google.com/?q=GamerZone+E-Sports+Center',
  },
]

export const waLink = (mensaje = 'Hola, quiero reservar en GamerZone.') =>
  `https://wa.me/${NEGOCIO.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`

// dia: 0 = domingo … 6 = sábado. Horas en formato 24 h; cierra pasa de 24 cuando sigue
// abierto después de medianoche (30 = 06:00 del día siguiente). Rige en las dos sedes.
export const HORARIO = {
  pendiente: true,
  dias: [
    { dia: 1, abre: 10, cierra: 22 },
    { dia: 2, abre: 10, cierra: 22 },
    { dia: 3, abre: 10, cierra: 22 },
    { dia: 4, abre: 10, cierra: 22 },
    // Viernes y sábado: transnochón (en el sistema existe ese turno). Hora de cierre de referencia.
    { dia: 5, abre: 10, cierra: 30, transnochon: true },
    { dia: 6, abre: 10, cierra: 30, transnochon: true },
    { dia: 0, abre: 12, cierra: 21 },
  ],
}

export type Spec = { label: string; valor: string; nota: string; media: string; pendiente: boolean }
// Specs de referencia: confirmar con el negocio antes de publicar.
export const SPECS_PC: Spec[] = [
  { label: 'Gráfica', valor: 'Serie RTX', nota: 'Juegos actuales en calidad alta.', media: 'gpu', pendiente: true },
  { label: 'Monitor', valor: 'Alta frecuencia', nota: 'Imagen fluida para shooters y competitivo.', media: 'sala', pendiente: true },
  { label: 'Periféricos', valor: 'Gamer', nota: 'Teclado, mouse y audífonos en cada puesto.', media: 'teclado', pendiente: true },
  { label: 'Equipos', valor: 'Refrigerados', nota: 'Sesiones largas sin que el equipo se caliente.', media: 'ventilador', pendiente: true },
]

export const MEDIA_PC: Record<string, { tipo: 'img'; src: ImageMetadata } | { tipo: 'video'; src: string; poster: string }> = {
  gpu: { tipo: 'img', src: imgGpu },
  sala: { tipo: 'video', src: url('/media/piso1-sala.mp4'), poster: url('/media/piso1-sala-poster.webp') },
  teclado: { tipo: 'video', src: url('/media/teclado.mp4'), poster: url('/media/teclado-poster.webp') },
  ventilador: { tipo: 'video', src: url('/media/ventilador.mp4'), poster: url('/media/ventilador-poster.webp') },
}

export const CONSOLAS = [
  { nombre: 'Xbox 360', anio: '2005', img: img360, texto: 'Los clásicos de sofá, pantalla dividida y cuatro controles.', ficha: ['Hasta 4 controles', 'Multijugador local'] },
  { nombre: 'Xbox One', anio: '2013', img: imgOne, texto: 'Catálogo grande para jugar en grupo y en línea.', ficha: ['Juego en línea', 'Catálogo amplio'] },
  { nombre: 'Xbox Series S', anio: '2020', img: imgSeries, texto: 'La generación actual: carga en segundos y hasta 120 fps.', ficha: ['Hasta 120 fps', 'Carga rápida'] },
]

// `en`: dónde se juega en el local. Lista de referencia, por confirmar con el negocio.
export type Plataforma = 'pc' | 'xbox'
export const JUEGOS: { nombre: string; tag: string; en: Plataforma[] }[] = [
  { nombre: 'EA Sports FC 27', tag: 'Fútbol', en: ['xbox', 'pc'] },
  { nombre: 'EA Sports FC 26', tag: 'Fútbol', en: ['xbox', 'pc'] },
  { nombre: 'Call of Duty', tag: 'Shooter', en: ['xbox', 'pc'] },
  { nombre: 'Valorant', tag: 'Táctico', en: ['pc'] },
  { nombre: 'League of Legends', tag: 'MOBA', en: ['pc'] },
  { nombre: 'Fortnite', tag: 'Battle royale', en: ['xbox', 'pc'] },
  { nombre: 'Fall Guys', tag: 'Party', en: ['xbox', 'pc'] },
  { nombre: 'World of Warcraft', tag: 'MMO', en: ['pc'] },
]

// Fuente única de los datos que se repiten en varias secciones
export const PRECIO_HORA_PC = { texto: '$4.000', valor: 4000, pendiente: true }
export const VIP = {
  imagen: imgVip,
  capacidad: { texto: 'Hasta 6 personas', pendiente: true },
  precioHora: { texto: '$30.000', pendiente: true },
  features: ['Pantalla grande', 'Sofá para el grupo', 'Consola y controles incluidos'],
}

// Fotos de stock sin personas identificables: se reemplazan por las del local.
export const GALERIA = [
  { src: imgEscalera, alt: 'Escalera iluminada', area: 'a' },
  { src: imgGpu, alt: 'Tarjetas gráficas', area: 'b' },
  { src: imgOne, alt: 'Control de Xbox One en primer plano', area: 'c' },
  { src: imgSeries, alt: 'Botones del control de Xbox Series S', area: 'd' },
]

export const TARIFAS = [
  {
    grupo: 'PC gamer',
    filas: [
      { nombre: 'Hora', precio: PRECIO_HORA_PC.texto, pendiente: PRECIO_HORA_PC.pendiente },
      { nombre: 'Media hora', precio: '$2.500', pendiente: true },
      { nombre: 'Transnochón, viernes y sábado', precio: '$20.000', pendiente: true },
    ],
  },
  {
    grupo: 'Consola Xbox',
    filas: [
      { nombre: 'Hora, por consola', precio: '$5.000', pendiente: true },
      { nombre: 'Control adicional, por hora', precio: '$1.000', pendiente: true },
    ],
  },
  {
    grupo: 'Sala VIP',
    vip: true,
    filas: [{ nombre: `Hora, ${VIP.capacidad.texto.toLowerCase()}`, precio: VIP.precioHora.texto, pendiente: true }],
  },
]

// `horasPc`: si el plan equivale a horas de PC, la página calcula cuánto se ahorra.
export const PLANES = [
  {
    nombre: 'Pase de 5 horas',
    texto: 'Cinco horas de PC para usar el mismo día, como quieras repartirlas.',
    incluye: ['Cualquier PC disponible', 'Válido el mismo día'],
    duracion: '5 h',
    personas: '1',
    precio: '$16.000',
    valor: 16000,
    horasPc: 5,
    pendiente: true,
  },
  {
    nombre: 'Noche de torneo',
    texto: 'Arma tu equipo y reserva una fila de PCs para jugar contra tus amigos.',
    incluye: ['Fila de 5 PCs', 'Bracket armado por nosotros'],
    duracion: '3 h',
    personas: '5',
    precio: '$60.000',
    valor: 60000,
    pendiente: true,
  },
  {
    nombre: 'Cumpleaños',
    texto: 'La sala VIP para tu grupo, con consola, pantalla grande y tiempo de sobra.',
    incluye: ['Sala VIP privada', 'Decoración básica'],
    duracion: '3 h',
    personas: VIP.capacidad.texto,
    precio: '$80.000',
    valor: 80000,
    pendiente: true,
  },
]

export const COMODIDADES = [
  { label: 'Clima', texto: 'Aire acondicionado en todas las salas.', pendiente: false },
  { label: 'Servicio', texto: 'Te atendemos en tu puesto.', pendiente: false },
  { label: 'Sillas', texto: 'Sillas gamer para sesiones largas.', pendiente: true },
  { label: 'Tienda', texto: 'Bebidas, snacks y café sin salir de la partida.', pendiente: false },
]

export const FAQ = [
  { p: '¿Tengo que reservar?', r: 'Para PC y consola puedes llegar directo. Para la sala VIP sí recomendamos reservar por WhatsApp.', pendiente: true },
  { p: '¿Cómo se cobra?', r: 'Por tiempo jugado. Pagas al terminar por las horas que usaste.', pendiente: true },
  { p: '¿Puedo usar mi cuenta?', r: 'Sí. Inicias sesión con tu cuenta en el PC o la consola y la cierras al irte.', pendiente: true },
  { p: '¿Si mi juego no está instalado?', r: 'Escríbenos antes de venir y lo dejamos listo.', pendiente: true },
  { p: '¿Hay edad mínima?', r: 'Los menores de 14 años vienen con un adulto.', pendiente: true },
  { p: '¿Cómo puedo pagar?', r: 'Efectivo, transferencia, Nequi o tarjeta por datáfono.', pendiente: false },
  { p: '¿Qué es el transnochón?', r: 'Viernes y sábado seguimos abiertos toda la noche. Ideal para maratones con tu grupo.', pendiente: true },
  { p: '¿Hacen torneos?', r: 'Sí, organizamos torneos. Escríbenos por WhatsApp para saber cuál es el próximo y cómo inscribirte.', pendiente: true },
  { p: '¿Venden bonos de regalo?', r: 'Sí. Un bono de tiempo de juego es el regalo perfecto para un gamer. Pídelo por WhatsApp.', pendiente: true },
  { p: '¿En cuál sede reservo?', r: 'Escríbenos por WhatsApp y dinos a cuál sede vas; te confirmamos la disponibilidad.', pendiente: true },
]
