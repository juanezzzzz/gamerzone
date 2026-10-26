// Rutas de archivos de public/ respetando la base del sitio (en GitHub Pages vive bajo /<repo>/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export const url = (ruta: string) => `${base}/${ruta.replace(/^\//, '')}`
