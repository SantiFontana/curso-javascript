let numero = parseInt(prompt("Ingresa un número entero: "));

if (numero > 0) {
    alert("Positivo");
}
else if (numero < 0) {
    alert("Negativo");
}
else {
    alert("Neutral");
}

let lado1 = Number(prompt("Ingresa un número para el primer lado del triangulo: "));
let lado2 = Number(prompt("Ingresa un número para el segundo lado: "));
let lado3 = Number(prompt("Ingresa un número para el tercer lado: "));

if (lado1 == lado2 && lado2 == lado3 && lado1 ==lado3) {
    alert("Es un triangulo équilatero")
}
else if (lado1 != lado2 && lado2 != lado3 && lado1 !=lado3) {
    alert("Es un triangulo escaleno")
}
else {
    alert("Es isóceles")
}

alert("Ingresa tres numeros para ver cual es el mayor")

let numero1 = Number(prompt("Ingresa el primer número: "));
let numero2 = Number(prompt("Ingresa el segundo número: "));
let numero3 = Number(prompt("Ingresa el tercer número: "));

if (numero1 > numero2 && numero3) {
    alert(`${numero1} es el mayor`)
}
else if (numero2 > numero1 && numero3) {
    alert(`${numero2} es el mayor`)
}
else if (numero3 > numero1 && numero2) {
    alert(`${numero3} es el mayor`)
}
else {
    alert(`Hay numeros que tienen el mismo valor o no ingresaste un número valido`)
}