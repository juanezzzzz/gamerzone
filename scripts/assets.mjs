// Descarga el material de Pixabay y lo procesa con ffmpeg al look de la marca.
// Uso: npm run assets   (requiere PIXABAY_KEY en .env y ffmpeg en el PATH)
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const env = Object.fromEntries(
  readFileSync(join(root, '.env'), 'utf8').split('\n').filter((l) => l.includes('=')).map((l) => l.trim().split('='))
)
const KEY = env.PIXABAY_KEY
if (!KEY) throw new Error('Falta PIXABAY_KEY en .env')

const cache = join(root, '.cache')
// Videos y posters se sirven tal cual; las imágenes pasan por astro:assets (avif/webp por tamaño).
const out = join(root, 'public', 'media')
const outImg = join(root, 'src', 'assets', 'media')
for (const d of [cache, out, outImg]) mkdirSync(d, { recursive: true })

// Grading: color vivo con empuje cian/magenta (look RGB). "vip" calienta hacia dorado.
const GRADE = {
  vivo: "eq=contrast=1.12:saturation=1.4:gamma=1.08,vibrance=intensity=0.35,colorbalance=bs=0.08:rs=-0.03:bh=0.06:rh=0.05,curves=all='0/0 0.1/0.08 0.5/0.55 1/1'",
  vip: 'eq=contrast=1.1:saturation=1.25:gamma=1.15,colorbalance=rs=0.05:bs=-0.06:rm=0.07:gm=0.02:bm=-0.08:rh=0.05:bh=-0.05',
}

const VIDEOS = [
  // id, nombre, grading, recorte en segundos, ancho
  { id: 181093, name: 'piso1-sala', grade: 'vivo', ss: 0, t: 12, w: 1920 },
  { id: 31806, name: 'teclado', grade: 'vivo', ss: 2, t: 8, w: 1600 },
  { id: 8064, name: 'ventilador', grade: 'vivo', ss: 1.5, t: 5, w: 1600 },
]
const IMAGES = [
  // Producto sobre fondo blanco: se recorta por su borde exterior y va sobre el grafito.
  // `fondo`: desde qué brillo un pixel conectado al borde de la foto cuenta como fondo
  { id: 2202570, name: 'xbox-360', grade: 'vivo', recorte: true, fondo: 235 },
  { id: 893225, name: 'xbox-one', grade: 'vivo' },
  // Control blanco: se baja la exposición para que no encandile junto a las demás
  { id: 10225432, name: 'xbox-series-s', grade: 'vivo', exposicion: 0.56 },
  { id: 5268574, name: 'gpu', grade: 'vivo' },
  // Silueta frente a la pantalla: la spec de monitor del PC
  { id: 3923644, name: 'monitor', grade: 'vivo' },
  { id: 7334038, name: 'escalera', grade: 'vivo' },
  // La pantalla de esta foto muestra un logo de estudio: se reemplaza por el de GamerZone.
  // Esquinas de la pantalla en la foto de 1280 x 720: sup. izq., sup. der., inf. izq., inf. der.
  { id: 2270554, name: 'vip', grade: 'vip', pantalla: '602:231:986:203:602:431:986:456' },
]

const api = async (path) => {
  const r = await fetch(`https://pixabay.com/api/${path}&key=${KEY}`)
  if (!r.ok) throw new Error(`Pixabay ${r.status} en ${path}`)
  return (await r.json()).hits[0]
}
const download = async (url, file) => {
  if (existsSync(file)) return file
  const r = await fetch(url)
  if (!r.ok) throw new Error(`Descarga ${r.status}: ${url}`)
  writeFileSync(file, Buffer.from(await r.arrayBuffer()))
  return file
}
const ff = (args) => execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...args], { stdio: 'inherit' })
const credits = []

