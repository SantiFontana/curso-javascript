//Ejercicio 1

// for (let i = 1; i <= 10; i++) {

//     console.log(i)
// }


//Ejercicio 2

// acumulador = 0

// for (let n = 5; n <= 10; n++) {
//     acumulador = acumulador + n;
// }

// console.log("La suma de los números del 5 al 10 es:", acumulador);


//Ejercicio 3

// numeroParaRestar = 10

// do {
//     document.write(numeroParaRestar + "<br>");
//     numeroParaRestar--;
// }
// while (numeroParaRestar > 0);

// document.write("¡Despegue!")


// Ejercicio 4

// contador = 0;
// contador2 = 0;

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         contador++;
//     } else {
//         contador2++;
//     }
// }

// console.log(`La cantidad de numeros pares entre 1 y 20 es ${contador}`)
// console.log(`La cantidad de numeros impares entre 1 y 20 es ${contador2}`)


//Ejercicio 5

// let n = 12;
// let contador = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         contador++;
//     }
// }

// console.log(`El número ${n} tiene ${contador} divisores.`);


// Ejercicio 6

// let n = 5;

// console.log(`Tabla de multiplicar de ${n} (de 10 a 1):`);
// for (let i = 10; i >= 1; i--) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }

// console.log(`\nTabla de multiplicar de ${n} (de 1 a 10):`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }


//Ejercicio 7

let n = 15;
acumuladorPares = 0;
acumuladorImpares = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        acumuladorPares += i;
    } else {
        acumuladorImpares += i;
    }
}

console.log(`La suma de numeros pares entre 1 y 20 es ${acumuladorPares}`)
console.log(`La suma de numeros impares entre 1 y 20 es ${acumuladorImpares}`)

