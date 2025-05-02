const cuenta = {
    titular: 'Alex',
    saldo: 0,

    informar: function(){
        document.writeln(`${cuenta.titular}, tu saldo actual es $${this.saldo}</p>`);
    },
    ingresar: function(){
        const deposito = parseFloat(prompt("Ingresa el monto a depositar"));
        this.saldo = this.saldo + deposito;
        document.writeln(`<p>Ingresaste $${deposito}. Tu saldo actual es $${this.saldo}</p>`);
    },
    extraer: function(){
        const extraccion = parseFloat(prompt("Ingresa el monto a extraer"))
        if(extraccion<=this.saldo){
            this.saldo= this.saldo - extraccion
            document.writeln(`<p>Monto a extraer $${extraccion}, tu saldo actual es $${this.saldo}</p>`)
        }else{document.writeln("<p>No puedes extraer esa cantidad de dinero</p>")};

    }
}

do{
    const opcion = parseInt(prompt('Seleccione una opcion: 1-Consultar saldo, 2-Depositar dinero, 3-Extraer dinero, 4-Salir'))

    switch(opcion){
        case 1: cuenta.informar();
        break;
    
        case 2: cuenta.ingresar();
        break;
    
        case 3: cuenta.extraer();
            break;
    
        case 4:
            document.writeln(`<p>Hasta pronto ${cuenta.titular}, tu saldo final es $${cuenta.saldo}</p>`)
            document.writeln(`<p>Cerrando el sistema...</p>`);
            break;
    
            default:
    
            document.writeln(`<p>Ingresaste una opcion invalida</p>`)
    }

}

while(confirm(`Deseas realizar otra opcion?`))