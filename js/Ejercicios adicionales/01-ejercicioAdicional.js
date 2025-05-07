const persona = {
    nombre:prompt('Ingresa tu nombre'),
    edad:parseInt(prompt('ingresa tu edad')),
    hobbies: [],

    extraerHobbies:function(){
                do{
                   let hobbieUsuario = prompt('Ingresa un hobbie que tengas')
                   this.hobbies.push(hobbieUsuario)
                }
                while(confirm(`Deseas ingresar otro hobbie?`))
            
            },
            
            mostrarDatos:function(){
                        document.writeln(`<h2>${this.nombre}</h2>`)
                        document.writeln(`<p>Edad: ${this.edad}</p>`)
                        document.writeln('<h3>Hobbies</h3>')
                        document.writeln('<ul>')
                        for(let i=0;i<this.hobbies.length;i++){
                            document.writeln(`<li>${this.hobbies[i]}</li>`)
                        }
                        document.writeln('</ul>')}
}

persona.extraerHobbies()
persona.mostrarDatos()