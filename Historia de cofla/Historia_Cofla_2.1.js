
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert("Podes pasar gratis porque sos la primera persona despues de las 2 AM");
            free = true;
        } else {
            alert(`Son las ${time} podes pasar, pero tenes que pagar la entrada`)
        }

    } else {
        alert("Sos menor, por lo tanto no podes pasar")
    }
}

validarCliente(2)