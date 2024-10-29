let matematica = 8;
let lengua = 10;
let ingles = 7;

let notaMinima = matematica >= 6 && lengua >= 6 && ingles >=6;

let promedio = (matematica + lengua + ingles) / 3;

let promedioMinimo = promedio >= 7;

let asistencia = 85;

let asistenciaMinima = asistencia >= 80;

let final = notaMinima && promedioMinimo && asistenciaMinima;

console.log(`¿El alumno aprueba? ${final}`)

document.write(final)