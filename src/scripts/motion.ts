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

// Los videos de Equipos los maneja su sección: solo corre el de la capa activa
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

/* ---------- Triggers de lectura (nav, CTA móvil) ---------- */

function triggersDeLectura() {
  const nav = $('[data-nav]')
  ScrollTrigger.create({
    start: () => window.innerHeight * 0.5,
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

  // La barra marca la sección en la que está el visitante
  $$<HTMLAnchorElement>('[data-nav] .links a').forEach((a) => {
    const destino = $(a.getAttribute('href')!)
    if (!destino) return
    ScrollTrigger.create({
      trigger: destino,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: (self) => (self.isActive ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')),
    })
  })

  // CTA móvil: se esconde donde ya hay botón
  const mobileCta = $('[data-mobile-cta]')
  if (mobileCta) {
    const zonas = ['[data-hero]', '[data-vip]', '[data-cta]']
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

  // Hero: entra cuando termina la intro; el video arranca un poco más cerca y se asienta
  const entradaHero = gsap
    .timeline({ paused: true, defaults: { ease: 'expo.out' } })
    .from('[data-hero-fondo] video', { scale: 1.08, duration: 2.4 }, 0)
    .from('[data-hero-pieza]', { opacity: 0, y: 28, duration: 1.1, stagger: 0.09 }, 0.1)
  if (root.dataset.introFin !== undefined) entradaHero.play()
  else document.addEventListener('gz:intro-fin', () => entradaHero.play(), { once: true })

  // Hero: al bajar, el fondo se queda atrás y el contenido se va
  gsap
    .timeline({ scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: 0.4 } })
    .to('[data-hero-fondo]', { yPercent: 18, ease: 'none' }, 0)
    .to('[data-hero-contenido]', { opacity: 0, y: -40, ease: 'none', duration: 0.5 }, 0)

  // Precios: la carta sube y se abre desde el centro
  gsap.from('[data-carta]', {
    y: 56,
    opacity: 0,
    clipPath: 'inset(0% 6% 0% 6% round 28px)',
    duration: 1.2,
    ease: 'expo.out',
    scrollTrigger: { trigger: '[data-carta]', start: 'top 88%', once: true },
  })

  // Equipos: en escritorio la sección se fija y el scroll recorre los pasos
  mm.add(desktop, () => {
    const seccion = $('[data-equipos]')!
    const pasos = $$('[data-paso]', seccion).length
    let actual = 0
    seccion.dataset.pin = ''
    const pin = ScrollTrigger.create({
      trigger: seccion,
      start: 'top top',
      end: () => `+=${window.innerHeight * 0.42 * pasos}`,
      pin: '[data-equipos-pin]',
      onUpdate: (self) => {
        const paso = Math.min(pasos - 1, Math.floor(self.progress * pasos))
        if (paso === actual) return
        actual = paso
        seccion.dispatchEvent(new CustomEvent('gz:paso', { detail: paso }))
      },
    })
    const ir = (e: Event) => {
      const paso = (e as CustomEvent<number>).detail
      lenis.scrollTo(pin.start + ((paso + 0.5) / pasos) * (pin.end - pin.start), { duration: 0.9 })
    }
    seccion.addEventListener('gz:ir-paso', ir)
    return () => {
      delete seccion.dataset.pin
      seccion.removeEventListener('gz:ir-paso', ir)
    }
  })

  // VIP: la sala crece desde una ventana central y el contenido sube.
  // Se fija solo en escritorio: en vertical el contenido puede ser más alto que la pantalla
  const salaVip = (scrollTrigger: ScrollTrigger.Vars) => gsap
    .timeline({ scrollTrigger })
    .to('[data-vip-ventana]', { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'power2.inOut', duration: 1 }, 0)
    .to('[data-vip-ventana] img', { scale: 1, ease: 'none', duration: 1 }, 0)
    // Primero se ve la sala; luego baja la sombra y aparece la información
    .from('[data-vip-sombra]', { opacity: 0, ease: 'none', duration: 0.5 }, 0.1)
    // El botón y la nota solo aparecen: si también subieran, la cascada los cruzaría
    .from('[data-vip-contenido] > :not(.btn):not(.nota)', { opacity: 0, y: 30, stagger: 0.04, duration: 0.4, ease: 'power2.out' }, 0.4)
    .from('[data-vip-contenido] > :is(.btn, .nota)', { opacity: 0, duration: 0.3, ease: 'power2.out' }, 0.65)
  mm.add(desktop, () => {
    salaVip({ trigger: '[data-vip]', start: 'top top', end: '+=70%', pin: '[data-vip-escena]', scrub: 0.6, invalidateOnRefresh: true })
  })
  mm.add('(max-width: 64rem)', () => {
    salaVip({ trigger: '[data-vip]', start: 'top 75%', end: 'top 5%', scrub: 0.6 })
  })

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

  // Comodidades: la foto se mueve más despacio que la página
  gsap.fromTo(
    '[data-comodidades-foto]',
    { yPercent: -6 },
    { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '[data-comodidades]', start: 'top bottom', end: 'bottom top', scrub: true } }
  )

  triggersDeLectura()
  refrescar()

  // Las fuentes cambian las medidas: recalcular cuando terminen de cargar
  document.fonts.ready.then(refrescar)
} else {
  triggersDeLectura()
}
