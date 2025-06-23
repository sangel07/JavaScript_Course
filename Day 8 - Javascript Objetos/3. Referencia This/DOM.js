//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this


let perro = {
    //Propiedades de objeto
    nombre : "Simba",
    raza: "Chihuahua",
    edad: 4,
    //Metodo del objeto
    ladrar(){
        console.log("Guau");    
    },

    //This indica que e la caracteristica de este objeto
    saludar(){
        console.log("Hola me llamo " + this.nombre);
    }  

};

let perro2 = {
    //Propiedades de objeto
    nombre : "Rocky",
    raza: "Doberman",
    edad: 14,
    //Metodo del objeto
    ladrar(){
        console.log("Guau");    
    },

    //This indica que e la caracteristica de este objeto
    saludar(){
        console.log("Hola me llamo " + this.nombre);
    }  

};