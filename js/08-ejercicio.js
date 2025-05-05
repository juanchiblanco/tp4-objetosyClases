class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
    saludar(){
        document.writeln(`<p>Hola ${this.nombre}! Tienes ${this.edad} y eres ${this.profesion}.</p>`)
    }
    despedirse(){
        document.writeln(`<p>Hasta pronto ${this.nombre}</p>`)
    }
}

const julio = new Persona('Julio Paredes','34','Cocinero')
const usuarioNombre = prompt('Ingresa tu nombre')
const usuarioEdad = parseInt(prompt('Ingresa tu edad'))
const usuarioProfesion = prompt('Ingresa tu profesion')
const usuario = new Persona (usuarioNombre,usuarioEdad,usuarioProfesion)

usuario.saludar()
julio.saludar()
usuario.despedirse()
julio.despedirse()
