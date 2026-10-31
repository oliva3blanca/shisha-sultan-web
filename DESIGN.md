---
version: 2.0-borrador
name: Shisha Sultán
description: Branding de Shisha Sultán, gastrobar y lounge de cachimbas en La Laguna (Tenerife), construido a partir de su logo existente. Negro y oro, la cachimba de línea como símbolo y el rombo capitoné como único motivo.
colors:
  negro: "#0c0a07"
  superficie: "#1a160f"
  oro: "#d4a830"
  oro-claro: "#e4ba54"
  marfil: "#e7e5e2"
  tabaco: "#3a2c08"
typography:
  display:
    fontFamily: Imbue
    fontWeight: 500
    opticalSize: auto
    letterSpacing: -0.01em
    lineHeight: 0.9
  text:
    fontFamily: Albert Sans
    fontWeight: 400
    emphasisWeight: 500
    lineHeight: 1.55
radius: 0
---

# Shisha Sultán · DESIGN.md

> Construido **a partir del logo existente, sin modificarlo**. El logo manda: la paleta, el motivo y la tipografía salen de él.

## 1. Concepto y personalidad

**Shisha Sultán es un gastrobar canario con alma de salón otomano: buena cachimba, buena mesa y buena copa, en una noche que se trata como un lujo.** El negro y el oro del logo marcan el tono: elegante y nocturno, pero cercano, de los que te hacen sentir en casa desde la primera brasa. Lujoso sin ser estirado, moderno sin perder lo clásico, y con ganas de pasarlo bien.

**El motivo:** el **rombo capitoné** que acolcha el fondo del logo y de la carta, como el tapizado de un diván. Es el único adorno de la marca y siempre se dibuja plano, con dos tonos de negro o dos de oro y sin brillos.

### Tono de voz

- **De tú, cálido y con un punto de ceremonia en broma.** El sultán invita: «Pasa, siéntate, el diván es tuyo».
- **Concreto y canario:** platos, sabores y precios reales, con su nombre (barraquito, quesillo, papas sultán).
- **Frases cortas y verbos claros:** «Reserva tu mesa», no «Vive una experiencia única».
- **Sin tópicos:** nada de «viaje sensorial», «déjate envolver» ni «experiencia premium».
- **Responsable:** solo mayores de 18. Se habla del ambiente, los sabores y la compañía, sin incitar al consumo.

| En lugar de… | Decimos… |
| --- | --- |
| «Una experiencia única de shisha» | «Dieciocho euros, tu sabor y toda la noche por delante» |
| «Contáctanos para más información» | «Escríbenos y te guardamos el diván» |
| «Los mejores cócteles» | «Mojitos de seis sabores y un Cóctel Sultán que no está en ninguna otra carta» |

## 2. Logo

El logo original se hizo en Canva. Para la web:

- **El nombre** «Shisha Sultán» es el del logo original, vectorizado con potrace a partir de los JPG, **sin redibujarlo**.
- **La shisha** es la del logo original, vectorizada sin cambios (se probaron dos versiones redibujadas, pero el cliente prefirió la forma original). Se usa igual en todas las versiones: logo, sello, emblema de la barra y favicon.

| Versión | Archivos | Uso |
| --- | --- | --- |
| **Vertical** (shisha + nombre en dos líneas) | `brand/logo-vertical-negro.svg` · `-oro.svg` | Versión principal: portada, carteles, redes |
| **Shisha + nombre en una línea** | `brand/logo-icono-nombre-negro.svg` · `-oro.svg` | Cartas, vasos, piezas apaisadas |
| **Shisha** (icono) | `brand/logo-icono-negro.svg` · `-oro.svg` | Avatar, sellos pequeños |
| **Favicon** | `brand/favicon.svg` | Shisha original en oro sobre negro |
| **Nombre** (solo letras) | `brand/logo-nombre-negro.svg` · `-oro.svg` | Pie de la web |
| **Emblema** (Shisha · cachimba · Sultán) | `brand/emblema-oro.svg` | Barra de navegación de la web, y la animación de entrada |
| **Sello** (S · cachimba · S) | `brand/sello-oro.svg` | Monograma para redes, vasos, sellos |
| Originales | `brand/original/*.jpg` · `sello-gastrobar.png` | Referencia del logo de Canva. El sello circular «Gastrobar» solo existe a 225 px. |
| Propuestas | `brand/propuestas/` | Dos versiones redibujadas de la shisha que se valoraron y se descartaron |

**Reglas:**
- Negro sobre oro, o oro claro sobre negro. Nunca sobre fotos sin un fondo liso detrás.
- No se deforma, no se recolorea con otros colores y no lleva sombras ni brillos.
- Margen libre alrededor igual a la altura de la cazoleta de la cachimba.
- Tamaño mínimo: 120 px de ancho la versión horizontal y 24 px el icono.
- El degradado dorado del logo impreso se reproduce en la web como **oro plano**. Es la misma marca, adaptada a pantalla.

