let frutas = ["banana","manzana","pera"]

document.write(frutas[1])


//Arrays asociativos

let pc = {
    nombre: "SantiagoPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio = pc["espacio"]

let frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
            el procesador es: <b>${procesador}</b> <br>
            la memoria ram es: <b>${ram}</b> <br>
            el espacio en disco es: <b>${espacio}</b> <br>` 

document.write(frase)