const cuenta = {
    titular: 'Alex',
    saldo: 0,

    informar: function(){
        document.writeln(`<p>El saldo es $${this.saldo}</p>`);
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
            document.writeln(`"Monto a extraer $${extraccion}, tu saldo actual es $${this.saldo}`)
        }else{document.writeln("No puedes extraer esa cantidad de dinero")};

    }
}