// Recorta un producto de su fondo blanco: el fondo es lo claro conectado al borde de la foto, así
// los blancos de adentro (letras, botones) se conservan. Queda sobre una luz suave en grafito.
function recortar(src, im, salida) {
  const [ow, oh] = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', src]).toString().trim().split(',').map(Number)
  const escala = Math.min(1400 / ow, 1040 / oh)
  const w = Math.round((ow * escala) / 2) * 2
  const h = Math.round((oh * escala) / 2) * 2
  const gris = execFileSync('ffmpeg', ['-loglevel', 'error', '-i', src, '-vf', `scale=${w}:${h},format=gray`, '-f', 'rawvideo', '-'], { maxBuffer: w * h * 2 })
  const mascara = Buffer.alloc(w * h, 255)
  const pila = []
  const empujar = (i) => {
    if (mascara[i] && gris[i] >= im.fondo) {
      mascara[i] = 0
      pila.push(i)
    }
  }
  for (let x = 0; x < w; x++) {
    empujar(x)
    empujar((h - 1) * w + x)
  }
  for (let y = 0; y < h; y++) {
    empujar(y * w)
    empujar(y * w + w - 1)
  }
  while (pila.length) {
    const i = pila.pop()
    if (i % w > 0) empujar(i - 1)
    if (i % w < w - 1) empujar(i + 1)
    if (i >= w) empujar(i - w)
    if (i < w * (h - 1)) empujar(i + w)
  }
  const archivo = join(cache, `${im.id}-mascara.gray`)
  writeFileSync(archivo, mascara)
  ff([
    '-f', 'lavfi', '-i', 'gradients=s=1600x1200:c0=0x2a3038:c1=0x14171c:x0=800:y0=540:x1=800:y1=1250:type=radial',
    '-i', src,
    '-f', 'rawvideo', '-pix_fmt', 'gray', '-s', `${w}x${h}`, '-i', archivo,
    '-filter_complex',
    `[1]scale=${w}:${h},${GRADE[im.grade]},format=rgba[p];[2]erosion,gblur=sigma=0.8[m];[p][m]alphamerge[k];[0][k]overlay=(W-w)/2:(H-h)/2`,
    '-frames:v', '1', '-q:v', '76', salida,
  ])
}

for (const v of VIDEOS) {
  const hit = await api(`videos/?id=${v.id}`)
  const src = await download(hit.videos.large.url || hit.videos.medium.url, join(cache, `${v.id}.mp4`))
  const vf = `scale=${v.w}:-2,${GRADE[v.grade]}`
  ff(['-ss', String(v.ss), '-i', src, '-t', String(v.t), '-an', '-vf', vf, '-c:v', 'libx264', '-crf', '27', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', join(out, `${v.name}.mp4`)])
  ff(['-ss', String(v.ss + 0.5), '-i', src, '-frames:v', '1', '-vf', vf, '-q:v', '70', join(out, `${v.name}-poster.webp`)])
  credits.push({ file: `${v.name}.mp4`, by: hit.user, url: hit.pageURL })
  console.log('video', v.name)
}

for (const im of IMAGES) {
  const hit = await api(`?id=${im.id}`)
  const src = await download(hit.largeImageURL, join(cache, `${im.id}.jpg`))
  const vf = `scale='min(2000,iw)':-2,${GRADE[im.grade]}`
  const salida = join(outImg, `${im.name}.webp`)
  if (im.pantalla) {
    const logo = join(root, 'src', 'assets', 'brand', 'gamerzone-logo.png')
    const [x0, y0, x1, y1, x2, y2, x3, y3] = im.pantalla.split(':')
    // El logo va en un lienzo con borde transparente para que la deformación no arrastre el borde
    const pantalla = `color=black:1276x716[c];[1]scale=-1:680[l];[c][l]overlay=(W-w)/2:(H-h)/2,format=rgba,pad=1280:720:2:2:black@0,perspective=${x0}:${y0}:${x1}:${y1}:${x2}:${y2}:${x3}:${y3}:sense=destination[p]`
    ff(['-i', src, '-i', logo, '-filter_complex', `${pantalla};[0][p]overlay=0:0,${vf}`, '-frames:v', '1', '-q:v', '72', salida])
  } else {
    if (im.recorte) {
      recortar(src, im, salida)
    } else {
      // Baja los blancos, no solo los medios
      const e = im.exposicion
      const previo = e ? `colorlevels=romax=${e}:gomax=${e}:bomax=${e},` : ''
      ff(['-i', src, '-vf', previo + vf, '-q:v', '72', salida])
    }
  }
  credits.push({ file: `${im.name}.webp`, by: hit.user, url: hit.pageURL })
  console.log('imagen', im.name)
}

writeFileSync(join(out, 'creditos.json'), JSON.stringify(credits, null, 2))
console.log('Listo:', out)
