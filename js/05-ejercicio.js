class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anoNacimiento){
        this.nombre=nombre
        this.edad=edad
        this.dni=dni
        this.sexo=sexo
        this.peso=peso
        this.altura=altura
        this.anoNacimiento=anoNacimiento
    }

    mostrarGeneracion(){
        if(this.anoNacimiento>=1930 && this.anoNacimiento<1949)
            {document.writeln('<p>Perteneces a la Silent Generation y tu rasgo caracteristico es la Austeridad😑</p>')}
        else if(this.anoNacimiento>=1949 && this.anoNacimiento<1969)
            {document.writeln('<p>Perteneces a la generacion Baby Boom y tu rasgo caracteristico es la Ambicion🤑</p>')}
        else if(this.anoNacimiento>=1969 && this.anoNacimiento<1981)
            {document.writeln('<p>Perteneces a la Generacion X y tu rasgo caracteristico es la Obsesion por el Exito😎</p>')}
        else if(this.anoNacimiento>=1981 && this.anoNacimiento<1994)
            {document.writeln('<p>Perteneces a la Generacion Y (Millennials) y tu rasgo caracteristico es la Frustracion😞</p>')}
        else if(this.anoNacimiento>=1994 && this.anoNacimiento<2025)
            {document.writeln('<p>Perteneces a la Generacion Z y tu rasgo caracteristico es la Irreverencia😝</p>')}
        else{document.writeln('<p>Año de nacimiento invalido</p>')}
    }
}