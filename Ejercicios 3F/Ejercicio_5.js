const parrafo = document.querySelector("#parrafo");

parrafo.textContent = "Este texto ha sido modificado con Javascript"
parrafo.style.color = "red"
parrafo.style.background = "yellow"

const lista = document.querySelector("#lista");

const nuevoElemento = document.createElement("li");

nuevoElemento.textContent = "Elemento 4"

lista.appendChild(nuevoElemento)

const segundoElemento = lista.children[1];
lista.removeChild(segundoElemento);

const intro = document.querySelector("#intro");
const nuevoTexto = prompt("Ingrese el nuevo texto para el párrafo:");
if (nuevoTexto) {
    intro.textContent = nuevoTexto;
}

const autor = document.querySelector("#footerP");
const nombreUsuario = prompt("Ingrese su nombre para personalizar el footer:");
if (nombreUsuario) {
    autor.textContent = nombreUsuario;
}
