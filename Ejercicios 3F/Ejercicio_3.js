const inventario = [
    {nombre: "Laptop", categoria: "Tecnología", precio: 800},
    {nombre: "Mesa", categoria: "Hogar", precio: 100},
    {nombre: "Celular", categoria: "Tecnología", precio: 500},
    {nombre: "Silla", categoria: "Hogar", precio: 50},
]

//1.Recorrer el inventario

for (let i = 0; i < inventario.length; i++){
    if (inventario[i].categoria === "Tecnología") {
        console.log(inventario[i])
    }
}

//2. 
let totalHogar = 0;

for (let i = 0; i < inventario.length; i++){
    if (inventario[i].categoria === "Hogar") {
        totalHogar = totalHogar + inventario[i].precio;
    }
}

console.log(totalHogar)