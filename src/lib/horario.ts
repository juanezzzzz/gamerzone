// Estado de apertura con la hora de Colombia. Lo usan el hero y la sección de sedes.
export type DiaHorario = { dia: number; abre: number; cierra: number; transnochon?: boolean }
/** label + hora para el número grande; corto para la franja del hero. */
export type Estado = { abierto: boolean; label: string; hora: string; corto: string }

export const formatoHora = (h: number) => `${String(h % 24).padStart(2, '0')}:00`

export function ahoraEnColombia() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' }))
}

export function estadoHoy(dias: DiaHorario[], ahora = ahoraEnColombia()): Estado {
  const h = ahora.getHours()
  const d = ahora.getDay()
  const hoy = dias.find((x) => x.dia === d)
  const ayer = dias.find((x) => x.dia === (d + 6) % 7)
  const manana = dias.find((x) => x.dia === (d + 1) % 7)

  // De madrugada todavía corre el transnochón que empezó ayer
  if (ayer && ayer.cierra > 24 && h < ayer.cierra - 24) {
    const hora = formatoHora(ayer.cierra)
    return { abierto: true, label: 'Transnochón: abierto hasta las', hora, corto: `Transnochón hasta las ${hora}` }
  }
  if (hoy && h >= hoy.abre && h < hoy.cierra) {
    const hora = formatoHora(hoy.cierra)
    if (hoy.cierra > 24) return { abierto: true, label: 'Hoy hay transnochón, hasta las', hora, corto: `Transnochón hasta las ${hora}` }
    if (hoy.cierra === 24) return { abierto: true, label: 'Abierto hoy hasta medianoche', hora, corto: 'Hasta medianoche' }
    return { abierto: true, label: 'Abierto hoy hasta las', hora, corto: `Hasta las ${hora}` }
  }
  if (hoy && h < hoy.abre) {
    const hora = formatoHora(hoy.abre)
    return { abierto: false, label: 'Hoy abrimos a las', hora, corto: `Abrimos a las ${hora}` }
  }
  if (manana) {
    const hora = formatoHora(manana.abre)
    return { abierto: false, label: 'Mañana abrimos a las', hora, corto: `Mañana a las ${hora}` }
  }
  return { abierto: false, label: 'Hoy', hora: 'Cerrado', corto: 'Hoy cerrado' }
}
