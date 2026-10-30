/* Shisha Sultán · comportamiento de la web */

/* ===== DATOS DEL LOCAL =====
   Rellena estos campos cuando los tengas. Los vacíos se muestran como «por confirmar».
   whatsapp: solo números con prefijo de país, sin espacios ni «+». Ejemplo: "34600000000". */
const LOCAL = {
  whatsapp: "",
  direccion: "",
  horario: "",
  minimo: "",
  instagram: "",
};

document.documentElement.classList.add("js");
const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ----- datos del local en la página ----- */
for (const campo of ["direccion", "horario", "minimo"]) {
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
    void ficha.offsetWidth;
    ficha.classList.add("cambia");
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

/* ----- la foto fija cambia con la sección ----- */
const fotoLectura = document.querySelector(".escena__foto--lectura");
if (fotoLectura) {
  const fotos = [...fotoLectura.querySelectorAll("img")];
  const pie = fotoLectura.querySelector("[data-pie]");
  const pies = ["Un café otomano, pintura de hacia 1560", "Sala rococó del harén, palacio de Topkapı"];
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (!en.isIntersecting) return;
      const i = Number(en.target.dataset.foto);
      fotos.forEach((f, j) => f.classList.toggle("activa", i === j));
      pie.textContent = pies[i];
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  document.querySelectorAll("[data-foto]").forEach((s) => obs.observe(s));
}

/* ----- galería: un marco, el contenido cambia ----- */
const marco = document.querySelector("[data-marco]");
if (marco) {
  const imgs = [...marco.querySelectorAll("img")];
  const pieMarco = marco.querySelector("[data-marco-pie]");
  let actual = 0;
  let reloj = null;

  function mostrar(i) {
    actual = (i + imgs.length) % imgs.length;
    imgs.forEach((im, j) => im.classList.toggle("activa", j === actual));
    pieMarco.textContent = imgs[actual].dataset.pie;
  }
  function arrancar() {
    if (reducido || reloj) return;
    reloj = setInterval(() => mostrar(actual + 1), 3000);
  }
  function parar() { clearInterval(reloj); reloj = null; }

  marco.querySelector("[data-marco-siguiente]").addEventListener("click", () => { parar(); mostrar(actual + 1); arrancar(); });
  new IntersectionObserver(([en]) => (en.isIntersecting ? arrancar() : parar())).observe(marco);
  document.addEventListener("visibilitychange", () => (document.hidden ? parar() : arrancar()));
}

/* ----- entradas: título, luego texto, luego imagen ----- */
const piezas = document.querySelectorAll(
  ".lectura .titulo, .shishas .titulo, .galeria .titulo, .abrimos .titulo, .entradilla, .selector__familia, .ficha, .shishas__foto, .pestanas, .carta-bienvenida p, .marco, .datos div, .reservas__arriba, .reservas__titulo, .pie__nombre"
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
