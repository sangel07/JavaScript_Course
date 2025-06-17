//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/return
function sumar(){
    let suma = 12+18;
    //se interrupe la función cuando encuentra el código de un return
    return suma; //Regresa el resultado y lo puede convertir en variable
}

let numero = `El numero es ${sumar()}`;
alert(numero); 