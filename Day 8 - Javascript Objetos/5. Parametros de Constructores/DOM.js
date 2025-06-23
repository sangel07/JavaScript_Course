//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/new

//Crear un objeto con un constructor con parametros 
function Perro(raza,edad){
    this.patas = 4,
    this.raza = raza,
    this.edad = edad,

    this.ladrar = function(){
        console.log("Guau");
    };
}

let rocky = new Perro("Chihuahua", 10);
let simba = new Perro("Shih Tzu");

console.log(rocky.patas);

function Empleado(nombre,apellido,edad,cargo){
    //propiedades del objeto
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.cargo = cargo

    //Métodos del objeto
    this.presentarse = function(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}, tengo ${edad} y soy ${cargo}`);
    };
}

//Se crea el objeto y se escriben los parametros
let empleado1 = new Empleado("Alejandro", "Soriano", 35, "Director");
console.log(empleado1.presentarse());