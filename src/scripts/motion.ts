// Coreografía del scroll. Ver MOTION-DIRECTION.md.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s)
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => [...el.querySelectorAll<T>(s)]
const root = document.documentElement
const reduced = root.classList.contains('reduced')
const desktop = '(min-width: 64.0625rem)'

/* ---------- Videos: solo se reproducen en pantalla ---------- */

// Los videos de las specs de PC los maneja su sección: solo suenan cuando su capa está activa
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      const v = e.target as HTMLVideoElement
      if (e.isIntersecting && !reduced) v.play().catch(() => {})
      else v.pause()
    }),
  { rootMargin: '15% 0px' }
)
$$<HTMLVideoElement>('video').filter((v) => !v.closest('[data-capa]')).forEach((v) => io.observe(v))

/* ---------- Eje de consolas: ubica los hitos y mueve el marcador ---------- */

const eje = $('[data-eje]')
const hitos = $$('[data-hito]')
const paneles = $$('[data-panel]')
const marcador = $('[data-marcador]')
hitos.forEach((h) => (h.style.left = `${h.dataset.x}%`))

// `centro` es la coordenada horizontal (dentro de la pista) que está en el centro de la pantalla.
function ejeConsolas(centro: number) {
  if (!eje || !marcador || !paneles.length) return
  const centros = paneles.map((p) => p.offsetLeft + p.offsetWidth / 2)
  const xs = hitos.map((h) => Number(h.dataset.x))
  let x = xs[0]
  let activo = 0
  if (centro >= centros[centros.length - 1]) {
    x = xs[xs.length - 1]
    activo = xs.length - 1
  } else if (centro > centros[0]) {
    const i = centros.findIndex((c) => c > centro) - 1
    const f = (centro - centros[i]) / (centros[i + 1] - centros[i])
    x = xs[i] + (xs[i + 1] - xs[i]) * f
    activo = f < 0.5 ? i : i + 1
  }
  marcador.style.left = `${x}%`
  hitos.forEach((h, i) => h.toggleAttribute('data-activo', i === activo))
}
ejeConsolas(0)

// Sin pin (tablet, mobile o reduced motion) el eje sigue al carrusel nativo
const pistaConsolas = $('[data-consolas-pista]')
pistaConsolas?.addEventListener(
  'scroll',
  () => ejeConsolas(pistaConsolas.scrollLeft + pistaConsolas.clientWidth / 2),
  { passive: true }
)

/* ---------- Triggers de lectura (nav, CTA móvil) ---------- */

function triggersDeLectura() {
  const nav = $('[data-nav]')
  ScrollTrigger.create({
    start: () => window.innerHeight * 0.8,
    // Más allá del final: con 'max' la barra se apagaba justo al tocar el fondo de la página
    end: () => document.documentElement.scrollHeight * 2,
    onToggle: (self) => nav?.classList.toggle('solida', self.isActive),
  })

  // La barra toma la superficie que tiene justo debajo de su borde inferior:
  // clara sobre las secciones de información, oscura sobre el resto
  const superficie = () => {
    if (!nav) return
    const y = nav.offsetHeight + 1
    const debajo = document.elementsFromPoint(window.innerWidth / 2, y).find((el) => !nav.contains(el))
    // Una tarjeta o foto oscura dentro de una sección clara cuenta como oscura
    const zona = debajo?.closest('[data-superficie="oscura"], .claro')
    nav.classList.toggle('sobre-claro', !!zona?.classList.contains('claro'))
  }
  window.addEventListener('scroll', superficie, { passive: true })
  ScrollTrigger.addEventListener('refresh', superficie)
  superficie()

  // CTA móvil: se esconde donde ya hay botón
  const mobileCta = $('[data-mobile-cta]')
  if (mobileCta) {
    const zonas = ['[data-apertura]', '[data-hero]', '[data-vip]', '[data-cta]']
    const visibles = new Set<string>()
    zonas.forEach((z) =>
      ScrollTrigger.create({
        trigger: z,
        start: 'top 80%',
        end: 'bottom 20%',
        onToggle: (self) => {
          self.isActive ? visibles.add(z) : visibles.delete(z)
          mobileCta.classList.toggle('oculto', visibles.size > 0)
        },
      })
    )
  }
}

// Los triggers se miden en el orden de la página aunque se hayan creado en otro
function refrescar() {
  ScrollTrigger.sort()
  ScrollTrigger.refresh()
}

/* ---------- Todo lo que sigue es movimiento: se omite con reduced motion ---------- */

