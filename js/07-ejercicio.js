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

do{
    const opcion = parseInt(prompt('Seleccione una opcion: 1-Añadir un contacto, 2-Buscar contacto, 3-Ver lista de contacto, 4-Eliminar un contacto, 5-Ver espacio disponible, 6-Salir'))

switch(opcion){
    case 1:
    break;

    case 2:
    break;

    case 3:
        break;

    case 4:
        break;

    case 5:
        break;

    case 6:
        break;

        default:

        document.writeln(`Ingresaste una opcion invalida`)
}
}

while(confirm(`Deseas realizar otra opcion?`))