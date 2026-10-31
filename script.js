/* Shisha Sultán · comportamiento de la web */

/* ===== DATOS DEL LOCAL =====
   Dirección, horario y teléfono están escritos en index.html (sección «Dónde y cuándo», reservas y pie).
   Rellena estos campos cuando los tengas; si están vacíos no se muestra nada nuevo.
   whatsapp: solo números con prefijo de país, sin espacios ni «+». Ejemplo: "34600000000".
   minimo: importe de la consumición mínima, por ejemplo "10 € por persona". */
const LOCAL = {
  whatsapp: "",
  minimo: "",
  instagram: "",
};

document.documentElement.classList.add("js");
const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ----- datos del local en la página ----- */
for (const campo of ["minimo"]) {
  const valor = LOCAL[campo].trim();
  if (!valor) continue;
  document.querySelectorAll(`[data-local="${campo}"]`).forEach((el) => { el.textContent = valor; });
}
if (LOCAL.instagram.trim()) {
  const usuario = LOCAL.instagram.trim().replace(/^@/, "");
  document.querySelectorAll('[data-local="redes"]').forEach((el) => {
    el.innerHTML = "";
    const a = document.createElement("a");
    a.href = `https://instagram.com/${encodeURIComponent(usuario)}`;
    a.textContent = `Instagram @${usuario}`;
    el.append(a);
  });
}

/* ----- elige tu shisha ----- */
const CLAVE = "shisha-sultan:sabor";
const botones = [...document.querySelectorAll(".sabor")];
const ficha = document.querySelector("[data-ficha]");
const fichaNombre = document.querySelector("[data-ficha-nombre]");
const fichaNotas = document.querySelector("[data-ficha-notas]");
const fichaFamilia = document.querySelector("[data-ficha-familia]");
const reservaSabor = document.querySelector("[data-reserva-sabor]");
const reservaEstado = document.querySelector("[data-reserva-estado]");
const reservaBoton = document.querySelector("[data-reserva-boton]");

function singular(familia) {
  return familia.endsWith("s") ? familia.slice(0, -1) : familia;
}

function elegir(boton, guardar = true) {
  botones.forEach((b) => b.setAttribute("aria-pressed", String(b === boton)));
  const { sabor, notas, familia } = boton.dataset;
  fichaNombre.textContent = sabor;
  fichaNotas.textContent = notas || `${singular(familia)} de siempre`;
  fichaFamilia.textContent = singular(familia);
  if (!reducido) {
    ficha.classList.remove("cambia");
    requestAnimationFrame(() => requestAnimationFrame(() => ficha.classList.add("cambia")));
  }
  reservaSabor.textContent = sabor;
  actualizarReserva(sabor);
  if (guardar) {
    try { localStorage.setItem(CLAVE, sabor); } catch (e) { /* sin almacenamiento: no pasa nada */ }
  }
}

function actualizarReserva(sabor) {
  const numero = LOCAL.whatsapp.replace(/\D/g, "");
  if (!numero) return;
  const texto = `Hola, quiero reservar en Shisha Sultán${sabor ? ` con una shisha ${sabor}` : ""}. Somos … personas, el día … a las …`;
  reservaBoton.href = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  reservaBoton.hidden = false;
  reservaBoton.target = "_blank";
  reservaBoton.rel = "noopener";
  reservaEstado.textContent = "Escríbenos por WhatsApp y te confirmamos la mesa.";
}

botones.forEach((b) => b.addEventListener("click", () => elegir(b)));

let guardado = null;
try { guardado = localStorage.getItem(CLAVE); } catch (e) { guardado = null; }
const inicial = botones.find((b) => b.dataset.sabor === guardado) || botones.find((b) => b.dataset.sabor === "Love 66") || botones[0];
if (inicial) elegir(inicial, false);
if (!guardado) reservaSabor.textContent = "elige tu sabor";
actualizarReserva(guardado || "");