if (!reduced) {
  const lenis = new Lenis({ lerp: 0.12 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)

  $$<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href')
      if (!href || href.length < 2) return
      const destino = $(href)
      if (!destino) return
      e.preventDefault()
      // Posición real en el documento: incluye el espacio que agregan los pins
      const y = destino.getBoundingClientRect().top + window.scrollY
      lenis.scrollTo(y, { duration: 1.2 })
    })
  )

  // Reveal global: sube 24 px y aparece, en cascada por grupo
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08 }),
  })

  const mm = gsap.matchMedia()

  // Hero: entrada al aparecer (la apertura va antes)
  gsap
    .timeline({ defaults: { ease: 'expo.out' }, scrollTrigger: { trigger: '[data-hero]', start: 'top 75%', once: true } })
    .from('[data-hero-titulo]', { opacity: 0, y: 32, duration: 1.2 })
    .from('[data-hero-pieza]', { opacity: 0, y: 20, duration: 1, stagger: 0.08 }, 0.15)
    .from('[data-hero-media] video', { opacity: 0, scale: 1.08, duration: 1.6 }, 0.25)

  // Hero: la tarjeta de video se abre a pantalla completa mientras sube
  gsap.to('[data-hero-media]', {
    clipPath: 'inset(0px 0px round 0px)',
    ease: 'none',
    scrollTrigger: { trigger: '[data-hero-media]', start: 'top 85%', end: 'top top', scrub: 0.6 },
  })

  // Precios: las tarifas entran en cascada con algo más de recorrido
  gsap.from('.tarifa', {
    y: 48,
    opacity: 0,
    duration: 1,
    ease: 'expo.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '.tarifas', start: 'top 85%', once: true },
  })

  // Consolas: recorrido horizontal en desktop; cada foto se descubre al entrar
  mm.add(desktop, () => {
    const pista = $('[data-consolas-pista]')!
    const dist = () => pista.scrollWidth - window.innerWidth
    const mover = gsap.to(pista, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-consolas]',
        start: 'top top',
        end: () => `+=${dist()}`,
        pin: '[data-consolas-pin]',
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: () => ejeConsolas(-Number(gsap.getProperty(pista, 'x')) + window.innerWidth / 2),
      },
    })
    $$('[data-panel]', pista).forEach((panel) => {
      const entra = { trigger: panel, containerAnimation: mover, start: 'left 95%', end: 'left 45%', scrub: true }
      gsap.fromTo($('[data-panel-foto]', panel), { clipPath: 'inset(0% 0% 0% 100% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: entra })
      gsap.fromTo($('[data-panel-foto] img', panel), { scale: 1.2 }, { scale: 1, ease: 'none', scrollTrigger: entra })
      gsap.fromTo($('[data-panel-info]', panel), { opacity: 0, x: 40 }, { opacity: 1, x: 0, ease: 'none', scrollTrigger: entra })
    })
  })

  // VIP: la sala crece desde una ventana central y el contenido sube
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '[data-vip]',
        start: 'top top',
        end: '+=70%',
        pin: '[data-vip-escena]',
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    })
    .to('[data-vip-ventana]', { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'power2.inOut', duration: 1 }, 0)
    .to('[data-vip-ventana] img', { scale: 1, ease: 'none', duration: 1 }, 0)
    // El botón y la nota solo aparecen: si también subieran, la cascada los cruzaría
    .from('[data-vip-contenido] > :not(.btn):not(.nota)', { opacity: 0, y: 30, stagger: 0.06, duration: 0.5, ease: 'power2.out' }, 0.15)
    .from('[data-vip-contenido] > :is(.btn, .nota)', { opacity: 0, duration: 0.4, ease: 'power2.out' }, 0.45)

  // Juegos: marquesina continua; el scroll la acelera y cambia su dirección
  const filas = $$('[data-fila]')
  if (filas.length) {
    let empuje = 1
    let dir = 1
    const pos = filas.map(() => 0)
    ScrollTrigger.create({
      trigger: '[data-juegos]',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        dir = self.direction
        empuje = 1 + Math.min(Math.abs(self.getVelocity()) / 300, 6)
      },
    })
    gsap.ticker.add((_, delta) => {
      empuje += (1 - empuje) * 0.05
      filas.forEach((fila, i) => {
        const ancho = (fila.firstElementChild as HTMLElement).offsetWidth
        pos[i] -= Number(fila.dataset.fila) * dir * empuje * delta * 0.05
        pos[i] = ((pos[i] % ancho) - ancho) % ancho
        gsap.set(fila, { x: pos[i] })
      })
    })
  }

  // CTA final: la tarjeta crece un poco al entrar
  gsap.from('[data-cta-tarjeta]', {
    scale: 0.92,
    ease: 'none',
    scrollTrigger: { trigger: '[data-cta]', start: 'top bottom', end: 'center center', scrub: 0.6 },
  })

  triggersDeLectura()
  refrescar()

  // Las fuentes cambian las medidas: recalcular cuando terminen de cargar
  document.fonts.ready.then(refrescar)
} else {
  triggersDeLectura()
}
