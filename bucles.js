
//Bucle While
let numeroParaSumar = 0;

while (numeroParaSumar < 6) {

    numeroParaSumar++;
    document.write(numeroParaSumar + "<br>")
}

//Bucle do while

do {
    document.write(numeroParaSumar + "<br>");
    numeroParaSumar++
}

while (numeroParaSumar > 6)

//Break

while (numeroParaSumar < 100) {
    numeroParaSumar++;
    document.write(numeroParaSumar);
    if (numeroParaSumar == 10) {
        break;
    }
} 

//Sentencia for y continue

for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        continue
    }

    document.write(i + "<br>")
}


//Sentencias for in/of

let animales = ["gato", "perro", "tiranosaurio rex"]

for (animal in animales){
    document.write(animal + "<br>")
}

    document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>")
}

//Labels

let array1 = ["Maria","Josefa","Roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];

forTopo:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
            break forTopo;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

// Ejemplo
let numero = 7;
let intento = 0;
let encontrado = false;
let totalIntentos = 3;

while(intento < totalIntentos){
    let n = prompt(`Ingrese un numero, intento: ${intento+1} de ${totalIntentos}: `);
    if((parseInt(n) === numero)){
        encontrado = true;
        break;
    };
    intento++;
};

if(encontrado){
    document.write("Felcidades acertaste el número.");
}else{
    document.write(`Lo siento no acertaste el número en ${intento} intentos`);
};