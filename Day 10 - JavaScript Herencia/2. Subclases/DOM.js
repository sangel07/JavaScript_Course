//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes#subclases_con_extends
class Deportista{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Se crea subclase de la clase Deportista
//Las subclases pueden tener sus propias propiedades y métodos
class Futbolista extends Deportista{
    constructor(nombre,apellido,goles){
        //se declaran las propiedades. se usa super para heredar las propiedades ya declaradas de Deportistas
        super(nombre,apellido);
        this.goles = goles; //Se declara propiedad que no tiene Deportista

    }
}

//Se crea objeto Deportista
let deportista1 = new Deportista("Angel","Soriano");
console.log(deportista1);

//Se crea objeto Futbolista
let futbolista1 = new Futbolista("Alberto","Romo",150);
console.log(futbolista1);