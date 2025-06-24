//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

//Declaracion de clases

class Papel{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

//Expresión de clase anonima
let PapelA = class{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

//Expresión de clase nombrada
let PapelX = class PapelX{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }   
}

//Secrea un objeto atraves de una clase
let papelZ = new PapelX(12,43);

//Las calses siempre tendran solo un método constructor, si no se asgina uno, el sistema lo asigna automaticamente 