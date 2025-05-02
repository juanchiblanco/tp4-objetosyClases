class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio}

        imprimeDatos(){
            document.writeln(`<h3>Producto</h3>`)
               document.writeln(`<ul>
                <li>Nombre: ${this.nombre}</li>
                <li>Precio: ${this.precio}</li>
                <li>Codigo: ${this.codigo}</li>
                </ul>`)
        }
    }