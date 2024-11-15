
const producto = {
    id: "LBM555",
    nombre: "Notebook Assus i7",
    categoria: "Tecnología",
    precio: 500,
    "descripcion": "Computadora rapida",
    componentes: {
        procesador: "Intel i7 12th",
        ram: "Kingstom"
    }
}

const { nombre, id, categoria } = producto;
const { nombre: nombreProducto, categoriaProducto } = producto;
Object.freeze(producto)
producto.memoria = [8, 16, 32]
console.log(producto.memoria)
console.log(producto.nombre)
console.log(producto["descripcion"])
delete producto.memoria
console.log(Object.entries(producto))

const inventario = [
    {nombre: "Celular", categoria: "Tecnología", precio: "300"},
    {nombre: "Mesa", categoria: "Hogar", precio: 100},
]

console.log(inventario[0]);

for (let [index, producto] of inventario.entries()) {
    console.log(`Producto ${index} : ${producto.nombre}`)
}


const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

const { Pepe, profesion = "Desconocida" } = persona;

console.log(persona)