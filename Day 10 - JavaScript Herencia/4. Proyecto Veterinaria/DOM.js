
//Se crea clase Animal
class Animal{
    constructor(nombre,peso,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
}

//Se crean subclases para cada animal
class Perro extends Animal{
    constructor(nombre,peso,edad,raza){
        super(nombre,peso,edad);
        this.raza = raza;
    }
}

class Gato extends Animal{
    constructor(nombre,peso,edad,sexo){
        super(nombre,peso,edad);
        this.sexo = sexo;
    }
}

class Conejo extends Animal{
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this.color = color;
    }
}

//Se crean los métodos para cada prototipo
Animal.prototype.informacion = function(){
    return `Nombre: ${this.nombre}, Peso: ${this.peso}kg, Edad: ${this.edad} años`
}

//Se llama el método de la clase
Perro.prototype.informacion = function(){
    return `${Animal.prototype.informacion.call(this)}, Raza: ${this.raza}`;
}
Gato.prototype.informacion = function(){
    return `${Animal.prototype.informacion.call(this)}, Sexo: ${this.sexo}`
}
Conejo.prototype.informacion = function(){
    return `${Animal.prototype.informacion.call(this)}, Color: ${this.color} `
}

//Se declara array para los objetos
let arrayAnimales = [];

//Se crean los objetos
let perro1 = new Perro("Rocky", 6.2, 10, "Chihuahua");
let gato1 = new Gato("Peluche",5.2, 5,"Macho");
let conejo1 = new Conejo("Nieve", 2, 2, "Blanco");

//Se crea array
arrayAnimales.push(perro1,gato1,conejo1);

function verRegistros(){
    //Se declara el elemento donde se mostrara la lista
    let elementoLista = document.getElementById("registros");
    //Reseteo de pantalla
    elementoLista.innerHTML = ""
    //Loop para desempaquetar los objetos creados
    for(let animal of arrayAnimales){
        //se crea el elemento
        let item = document.createElement("li");
        //se añade lo que se quiere mostrar al item 
        item.innerText = animal.informacion();
        //se agrega el item al elemento creado 
        elementoLista.appendChild(item);
    }
}