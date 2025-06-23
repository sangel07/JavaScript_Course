//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects

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

//Es la forma de modificar propiedades de objetos
perro.edad = 10;

console.log(perro.edad);

function cumplirAnios(){
    perro.edad += 1;
}

//Cada que se llame la funcion, se modifican los años
cumplirAnios();

console.log(perro.edad);

//Crear una propiedad, es decir la agrega al objeto

perro["colorOjos"] = "Cafe";

console.log(perro)