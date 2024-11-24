const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const boton = document.querySelector("#enviar");
const mensaje1 = document.querySelector("#mensaje1");
const mensaje2 = document.querySelector("#mensaje2");
const mensaje3 = document.querySelector("#mensaje3");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");


formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir el envío por defecto

    // Verificar que todos los campos sean válidos
    const nombreValido = nombre.value.trim().length > 0;
    const emailValido = email.value.includes("@");
    const passwordValido = password.value.length >= 8;

    if (nombreValido && emailValido && passwordValido) {
        // Mostrar mensaje de éxito
        resultado.textContent = "Formulario enviado correctamente";
        resultado.style.color = "green";

        // Limpiar los campos
        nombre.value = "";
        email.value = "";
        password.value = "";

        // Limpiar mensajes de validación
        mensaje1.textContent = "";
        mensaje2.textContent = "";
        mensaje3.textContent = "";
    } else {
        // Mostrar mensaje de error
        resultado.textContent = "Por favor, completa todos los campos correctamente";
        resultado.style.color = "red";

        // Aplicar estilos de error en cada campo inválido
        if (!nombreValido) mensaje1.textContent = "El nombre no puede estar vacío";
        if (!emailValido) mensaje2.textContent = "Email inválido";
        if (!passwordValido) mensaje3.textContent = "La contraseña debe tener al menos 8 caracteres";
    }
});

nombre.addEventListener("input", (e) => {
    const validar = e.target.value;

    if (validar.length > 0) {
        mensaje1.textContent = "Nombre válido";
        mensaje1.style.color = "green";
        nombre.style.border = "2px, solid, green"
    } else {
        mensaje1.textContent = "El nombre no puede estar vacío";
        mensaje1.style.color = "red";
        nombre.style.border = "2px, solid, red"
    }
});

email.addEventListener("change", () => {

    if (email.value.includes("@")) {
        mensaje2.textContent = "Email válido";
        mensaje2.style.color = "green";
        email.style.border = "2px, solid, green"
    } else {
        mensaje2.textContent = "Email inválido";
        mensaje2.style.color = "red";
        email.style.border = "2px, solid, red"
    }
});


password.addEventListener("input", (e) => {
    const validar = e.target.value;

    if (validar.length >= 8) {
        mensaje3.textContent = "Contraseña válida";
        mensaje3.style.color = "green";
        password.style.border = "2px, solid, green"
    } else {
        mensaje3.textContent = "La contraseña debe tener al menos 8 caracteres";
        mensaje3.style.color = "red";
        password.style.border = "2px, solid, red"
    }
});

