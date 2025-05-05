class Animal {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    emitirSonido(){
        document.writeln(`<p>El ${this.nombre} hace ...</p>`)
    }
}

class Perro extends Animal {
    emitirSonido(){
        document.writeln(`<p>El ${this.nombre} tiene ${this.edad} años y hace Guau🐶</p>`)
    }
}
class Gato extends Animal {
    emitirSonido(){
        document.writeln(`<p>El ${this.nombre} tiene ${this.edad} años y hace Miau😺</p>`)
    }
}

const schnauzer = new Perro('Schnauzer','7')
const siames = new Gato('Siames','10')

schnauzer.emitirSonido()
siames.emitirSonido()