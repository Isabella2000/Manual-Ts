"use strict";
//? ---------------------------------------- DATOS PRIMITIVOS ----------------------------------------
let estudiojs = true;
if (estudiojs) {
    console.log("yuju");
}
else {
    console.log("vales monda");
}
let barca = 10;
let real = 10;
let messi = 1;
let juegaMessi = true;
let palabras = "Me emocione al verlo";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega messi";
    }
    if (equipo1 > equipo2)
        console.log(`gano equipo1 ${motivo}`);
    if (equipo1 < equipo2)
        console.log("gano equipo2");
    if (equipo1 == equipo2)
        console.log("empate");
}
jugar(barca, real, juegaMessi);
//? ---------------------------------------- Any y condicional ----------------------------------------
let disney;
// let disney: any; con any permite lo que sea
// disney = "god no"; y esto tendria un error porque no es el tipo de disney
disney = 22;
disney = true;
//? Array
let arregloNumero = [1, 2, 3, 4, 5];
let arregloTexto = ["hi", "como", "estas"];
let arregloVariado = [1, "Ricardo", 3, 4, 5]; //no es buena practica
let programador = {
    nombre: "Isa",
    tecnologias: ["isa", "bela"],
    tomarmate: false,
};
let programadorNull = {
    nombre: "Isa",
    tecnologias: ["isa", "bela"],
    tomarmate: null,
};
let programadorfalta = {
    nombre: "Isa",
    tecnologias: ["isa", "bela"],
};
let empleado = {
    nombre: "Isa",
    tecnologias: ["isa", "bela"],
    tomarmate: false,
};
function enviarCurriculum(dev) {
    console.log(`Este curriculum es de ${dev.nombre}`);
}
enviarCurriculum(empleado);
//? ---------------------------------------- Clases POO ----------------------------------------
// class Pelicula{
//! si no inicializas la variable pondra problema, por lo que puedes hacer:
//* nombre?:string
// o
//* nombre:string=""
// }
class Pelicula {
    proyectarEnCine() {
        // this.nombre cogera la propiedad nombre de solo la clase en la que estas
        console.log(`la pelicula ${this.nombre} esta siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        (this.nombre = nombre),
            (this.protagonistas = protagonistas),
            (this.actores = actores);
    }
}
const pelicula = new Pelicula("Barbie", ["Margot Robbie", "Ryan Gosling"], ["Emma Mackey", "America Ferrera"]);
const pelicula2 = new Pelicula("Oppenheimer", ["Cillian Murphy", "Robert Downey Jr."], ["Florence Pugh"]);
pelicula.proyectarEnCine();
console.log(pelicula2);
//? ---------------------------------------- Encapsulamiento y genericos ----------------------------------------
//* la T es un tipo de dato que se dara a fututo, o sea tipo ahora no es nada pero adelante se definira que tipo de dato es
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    // public son las variables publicas que tambien pueden ser utilizadas fuera de esta clase
    sortear() {
        return `Para ${this.nombre} el es ticket ${this.ticket}`;
    }
}
let sorteo = new Sorteo("Isabella"); //*Se definio que T es string
sorteo.setTicket("S7");
console.log(sorteo.sortear());