## 3. Paleta de colores

Colores medidos en los archivos del logo.

| Rol | Nombre | HEX | Uso |
| --- | --- | --- | --- |
| Fondo principal | **Negro** | `#0c0a07` | Negro cálido, como el del logo. Domina la web. |
| Superficie | **Superficie** | `#1a160f` | Un escalón de tono sobre el negro para separar zonas, sin líneas. |
| Principal / acción | **Oro** | `#d4a830` | El color del logo: botón principal y campos dorados a pantalla completa. |
| Títulos sobre negro | **Oro claro** | `#e4ba54` | Títulos y logo sobre negro, igual que en el logo horizontal. |
| Texto sobre negro | **Marfil** | `#e7e5e2` | Todo el texto corrido sobre negro y el papel de la carta. Es un tono piedra neutro, sin amarillear. |
| Texto secundario sobre oro | **Tabaco** | `#3a2c08` | Notas y descripciones sobre los campos dorados. |

**Proporciones:** negro ~65 %, oro ~25 % (en campos completos: carta de shishas, reservas), marfil ~10 %. El oro aparece en la acción y en grandes superficies, nunca en detalles sueltos por todas partes.

**Contraste (WCAG):**

| Combinación | Contraste |
| --- | --- |
| Marfil sobre negro | 15,7:1 |
| Oro claro sobre negro | 10,8:1 |
| Negro sobre oro | 8,9:1 |
| Tabaco sobre oro | ≈ 6,2:1 |

Todas cumplen AA.

**Prohibido:** degradados dorados en la interfaz (el oro es plano), brillos y *glow*, violeta y neón (aunque las fotos de la carta impresa los usen, la web no los usa), y las sombras en reposo.

## 4. Tipografías

El logotipo es una imagen y no se reescribe con ninguna fuente. Para el resto de la web:

| Rol | Fuente | Pesos | Ajustes |
| --- | --- | --- | --- |
| Títulos | **Imbue** (Google Fonts, OFL) | 500 | Tamaño óptico automático, tracking −0,01 em, interlineado 0,9 |
| Texto | **Albert Sans** (Google Fonts, OFL) | 400 · 500 | Interlineado 1,55, cifras tabulares en precios |

**Por qué:** la letra del logo es una serif estrecha y alta con remates caligráficos, hecha en Canva. No coincide con ninguna fuente libre (he comparado más de 20). Imbue tiene sus mismas proporciones altas y estrechas y el aire de rótulo de fachada, así que acompaña al logo sin competir con él. Albert Sans da una lectura limpia a la carta, que es larga.

