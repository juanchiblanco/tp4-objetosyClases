class Contacto{
    #nombre
    #telefono
    constructor(nombre, telefono){
        this.#nombre = nombre
        this.#telefono = telefono
    }

    get getNombre(){return this.#nombre}
    get getTelefono(){return this.#telefono}

    set setNombre(nuevoNombre){return this.#nombre = nuevoNombre}
    set setTelefono(nuevoTelefono){return this.#telefono = nuevoTelefono}
}