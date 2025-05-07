class Persona{
    constructor(nombre,edad,hobbies){
        this.nombre=nombre
        this.edad=edad
        this.hobbies = []
    }

    extraerHobbies(){
        do{
           let hobbieUsuario = prompt('Ingresa un hobbie que tengas')
           this.hobbies.push(hobbieUsuario)
        }
        while(confirm(`Deseas ingresar otro hobbie?`))
    
    }

    mostrarDatos(){
        document.writeln(`<h2>${this.nombre}</h2>`)
        document.writeln(`<p>Edad: ${this.edad}</p>`)
        document.writeln('<h3>Hobbies</h3>')
        document.writeln('<ul>')
        for(let i=0;i<this.hobbies.length;i++){
            document.writeln(`<li>${this.hobbies[i]}</li>`)
        }
        document.writeln('</ul>')}
}

const nombre = prompt('Ingresa tu nombre')
const edad = parseInt(prompt('Ingresa tu edad'))

const usuario = new Persona(nombre,edad)
usuario.extraerHobbies()
usuario.mostrarDatos()