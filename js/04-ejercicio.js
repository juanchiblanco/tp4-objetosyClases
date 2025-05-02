class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio}

        imprimeDatos(){
            document.writeln(`<h3>Producto: ${this.nombre}</h3>`)
               document.writeln(`<ul>
                <li>Precio: $${this.precio}</li>
                <li>Codigo: ${this.codigo}</li>
                </ul>`)
        }
    }

    mostazas = []

    const mostazaSavora = new Producto('150', 'Mostaza Savora', '1899,99')
    mostazas.push(mostazaSavora)
    const mostazaDanica = new Producto('151', 'Mostaza Danica', '1699,99')
    mostazas.push(mostazaDanica)
    const mostazaNatura = new Producto('152', 'Mostaza Natura', '1399,99')
    mostazas.push(mostazaNatura)

    console.log(mostazas)

    document.writeln('<h2>Seccion Mostazas</h2>')
    document.writeln(`<p>Cantidad: ${mostazas.length}</p>`)
    
    mostazaSavora.imprimeDatos()
    mostazaDanica.imprimeDatos()
    mostazaNatura.imprimeDatos()