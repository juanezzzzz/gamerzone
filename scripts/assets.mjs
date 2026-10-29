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
  // Referencia: control rojo de Xbox. Reemplazar por la 360 real del local.
  { id: 4061103, name: 'xbox-360', grade: 'vivo' },
  { id: 1136046, name: 'xbox-one', grade: 'vivo' },
  { id: 10225432, name: 'xbox-series-s', grade: 'vivo' },
  { id: 5268574, name: 'gpu', grade: 'vivo' },
  // Silueta frente a la pantalla: la spec de monitor del PC
  { id: 3923644, name: 'monitor', grade: 'vivo' },
  { id: 7334038, name: 'escalera', grade: 'vivo' },
  // La pantalla de esta foto muestra un logo de estudio: se desenfoca esa zona.
  { id: 2270554, name: 'vip', grade: 'vip', blur: 'iw*0.455:ih*0.31:iw*0.32:ih*0.34' },
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
  let vf = `scale='min(2000,iw)':-2,${GRADE[im.grade]}`
  if (im.blur) {
    const [w, h, x, y] = im.blur.split(':')
    vf = `split[a][b];[b]crop=${w}:${h}:${x}:${y},boxblur=40:3[z];[a][z]overlay=${x.replace(/iw/g, 'W').replace(/ih/g, 'H')}:${y.replace(/iw/g, 'W').replace(/ih/g, 'H')},${vf}`
  }
  ff(['-i', src, '-vf', vf, '-q:v', '72', join(outImg, `${im.name}.webp`)])
  credits.push({ file: `${im.name}.webp`, by: hit.user, url: hit.pageURL })
  console.log('imagen', im.name)
}

writeFileSync(join(out, 'creditos.json'), JSON.stringify(credits, null, 2))
console.log('Listo:', out)
