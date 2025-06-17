

function ingresoNumero(id){
    let elementoNumero = Number(document.getElementById(id).value);
    return elementoNumero;
}
//Operaciones
let elementoResultado = document.getElementById("resultado");

function suma(){
    let suma = ingresoNumero("numberOne") + ingresoNumero("numberTwo");
    reemplazarElemento(elementoResultado, suma);
}
function resta(){
    let resta = ingresoNumero("numberOne") - ingresoNumero("numberTwo");
    reemplazarElemento(elementoResultado, resta);
    
}
function multiplicacion(){
    let multiplicacion = ingresoNumero("numberOne") * ingresoNumero("numberTwo");
    reemplazarElemento(elementoResultado, multiplicacion);
}
function division(){
    let division = ingresoNumero("numberOne") / ingresoNumero("numberTwo");
    reemplazarElemento(elementoResultado, division);
}

function potencia(){
    let potencia = Math.pow(ingresoNumero("numberOne"),ingresoNumero("numberTwo"));
    reemplazarElemento(elementoResultado, potencia);
}
function raiz(){
    let raiz = Math.sqrt(ingresoNumero("numberTwo"));
    reemplazarElemento(elementoResultado, raiz);
}
function abs(){
    let abs = Math.abs(ingresoNumero("numberTwo"));
    reemplazarElemento(elementoResultado, abs);
}
function rand(){
    let max = ingresoNumero("numberOne");
    let min = ingresoNumero("numberTwo");
    let rand = Math.floor(Math.random() * (max-min) + min);
    reemplazarElemento(elementoResultado,rand);
}
//Redondeos
function round(){
    let round = Math.round(elementoResultado.value); //Se tiene que convertir a valor ya que elementoResultado es solo un elemento sin valor
    reemplazarElemento(elementoResultado, round);
}
function ceil(){
    let round = Math.ceil(elementoResultado.value);
    reemplazarElemento(elementoResultado, round);
}
function floor(){
    let round = Math.floor(elementoResultado.value);
    reemplazarElemento(elementoResultado, round);
}
//Function reemplazar
function reemplazarElemento(elemento, operacion){
    elemento.value = operacion; //reemplaza el input
}