//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in

//itera sobre las propiedades de un objetos

function Perro(raza,edad,color){
    //Propiedades de objeto
    this.raza = raza,
    this.edad = edad,
    this.patas = 4,
    this.color = color,

    //Método de objeto
    this.ladrar = function(){
        alert("Guau");
    };
}

//Creación de objetos
let Rocky = new Perro("Chihuahua", 10, "Blanco");
let Arnold = new Perro("Gran danes", 2, "Marron");
let Firulais = new Perro("Alaska",12, "Negro");

//Loop For in con un Objeto creado, itera y obtiene todas las caracteristicas del objeto
for(let caracteristica in Rocky){
    console.log(caracteristica + ": " + Rocky[caracteristica]);
}