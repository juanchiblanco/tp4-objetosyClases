const auto = {
  color: "Gris",
  marca: "Chevrolet",
  modelo: "Onix Joy",
  encendido: false,

  encender: function () {
    document.writeln(`<p>Auto encendido</p>`);
  },

  apagar: function () {
    document.writeln(`<p>Auto apagado</p>`);
  },
};

console.log(auto);
auto.encender();
auto.apagar();
