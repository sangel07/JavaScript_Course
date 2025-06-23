//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor


//Crear un objeto con un constructor
function Perro(){
    this.patas = 4,
    this.ladrar = function(){
        console.log("Guau");
    };
}

//Se crea el objeto con el constructor, se pueden crear todos los objetos que se deseen con las mismas caracteristicas
let simba = new Perro();
let rocky = new Perro();

//Al crear el objeto, se pueden llamar a sus propiedades y a sus métodos
simba.ladrar();
rocky.ladrar();
console.log(rocky.patas);