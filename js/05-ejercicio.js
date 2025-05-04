class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = anoNacimiento;
  }

  mostrarGeneracion() {
    if (this.anoNacimiento >= 1930 && this.anoNacimiento < 1949) {
      document.writeln(
        "<p>Perteneces a la Silent Generation y tu rasgo caracteristico es la Austeridad😑</p>"
      );
    } else if (this.anoNacimiento >= 1949 && this.anoNacimiento < 1969) {
      document.writeln(
        "<p>Perteneces a la generacion Baby Boom y tu rasgo caracteristico es la Ambicion🤑</p>"
      );
    } else if (this.anoNacimiento >= 1969 && this.anoNacimiento < 1981) {
      document.writeln(
        "<p>Perteneces a la Generacion X y tu rasgo caracteristico es la Obsesion por el Exito😎</p>"
      );
    } else if (this.anoNacimiento >= 1981 && this.anoNacimiento < 1994) {
      document.writeln(
        "<p>Perteneces a la Generacion Y (Millennials) y tu rasgo caracteristico es la Frustracion😞</p>"
      );
    } else if (this.anoNacimiento >= 1994 && this.anoNacimiento < 2025) {
      document.writeln(
        "<p>Perteneces a la Generacion Z y tu rasgo caracteristico es la Irreverencia😝</p>"
      );
    } else {
      document.writeln("<p>Año de nacimiento invalido</p>");
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.writeln("<p>Eres mayor de edad</p>");
    } else {
      document.writeln("<p>Eres menor de edad</p>");
    }
  }

  mostrarDatos() {
    document.writeln(`<h2>${this.nombre}</h2>`);
    document.writeln(`<ul>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Altura: ${this.altura}cm</li>
        <li>Peso: ${this.peso}kg</li>
        <li>Año de Nacimiento: ${this.anoNacimiento}</li>
        </ul>`);
  }

  generarDni() {
    this.dni = Math.floor(Math.random() * 99999999 + 1);
  }
}

const juan = new Persona(
  "Juan",
  "15",
  this.dni,
  "H (hombre)",
  "60",
  "174",
  2010
);
const guadalupe = new Persona(
  "Guadalupe",
  "85",
  this.dni,
  "M (mujer)",
  "48",
  "162",
  1940
);

console.log(juan);

juan.generarDni();

juan.mostrarDatos();

juan.mostrarGeneracion();

juan.esMayorDeEdad();

guadalupe.generarDni();

guadalupe.mostrarDatos();

guadalupe.mostrarGeneracion();

guadalupe.esMayorDeEdad();
