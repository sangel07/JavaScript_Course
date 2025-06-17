//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters
function sumar(num1,num2){
    return num1 + num2;
}

function resultado(){
    let elementoNum1 = parseInt(document.getElementById("numUno").value);
    let elementoNum2 = parseInt(document.getElementById("numDos").value);
    let numero = `El numero es ${sumar(elementoNum1,elementoNum2)}`;
    alert(numero); 
}

