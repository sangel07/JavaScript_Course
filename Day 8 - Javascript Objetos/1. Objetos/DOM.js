//https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Object_basics

//Objetos literale

let perro = {
    //Propiedades de objeto
    nombre : "Simba",
    raza: "Chihuahua",
    edad: "4",
    //Metodo del objeto
    ladrar(){
        console.log("Guau")
    }   

};
 
//Se invocan las propiedades
console.log(perro.nombre);


//Asi e llama un método
perro.ladrar();

//Otra forma de convocar métodos y objetos
perro["ladrar"];