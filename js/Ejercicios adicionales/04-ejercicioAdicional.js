const alumno = {
  nombre: prompt("Ingresa el nombre del alumno"),
  curso: prompt("Ingresa el curso donde se encuentra"),
  calificaciones: [],

  pushNotas: function () {
    do {
      let nota = parseInt(prompt("Ingresa la nota del alumno"));
      if ((nota <= 10) & (nota >= 0)) {
        this.calificaciones.push(nota);
      }
    } while (confirm("Quieres agregar otra nota?"));
  },

  notaMasAlta: function () {
    let notaMax = 0;
    for (i = 0; i < this.calificaciones.length; i++) {
      if (this.calificaciones[i] > notaMax) {
        notaMax = this.calificaciones[i];
      }
    }
    return notaMax;
  },

  clasificarAlumno: function () {
    let clasificacion = "";

    switch (true) {
        case this.notaMasAlta() >= 9:
          clasificacion = "A";
          break;
        case this.notaMasAlta() >= 7:
          clasificacion = "B";
          break;
        case this.notaMasAlta() >= 5:
          clasificacion = "C";
          break;
        default:
          clasificacion = "D";
      }
    
      return clasificacion;
    }
  }

alumno.pushNotas();
alumno.notaMasAlta();
alumno.clasificarAlumno();
document.writeln(
  `La nota mas alta de ${
    alumno.nombre
  } es: ${alumno.notaMasAlta()} (${alumno.clasificarAlumno()})`
);
console.log(alumno.calificaciones);
