//? ---------------------------------------- DATOS PRIMITIVOS ----------------------------------------

let estudiojs: boolean = true;
if (estudiojs) {
  console.log("yuju");
} else {
  console.log("vales monda");
}

let barca: number = 10;
let real: number = 10;
let messi: number = 1;
let juegaMessi: boolean = true;
let palabras: string = "Me emocione al verlo";
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
  let motivo: string = "";
  if (juegaMessi) {
    equipo1 += messi;
    motivo = " porque juega messi";
  }
  if (equipo1 > equipo2) console.log(`gano equipo1 ${motivo}`);
  if (equipo1 < equipo2) console.log("gano equipo2");
  if (equipo1 == equipo2) console.log("empate");
}
jugar(barca, real, juegaMessi);

//? ---------------------------------------- Any y condicional ----------------------------------------
let disney: number | boolean;
// let disney: any; con any permite lo que sea
// disney = "god no"; y esto tendria un error porque no es el tipo de disney
disney = 22;
disney = true;

//? Array
let arregloNumero: number[] = [1, 2, 3, 4, 5];
let arregloTexto: string[] = ["hi", "como", "estas"];
let arregloVariado: any[] = [1, "Ricardo", 3, 4, 5]; //no es buena practica

//? ---------------------------------------- Objeto y type ----------------------------------------
type Programador = {
  nombre: string;
  tecnologias: string[];
  tomarmate?: boolean | null; //el ?: es para decir que es dato no es necesario mandarlo
};

let programador: Programador = {
  nombre: "Isa",
  tecnologias: ["isa", "bela"],
  tomarmate: false,
};

let programadorNull: Programador = {
  nombre: "Isa",
  tecnologias: ["isa", "bela"],
  tomarmate: null,
};

let programadorfalta: Programador = {
  nombre: "Isa",
  tecnologias: ["isa", "bela"],
};

//? ---------------------------------------- Interface (Es muy parecido pero en proyectos grandes, se utiliza interface como modelo del objeto)
interface Empleado {
  nombre: string;
  tecnologias: string[];
  tomarmate?: boolean | null; //el ?: es para decir que es dato no es necesario mandarlo
}

let empleado: Empleado = {
  nombre: "Isa",
  tecnologias: ["isa", "bela"],
  tomarmate: false,
};

function enviarCurriculum(dev: Empleado) {
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
  nombre?: string;
  protagonistas?: string[];
  actores?: string[];

  proyectarEnCine() {
    // this.nombre cogera la propiedad nombre de solo la clase en la que estas
    console.log(`la pelicula ${this.nombre} esta siendo proyectada`);
  }

  constructor(nombre: string, protagonistas: string[], actores?: string[]) {
    (this.nombre = nombre),
      (this.protagonistas = protagonistas),
      (this.actores = actores);
  }
}

const pelicula = new Pelicula(
  "Barbie",
  ["Margot Robbie", "Ryan Gosling"],
  ["Emma Mackey", "America Ferrera"]
);
const pelicula2 = new Pelicula(
  "Oppenheimer",
  ["Cillian Murphy", "Robert Downey Jr."],
  ["Florence Pugh"]
);

pelicula.proyectarEnCine();
console.log(pelicula2);

//? ---------------------------------------- Encapsulamiento y genericos ----------------------------------------
//* la T es un tipo de dato que se dara a fututo, o sea tipo ahora no es nada pero adelante se definira que tipo de dato es
class Sorteo<T> {
  private ticket?: T; // private son las variables de solo esta clase, dentro de esta clase

  constructor(private nombre: String) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  // public son las variables publicas que tambien pueden ser utilizadas fuera de esta clase
  public sortear(): string {
    return `Para ${this.nombre} el es ticket ${this.ticket}`;
  }
}

let sorteo = new Sorteo<string>("Isabella") //*Se definio que T es string
sorteo.setTicket("S7")
console.log(sorteo.sortear())