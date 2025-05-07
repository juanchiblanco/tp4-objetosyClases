const estudiantes = []

const juan = {nombre:'Juan',nota:4}
const lucas = {nombre:'Lucas',nota:5}
const guadalupe = {nombre:'Guadalupe',nota:10}
const lucia = {nombre:'Lucia',nota:7}
const jorge = {nombre:'Jorge',nota:8}
const edith = {nombre:'Edith',nota:9}

estudiantes.push(juan,lucas,guadalupe,lucia,jorge,edith)
console.log(estudiantes)

const notas = estudiantes.map(objeto => objeto.nota)
const nombres = estudiantes.map(objeto => objeto.nombre)

function promedio(){
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
    const resultado = suma / notas.length
    document.writeln(`La nota promedio es ${resultado}`)
}

function mostrarDatos(){
    document.writeln('<ul>')
    for(let i=0;i<estudiantes.length;i++){
        document.writeln(`<li>${nombres[i]}: ${notas[i]}</li>`)
    }
    document.writeln('</ul>')
}

document.writeln('<h2>Notas</h2>')

mostrarDatos()
promedio()

