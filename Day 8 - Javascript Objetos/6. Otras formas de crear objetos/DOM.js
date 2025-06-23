//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

//Se crea el objeto
let coche1 = new Object();

//Se crean propiedades del objeto
coche1.marca = "Chevrolet";
coche1["modelo"] = "Aveo"

//Se crea un método para el objeto
coche1.encender = function(){
    alert("Auto encendido");//se llama desde la consola del navegador (F12): coche1.encender()
};


//Se crea objeto con propiedad
let perro = new Object({nombre: "Rocky"});
console.log(perro.nombre);

//Se crea objeto con método create, para crear un objeto igual a otro       
let coche2 = Object.create(coche1);
console.log(coche2.marca);
