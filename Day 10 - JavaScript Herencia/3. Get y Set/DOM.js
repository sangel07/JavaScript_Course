//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/get
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/set




class Deportista{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportista{
    constructor(nombre,apellido,goles){
        super(nombre,apellido);
        this._goles = goles; //El guión bajo indica que es una propiedad privada y debe de ser tratada como tal y no debería ser modificada, de lo contrario es una mala práctica

    }

    //Sirve para obtener la propiedad
    get goles(){
        return this._goles;
    }

    //Sirve para modificar la propiedad
    set goles(nuevoGoles){
        this._goles = nuevoGoles;
    }
}

//Se crea objeto Futbolista
let futbolista1 = new Futbolista("Alberto","Romo",150);
//Se modifica porque tenemos la propiedad set
futbolista1.goles = 100;
console.log(futbolista1);