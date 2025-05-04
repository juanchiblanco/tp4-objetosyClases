class Libro {
    #isbn
    #titulo
    #autor
    #numPaginas
    constructor(isbn, titulo, autor, numPaginas) {
      this.#isbn = isbn
      this.#titulo =titulo
      this.#autor = autor
      this.#numPaginas = numPaginas
    }

    get getIsbn(){return this.#isbn}
    get getTitulo(){return this.#titulo}
    get getAutor(){return this.#autor}
    get getNumPaginas(){return this.#numPaginas}

    set setIsbn(nuevoIsbn){return this.#isbn = nuevoIsbn}
    set setTitulo(nuevoTitulo){return this.#titulo = nuevoTitulo}
    set setAutor(nuevoAutor){return this.#autor = nuevoAutor}
    set setNumPaginas(nuevoNumPaginas){return this.#numPaginas = nuevoNumPaginas}

    mostrarLibro(){
        document.writeln(`<p>El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#numPaginas} páginas</p>`)
    }

}

const elExtranjero = new Libro ('9787856412546', 'El Extranjero', 'Albert Camus', 128)
const laGayaCiencia = new Libro ('9745125489654', 'La Gaya Ciencia', 'Friedrich Nietzsche', 256)
const aion = new Libro ('9620154879254', 'Aion', 'Carl Gustav Jung', 512)

elExtranjero.mostrarLibro()
laGayaCiencia.mostrarLibro()
aion.mostrarLibro()

const mayorNumPaginas = Math.max(elExtranjero.getNumPaginas,laGayaCiencia.getNumPaginas,aion.getNumPaginas)

if(mayorNumPaginas===elExtranjero.getNumPaginas){document.writeln(`El libro ${elExtranjero.getTitulo} de ${elExtranjero.getAutor} tiene la mayor cantidad de paginas con ${elExtranjero.getNumPaginas} paginas.`)}
else if (mayorNumPaginas===laGayaCiencia.getNumPaginas){document.writeln(`El libro ${laGayaCiencia.getTitulo} de ${laGayaCiencia.getAutor} tiene la mayor cantidad de paginas con ${laGayaCiencia.getNumPaginas} paginas.`)}
else{document.writeln(`El libro ${aion.getTitulo} de ${aion.getAutor} tiene la mayor cantidad de paginas con ${aion.getNumPaginas} paginas.`)}
