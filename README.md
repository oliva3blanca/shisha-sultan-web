# Shisha Sultán · Web

Web de **Shisha Sultán**, gastrobar y lounge de cachimbas en La Laguna (Tenerife). Calle Heraclio Sánchez, 27 · 822 64 16 12.

**Web publicada:** https://oliva3blanca.github.io/shisha-sultan-web/

## Contenido

| Ruta | Qué es |
| --- | --- |
| `DESIGN.md` | Branding completo: concepto, tono, paleta, tipografías, logo, estilo visual y referencias. |
| `brand/` | Logo en SVG (vertical, horizontal, icono, nombre, emblema, sello, favicon) en negro y oro, y la hoja de branding. |
| `brand/original/` | Logo original de Canva, como referencia. |
| `brand/propuestas/` | Variantes de la shisha que se valoraron. |
| `contenido/` | Textos reales del local (la carta extraída del PDF). |

| `index.html` · `styles.css` · `script.js` | La web. |
| `assets/` | `imagen.svg`, la imagen blanca provisional que ocupa el sitio de las fotos. Sustitúyela por fotos del local cambiando el `src` de cada `<img>` en `index.html`. |
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

La dirección, el horario y el teléfono están escritos en `index.html`: en la sección «Dónde y cuándo», en reservas, en el pie y en los datos estructurados para Google (`application/ld+json`, en el `<head>`). Si cambian, cámbialos en esos cuatro sitios.

Lo que aún falta se rellena al principio de `script.js`, en el bloque `LOCAL`:

```js
const LOCAL = {
  whatsapp: "",   // solo números con prefijo, p. ej. "34600000000": añade el botón «Reservar por WhatsApp»
  minimo: "",     // consumición mínima, p. ej. "10 € por persona"
  instagram: "",  // usuario, con o sin @
};
```

Con el WhatsApp puesto, el botón aparece junto al de llamar y el mensaje incluye la shisha que el visitante eligió.

## Pendiente

WhatsApp, redes, importe de la consumición mínima y fotos propias del local. Revisar también la normativa sobre publicidad de tabaco antes de publicar. Ver «Pendiente de confirmar» en `DESIGN.md`.