/* ----- pestañas de la carta ----- */
const lista = document.querySelector(".pestanas__lista");
if (lista) {
  const tabs = [...lista.querySelectorAll('[role="tab"]')];
  const paneles = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));
  lista.hidden = false;

  function activar(i, foco = false) {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      paneles[j].hidden = !on;
    });
    if (foco) tabs[i].focus();
  }
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => activar(i));
    t.addEventListener("keydown", (e) => {
      const n = tabs.length;
      if (e.key === "ArrowRight") { e.preventDefault(); activar((i + 1) % n, true); }
      if (e.key === "ArrowLeft") { e.preventDefault(); activar((i - 1 + n) % n, true); }
      if (e.key === "Home") { e.preventDefault(); activar(0, true); }
      if (e.key === "End") { e.preventDefault(); activar(n - 1, true); }
    });
  });
  activar(0);
}



/* ----- entradas: título, luego texto, luego imagen ----- */
const piezas = document.querySelectorAll(
  ".lectura .titulo, .shishas .titulo, .donde .titulo, .entradilla, .selector__familia, .ficha, .shishas__foto, .pestanas, .datos div, .reservas__arriba, .reservas__titulo, .pie__nombre"
);
const vistos = new IntersectionObserver((entradas) => {
  entradas.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("visto");
    vistos.unobserve(en.target);
  });
}, { rootMargin: "0px 0px -8% 0px" });

piezas.forEach((el) => {
  el.dataset.entra = "";
  el.style.setProperty("--i", String(Math.min([...el.parentElement.children].indexOf(el), 6)));
  vistos.observe(el);
});

