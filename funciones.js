
//Función con return

function saludar(){

    let respuesta = prompt("¿Hola, como estas?");
    if (respuesta == "bien") {
        alert("me alegro")
    } else {
        alert("una pena")
    } return "la función se ejecutó correctamente";

}

let saludo = saludar()

document.write(saludo + "<br>")

//Parametros

function suma(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}

suma(12,32)

//Funciones flecha

const saludito = (nombre) => document.write("Hola como estas? " + nombre)

saludito("Santiago")