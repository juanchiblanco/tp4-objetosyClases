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
}