La carta impresa usa Bebas Neue y Oswald. Se mantienen para piezas de imprenta si quieres, pero en la web no se usan.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,500&family=Albert+Sans:wght@400;500&display=swap" rel="stylesheet">
```

**Escala (cinco pasos):**

```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);  /* 13–14px, nunca menos */
  --step-body:  clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);      /* 17–20px */
  --step-lead:  clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head:  clamp(2.25rem, 1.4rem + 4vw, 5rem);
  --step-display: clamp(4rem, 13vw, 15rem);
}
```

Todo alineado a la izquierda. Titulares de dos líneas como máximo.

## 5. Estilo visual

**Formas.** Esquinas rectas en todo (radio 0): botones, fotos y paneles. El rombo es la única forma geométrica añadida.

**El motivo capitoné.** Una retícula de rombos girados 45°, dibujada plana con dos tonos muy cercanos (negro y superficie, u oro y oro claro). Aparece como banda de 56 px en la cabecera de la tarjeta de portada, en el fondo del campo dorado de la carta de shishas y en una banda de 8 px sobre el pie. No se usa en ningún otro sitio.

**Espaciado.** Un único par de márgenes exteriores (12 px en móvil, 24–32 px en escritorio). Entre secciones, 120–240 px en escritorio. Las zonas se separan con saltos de tono, nunca con líneas finas.

**Composición** (dirección de Taste Skill, *split-stage*). Una mitad fija con una imagen que no se mueve mientras la otra mitad, la de lectura, se desplaza, como si estuvieras sentado en la sala leyendo la carta. Al menos una sección rompe el reparto y ocupa todo el ancho, y cada sección se compone distinto de la anterior.

**Imágenes**, por orden de preferencia:
1. **Fotos propias del local:** sala, divanes, cachimbas preparadas, platos de la carta, cócteles. Son lo más valioso; en cuanto existan, sustituyen a todo lo demás.
2. **Archivo histórico con licencia libre** (Wikimedia Commons, museos): nargiles otomanas, cafés de Estambul, azulejos, siempre con crédito y nunca presentadas como si fueran el local.
3. **Dibujos en la línea del icono:** trazo grueso redondeado y plano, en oro sobre negro.

Tratamiento: luz cálida, sombras profundas y encuadre vertical 4:5 en la mitad fija.

**Se evita:** las fotos de *stock* de la carta impresa (licencia desconocida), el humo violeta o neón, los modelos posando y las bocanadas en primer plano.

**Iconos.** Solo funcionales (menú, cerrar, mapa, teléfono), con el mismo trazo redondeado del icono del logo y sin cuadraditos de color detrás. Nada de emojis.

**Componentes.**
- **Botón principal:** bloque plano de oro, texto negro en Albert Sans 500 y esquinas rectas. Al pasar el ratón pasa a oro claro, y el foco se marca con un contorno de 3 px en marfil.
- **Botón secundario:** texto marfil subrayado. Sin botones fantasma con borde.
- **Navegación:** barra simple con el logo horizontal en oro claro, cinco enlaces (Shishas, Carta, Cócteles, La casa, Reservas) y un botón «Reservar».
- **Carta:** hojas limpias por familia (shishas, tés, cócteles, picoteo, postres, cervezas, destilados), con el nombre a la izquierda, el precio a la derecha en cifras tabulares y la descripción en una línea debajo. Sin líneas de puntos.
- **Contacto:** el correo o el teléfono como gran texto de display sobre un campo de oro.
- **Pie:** el logotipo a todo lo ancho, en oro claro sobre negro.

**Movimiento.** Animación de entrada la primera vez por visita: aparece una S, se desdobla, en medio aparece la cachimba, cada S brota en su palabra («Shisha», «Sultán») y el emblema vuela a la barra (unos 2,6 s, se salta con clic o tecla). Además, entrada escalonada de títulos y textos y respuesta en cada control. Solo `transform` y `opacity`, con alternativa para `prefers-reduced-motion`.

**Prohibido (Taste Skill):** etiquetas pequeñas sobre los títulos, monoespaciadas, numeración 01/02/03, líneas finas, degradados, sombras en reposo, filas de tarjetas idénticas con icono, cristal y emojis.

## 6. Marca de referencia: Lamborghini (awesome-design-md)

Referencia: `~/.claude/references/awesome-design-md/design-md/lamborghini/DESIGN.md`. Lamborghini es negro absoluto con el oro como único color, reservado a la acción.

**Qué tomamos:**
- **El negro como escenario:** la página es casi entera negra y los elementos salen de ella como bajo un foco.
- **El oro solo para actuar:** el botón principal es oro y el oro no se gasta en adornos. Su oro de pulsación oscurecido inspira nuestro paso de oro a oro claro.
- **Rectángulos sin redondeo:** botones y fotos de esquinas rectas, firmes.
- **Imagen a gran tamaño:** fotografía protagonista y oscura, con el texto mínimo encima.

**Qué no tomamos:** su tipografía en mayúsculas de palo seco, sus etiquetas diminutas, los botones fantasma con borde, los hexágonos y nada de su identidad. Nuestro oro es el del logo (`#d4a830`), no el suyo (`#FFC000`).

## 7. Dirección de Taste Skill

- Dirección: **split-stage** (*La escena partida*), semilla `13541316`.
- Paleta y tipografía: **fijadas por la marca existente** (caso «marca existente» de Taste Skill). Sustituyen a las que salieron en el reparto.
- **Idea:** *en esta web, el capitoné del logo, el diván donde te sientas, se convierte en la tarjeta de la portada y en el campo dorado de la carta de shishas.*
- **Lo interactivo:** «Elige tu shisha». Eliges entre los 12 sabores reales de la carta (clásicas, afrutadas, críticas), ves sus ingredientes y el precio (18 €), y la elección se añade a tu petición de reserva.

## 8. Contenido real disponible

- La carta completa, con precios, extraída del PDF: `contenido/carta-extraida.txt`. Incluye shishas (18 €, 12 sabores), suplemento de cambio de cazoleta (8 €), tés, infusiones, cócteles con y sin alcohol, picoteo, postres, cervezas, vinos, destilados y café, más el aviso de «Consumición mínima por persona».

## 9. Datos del local

Tomados de su ficha de Google Maps (https://maps.app.goo.gl/E8HLa1wCTCPhyPnT7):

- **Dirección:** Calle Heraclio Sánchez, 27, 38204 San Cristóbal de La Laguna (Santa Cruz de Tenerife), en el Centro Comercial Galaxia.
- **Teléfono:** 822 64 16 12.
- **Horario:** de domingo a jueves, de 18:00 a 24:00; viernes y sábado, de 18:00 a 2:00.

## 10. Pendiente de confirmar

- Nombre de la fuente del logo en Canva (opcional; el nombre ya está vectorizado).
- **Importe de la consumición mínima** por persona (la carta no lo indica). Se rellena en `LOCAL.minimo` de `script.js`.
- **WhatsApp e Instagram**, si los hay. Se rellenan en el bloque `LOCAL` de `script.js`.
- **Normativa:** el aviso de +18 y las reglas sobre publicidad de productos de tabaco en Canarias y España. Conviene que lo revise alguien que las conozca antes de publicar.
- **Fotos propias del local**, cuando las haya.
