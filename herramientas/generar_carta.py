"""Escribe la carta, los sabores de shisha y los créditos de las imágenes dentro de index.html.

Uso (desde la raíz del proyecto):  python herramientas/generar_carta.py
Edita contenido/carta.json o assets/credits.json y vuelve a ejecutarlo.
"""
import json
import re
from html import escape
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
INDEX = RAIZ / "index.html"


def precio(p):
    return f"{escape(p)}&nbsp;€" if p else ""


def sabores(datos):
    out = []
    for fam in datos["familias"]:
        out.append(f'<div class="selector__familia"><h3>{escape(fam["nombre"])}</h3><ul>')
        for s in fam["sabores"]:
            notas = s["notas"] or fam["nombre"][:-1]
            out.append(
                f'<li><button type="button" class="sabor" aria-pressed="false" '
                f'data-sabor="{escape(s["nombre"])}" data-notas="{escape(s["notas"])}" data-familia="{escape(fam["nombre"])}">'
                f'<span class="sabor__nombre">{escape(s["nombre"])}</span>'
                f'<span class="sabor__notas">{escape(notas)}</span></button></li>'
            )
        out.append("</ul></div>")
    return "\n".join(out)


def carta(secciones):
    tabs, paneles = [], []
    for i, sec in enumerate(secciones):
        sid = sec["id"]
        tabs.append(
            f'<button type="button" role="tab" id="tab-{sid}" aria-controls="panel-{sid}" '
            f'aria-selected="{"true" if i == 0 else "false"}" tabindex="{0 if i == 0 else -1}">{escape(sec["nombre"])}</button>'
        )
        grupos = []
        for g in sec["grupos"]:
            nota = f'<p class="hoja__nota">{escape(g["nota"])}</p>' if g.get("nota") else ""
            items = []
            for it in g["items"]:
                nombre, pr, desc = (it + ["", ""])[:3]
                d = f"<small>{escape(desc)}</small>" if desc else ""
                items.append(f'<li><span class="hoja__plato">{escape(nombre)}{d}</span><span class="hoja__precio">{precio(pr)}</span></li>')
            grupos.append(f'<div class="hoja__grupo"><h4>{escape(g["nombre"])}</h4>{nota}<ul>{"".join(items)}</ul></div>')
        paneles.append(
            f'<div class="hoja" role="tabpanel" id="panel-{sid}" aria-labelledby="tab-{sid}">'
            f'<h3 class="hoja__titulo">{escape(sec["nombre"])}</h3>{"".join(grupos)}</div>'
        )
    lista = f'<div class="pestanas__lista" role="tablist" aria-label="Secciones de la carta" hidden>{"".join(tabs)}</div>'
    return lista + "\n" + "\n".join(paneles)


def creditos(lista):
    partes = []
    for c in lista:
        lic = "dominio público" if c["licenseCode"] in ("pd", "cc0") else c["license"]
        autor = re.sub(r"\s+", " ", c.get("creator") or "autor desconocido").strip()
        if autor.lower().startswith("unknown"):
            autor = "autor desconocido"
        partes.append(f'<a href="{escape(c["page"])}">{escape(c["title"])}</a>, {escape(autor)}, {escape(lic)}')
    return " · ".join(partes) + " (Wikimedia Commons)"


def poner(html, marca, contenido):
    patron = re.compile(rf"(<!-- {marca}:inicio -->).*?(<!-- {marca}:fin -->)", re.S)
    if not patron.search(html):
        raise SystemExit(f"Falta el marcador {marca} en index.html")
    return patron.sub(lambda m: f"{m.group(1)}\n{contenido}\n{m.group(2)}", html)


datos = json.loads((RAIZ / "contenido" / "carta.json").read_text(encoding="utf-8"))
cred = json.loads((RAIZ / "assets" / "credits.json").read_text(encoding="utf-8"))
html = INDEX.read_text(encoding="utf-8")
html = poner(html, "sabores", sabores(datos["shishas"]))
html = poner(html, "carta", carta(datos["carta"]))
html = poner(html, "creditos", creditos(cred))
INDEX.write_text(html, encoding="utf-8")
print("index.html actualizado")
