class Rectangulos{
    #alto
    #ancho
    constructor(alto, ancho){
        this.#alto = alto
        this.#ancho = ancho
    }

    get getAlto(){return this.#alto}
    get getAncho(){return this.#ancho}

    set setAlto(nuevoAlto){return this.#alto = nuevoAlto}
    set setAncho(nuevoAncho){return this.#ancho = nuevoAncho}

    mostrarDatos(){
        document.writeln(`
            <ul>
            <li>Alto: ${this.#alto}m</li>
            <li>Ancho: ${this.#ancho}m</li>
            </ul>`)
    }

    perimetro(){
       const perimetro =  2*(this.#ancho+this.#alto)
        document.writeln(`<p>El perimetro del rectangulo es: ${perimetro}m</p>`)
    }

    area(){
        const area = this.#ancho*this.#alto
         document.writeln(`<p>El area del rectangulo es: ${area}m²</p>`)
     }
}

    const alto = parseFloat(prompt('Ingresa el alto del rectangulo'))
    const ancho = parseFloat(prompt('Ingresa el ancho del rectangulo'))

    const rectanguloUsuario = new Rectangulos(alto,ancho)
    document.writeln(`<h3>Tu rectangulo</h3>`)
    rectanguloUsuario.mostrarDatos()
    rectanguloUsuario.perimetro()
    rectanguloUsuario.area()

    const rectanguloSistema = new Rectangulos(50,20)
    document.writeln(`<h3>Mi rectangulo</h3>`)
    rectanguloSistema.mostrarDatos()
    rectanguloSistema.perimetro()
    rectanguloSistema.area()

    rectanguloSistema.setAncho = 40
    rectanguloSistema.setAlto = 80
    document.writeln(`<h3>Mi nuevo rectangulo</h3>`)
    rectanguloSistema.mostrarDatos()
    rectanguloSistema.perimetro()
    rectanguloSistema.area()