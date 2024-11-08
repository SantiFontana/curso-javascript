let frutas = ["banana","manzana","pera"]

console.log(frutas[1])
frutas.includes("naranja")
console.log(frutas.length)

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

console.log(frase)