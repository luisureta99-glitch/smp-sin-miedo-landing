/*
 * "Así estamos en la calle" — actividad semanal.
 *
 * CÓMO ACTUALIZAR (no toca nada más del sitio):
 *   1. Sube la foto miniatura a la carpeta img/ (ej: img/actividad-04.jpg)
 *   2. Agrega o reemplaza un objeto en el array ACTIVIDADES de abajo.
 *   3. Guarda. No hace falta tocar index.html, styles.css ni main.js.
 *
 * Campos de cada objeto:
 *   foto  -> ruta a la imagen miniatura (relativa, ej: "img/actividad-04.jpg").
 *            Déjalo en null si todavía no hay foto: se muestra un ícono genérico.
 *   fecha -> formato "AAAA-MM-DD"
 *   texto -> una sola línea describiendo la actividad
 *   link  -> URL real de la publicación en Facebook/Instagram.
 *            Usa "#" mientras el post no esté publicado.
 *
 * El más reciente va primero.
 */
var ACTIVIDADES = [
  {
    foto: "img/actividad-mercado-san-antonio.png",
    fecha: "2026-07-27",
    texto: "Nuestro equipo visita el Mercado San Antonio.",
    link: "https://www.facebook.com/LuisFloresSMP"
  },
  {
    foto: "img/actividad-lanzamiento-web.png",
    fecha: "2026-07-27",
    texto: "Lanzamos nuestra página web: smpsinmiedo.com",
    link: "https://www.facebook.com/LuisFloresSMP"
  },
  {
    foto: "img/actividad-desparasitacion.png",
    fecha: "2026-07-27",
    texto: "Próxima campaña de desparasitación de mascotas.",
    link: "https://www.facebook.com/LuisFloresSMP"
  }
];
