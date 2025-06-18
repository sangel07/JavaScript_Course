//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators

//Funcion obtener elemento
function obtenerElementoPorId(id){
    let elementoId = document.getElementById(id);
    return elementoId;
}
//Función reemplazar elemento
function reemplazarElemento(elemento,valor){
    elemento.textContent = valor;
}


function calcular(){
    //Variables de respuestas
    let respuestaUno = obtenerElementoPorId("respuesta1");
    let respuestaDos = obtenerElementoPorId("respuesta2");
    let respuestaTres = obtenerElementoPorId("respuesta3");
    
    //Variable de input
    let edad = obtenerElementoPorId("textoEdad").value;

    //Proceso lógico
    let puedeBeber = edad >= 18;
    reemplazarElemento(respuestaUno,puedeBeber);

    let puedeIngresar = edad >= 18 && edad <= 30;
    reemplazarElemento(respuestaDos,puedeIngresar);

    let entradaGratis = edad == 20 || edad == 25;
    reemplazarElemento(respuestaTres,entradaGratis);

}