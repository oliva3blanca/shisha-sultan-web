# Shisha Sultán · Web

Web de **Shisha Sultán**, gastrobar y lounge de cachimbas en Canarias.

**Web publicada:** https://oliva3blanca.github.io/shisha-sultan-web/

## Contenido

| Ruta | Qué es |
| --- | --- |
| `DESIGN.md` | Branding completo: concepto, tono, paleta, tipografías, logo, estilo visual y referencias. |
| `brand/` | Logo en SVG (vertical, horizontal, icono, nombre, favicon) en negro y oro, y la hoja de branding. |
| `brand/original/` | Logo original de Canva, como referencia. |
| `brand/propuestas/` | Variantes de la shisha que se valoraron. |
| `contenido/` | Textos reales del local (la carta extraída del PDF). |

| `index.html` · `styles.css` · `script.js` | La web. |
| `assets/` | Imágenes de archivo con licencia libre; sus créditos, en `assets/credits.json` y en el pie de la web. |
| `herramientas/generar_carta.py` | Escribe la carta, los sabores y los créditos dentro de `index.html`. |
| `capturas/` | Capturas de la web en escritorio y móvil. |

## Ver la web

Es HTML, CSS y JavaScript sin paso de compilación. Para verla en local:

```bash
python -m http.server 8000
```

y abre `http://localhost:8000`.

## Cambiar la carta

1. Edita `contenido/carta.json` (precios, platos, sabores de shisha).
2. Ejecuta `python herramientas/generar_carta.py`.

## Rellenar los datos del local

Al principio de `script.js` está el bloque `LOCAL`:

```js
const LOCAL = {
  whatsapp: "",   // solo números con prefijo, p. ej. "34600000000": activa el botón de reserva
  direccion: "",
  horario: "",
  minimo: "",     // consumición mínima por persona
  instagram: "",
};
```

Los campos vacíos se muestran como «por confirmar». Con el WhatsApp puesto, el botón «Reservar por WhatsApp» aparece solo y el mensaje incluye la shisha que el visitante eligió.

## Pendiente

Dirección, horario, WhatsApp, redes, importe de la consumición mínima y fotos propias del local. Revisar también la normativa sobre publicidad de tabaco antes de publicar. Ver «Pendiente de confirmar» en `DESIGN.md`.
