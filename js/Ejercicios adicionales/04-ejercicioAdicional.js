const alumno = {
  nombre: prompt("Ingresa el nombre del alumno"),
  curso: prompt("Ingresa el curso donde se encuentra"),
  calificaciones: [],

  pushNotas: function(){
    do{
        let nota= prompt("Ingresa la nota del alumno")
        this.calificaciones.push(nota)
    }while(confirm('Quieres agregar otra nota?'))},

    notaMasAlta: function(){
        let notaMax = 0
        for(i=0;i<this.calificaciones.length;i++){
            if(this.calificaciones[i]>notaMax){notaMax=this.calificaciones[i]}
        }
        return notaMax
    },
};

alumno.pushNotas()
alumno.notaMasAlta()
document.writeln(`La nota mas alta de ${alumno.nombre} es: ${alumno.notaMasAlta()}`)
console.log(alumno.calificaciones)