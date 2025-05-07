const libro = {
  libros: [],

  ingresarLibro: function () {
    do {
      const nuevoLibro = {
        titulo: prompt("Ingresa el nombre del libro"),
        autor: prompt("Ingresa el autor del libro"),
        anio: prompt("Ingresa el año en que fue publicado"),
        genero: prompt("Ingresa el genero del libro"),
      };
      this.pushLibros(nuevoLibro);
    } while (confirm("Quieres agregar otro libro?"));
  },

  pushLibros: function (nuevoLibro) {
    this.libros.push(nuevoLibro);
  },

  filterGenero: function () {
    const generoBuscado = prompt("Qué genero quieres buscas?");
    const resultado = this.libros.filter(
      (libro) => libro.genero.toLowerCase() === generoBuscado.toLowerCase()
    );
    if (resultado.length > 0) {
      document.writeln(`<h3>Libros del genero: ${generoBuscado}</h3>`);
      document.writeln("<ul>");
      resultado.forEach((libro) => {
        document.writeln(
          `<li>${libro.titulo}(${libro.anio}) - ${libro.autor}</li>`
        );
      });
      document.writeln("</ul>");
    } else {
      document.writeln("No se encontraron libros de ese genero");
    }
  },
};

libro.ingresarLibro();
libro.filterGenero();

console.log(libro.libros);