/* ----- animación de entrada ----- */
(function intro() {
  const raizHtml = document.documentElement;
  if (!raizHtml.classList.contains("intro-pendiente")) return;
  const marca = document.querySelector(".barra .emblema");
  if (!marca || !("animate" in Element.prototype)) { raizHtml.classList.remove("intro-pendiente"); return; }

  const capa = document.createElement("div");
  capa.className = "intro";
  capa.setAttribute("aria-hidden", "true");
  const fondo = document.createElement("div");
  fondo.className = "intro__fondo";
  const svg = marca.cloneNode(true);
  capa.append(fondo, svg);
  document.body.append(capa);
  raizHtml.classList.add("intro-activa");
  raizHtml.classList.remove("intro-pendiente");

  const n = (k) => Number(svg.dataset[k]);
  const W = n("w"), H = n("h"), hc = n("hc");
  const vista = window.visualViewport;
  const vw = vista ? vista.width : document.documentElement.clientWidth;
  const vh = vista ? vista.height : window.innerHeight;
  svg.style.width = `${W}px`;
  svg.style.height = `${H}px`;
  const ancho = Math.min(vw * 0.86, 1000);
  const k = ancho / W;
  const y = (vh - H * k) / 2;
  // ancho del grupo compacto S · cachimba · S, para que quepa entero en pantallas estrechas
  const sw = svg.querySelector(".e-s1").getBBox().width;
  const anchoCompacto = svg.querySelector(".e-cachimba").getBBox().width + 2 * sw * 1.12;
  const kGrande = Math.max(k, Math.min(k * 1.9, (vh * 0.42) / H, (vw * 0.84) / anchoCompacto));
  // la cachimba siempre en el centro de la pantalla
  const enCentro = (escala) => `translate(${vw / 2 - hc * escala}px, ${vh / 2 - (H * escala) / 2}px) scale(${escala})`;
  const xCentro = (vw - ancho) / 2;
  const destino = marca.getBoundingClientRect();
  const kDestino = destino.width / ancho;

  const T = 2600;
  const sale = "cubic-bezier(0.22, 1, 0.36, 1)";
  const viaje = "cubic-bezier(0.76, 0, 0.24, 1)";
  const pieza = (sel) => svg.querySelector(sel);
  const anims = [];
  const animar = (el, frames) => anims.push(el.animate(frames, { duration: T, fill: "both" }));
  const tx = (x, extra = "") => `translate(${x}px, 0px)${extra}`;

  // 1. una S en el centro · 2. se desdobla · 4. se abre hasta su sitio
  const s1 = n("dxs1"), s1c = n("dx1c"), s2 = n("dxs2"), s2c = n("dx2c");
  animar(pieza(".e-s1"), [
    { offset: 0, opacity: 0, transform: tx(s1, " scale(0.82)"), easing: sale },
    { offset: 0.14, opacity: 1, transform: tx(s1) },
    { offset: 0.15, transform: tx(s1), easing: sale },
    { offset: 0.31, transform: tx(s1c) },
    { offset: 0.46, transform: tx(s1c), easing: sale },
    { offset: 0.65, transform: tx(0) },
    { offset: 1, opacity: 1, transform: tx(0) },
  ]);
  animar(pieza(".e-s2"), [
    { offset: 0, opacity: 0, transform: tx(s2) },
    { offset: 0.15, opacity: 0, transform: tx(s2), easing: sale },
    { offset: 0.31, opacity: 1, transform: tx(s2c) },
    { offset: 0.46, transform: tx(s2c), easing: sale },
    { offset: 0.65, transform: tx(0) },
    { offset: 1, opacity: 1, transform: tx(0) },
  ]);
  // 3. la cachimba aparece en medio
  animar(pieza(".e-cachimba"), [
    { offset: 0, opacity: 0, transform: "translate(0px, 14px) scale(0.9)" },
    { offset: 0.29, opacity: 0, transform: "translate(0px, 14px) scale(0.9)", easing: sale },
    { offset: 0.41, opacity: 1, transform: "translate(0px, 0px) scale(1)" },
    { offset: 1, opacity: 1, transform: "translate(0px, 0px) scale(1)" },
  ]);
  // 4. de cada S brota el resto de su palabra
  for (const sel of [".e-r1", ".e-r2"]) {
    animar(pieza(sel), [
      { offset: 0, opacity: 0, transform: "translate(-28px, 0px)" },
      { offset: 0.52, opacity: 0, transform: "translate(-28px, 0px)", easing: sale },
      { offset: 0.69, opacity: 1, transform: "translate(0px, 0px)" },
      { offset: 1, opacity: 1, transform: "translate(0px, 0px)" },
    ]);
  }
  // 5. todo el logotipo se centra y luego vuela a la barra
  anims.push(svg.animate([
    { offset: 0, transform: enCentro(kGrande) },
    { offset: 0.4, transform: enCentro(kGrande), easing: sale },
    { offset: 0.46, transform: enCentro(k), easing: sale },
    { offset: 0.65, transform: `translate(${xCentro}px, ${y}px) scale(${k})` },
    { offset: 0.71, transform: `translate(${xCentro}px, ${y}px) scale(${k})`, easing: viaje },
    { offset: 0.94, transform: `translate(${destino.left}px, ${destino.top}px) scale(${k * kDestino})` },
    { offset: 1, transform: `translate(${destino.left}px, ${destino.top}px) scale(${k * kDestino})` },
  ], { duration: T, fill: "both" }));
  anims.push(fondo.animate([
    { offset: 0, opacity: 1 }, { offset: 0.71, opacity: 1, easing: sale }, { offset: 0.88, opacity: 0 }, { offset: 1, opacity: 0 },
  ], { duration: T, fill: "both" }));

  let terminado = false;
  function terminar() {
    if (terminado) return;
    terminado = true;
    capa.remove();
    raizHtml.classList.remove("intro-activa");
    try { sessionStorage.setItem("shisha-sultan:intro", "1"); } catch (e) { /* sin almacenamiento */ }
    window.removeEventListener("keydown", saltar);
  }
  function saltar() { anims.forEach((a) => a.finish()); terminar(); }
  anims[anims.length - 1].finished.then(terminar, terminar);
  capa.addEventListener("click", saltar);
  window.addEventListener("keydown", saltar);
})();
