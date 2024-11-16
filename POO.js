
class Animal {
    constructor(especie,edad,color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInformación() {
        document.write(this.informacion + "<br>")
    }
    ladrar(){
        if (this.especie == "perro") {
            document.write("¡Wof! <br>");
        } else {
            document.write("No puede ladrar ya que es un " + this.especie + "<br>");
        }
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro", 5, "marron", "doberman");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pájaro", 3, "verde");

// document.write(perro.informacion + "<br>")
// document.write(gato.informacion + "<br>")
// document.write(pajaro.informacion + "<br>")

perro.verInformación();
gato.verInformación();
pajaro.verInformación();

perro.ladrar();
gato.ladrar();
pajaro.ladrar();

perro.setRaza = "Labrador"
document.write(perro.getRaza)