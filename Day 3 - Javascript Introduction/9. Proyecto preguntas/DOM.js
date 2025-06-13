//Variables de preguntas
let elementoQuno = document.getElementById("q-one");
let elementoQdos = document.getElementById("q-two");
let elementoQtres = document.getElementById("q-three");
let elementoQcuatro = document.getElementById("q-four");
let elementoQcinco = document.getElementById("q-five");
//Variable de h1
let elementoTiempo = document.getElementById("time");
//Variable audio
let elementoAlarma = document.getElementById("alarm");
//Variable respuestas
let elementoRespuestas = document.getElementById("respuestas");
//Variable de segundos
let sec = 5;

//función contar
let timeoutId;
function contar() {
    timeoutId = setTimeout(tiempoCumplido, 1000 * sec);
}

//función gameoVER
function tiempoCumplido() {
    elementoAlarma.play();
    limpiarReloj();
    alert("Game Over")
}
let relojId;
function comenzarReloj(){
    relojId = setInterval(tictac,1000); //Cada intervalo de tiempo ejecuta una función 
}

function tictac() {
    sec --;
    elementoTiempo.textContent = `Tiempo restante: ${sec} segundos`; //Concatenar sin signo de +
}
//Enviar información
function enviar() {
    limpiarReloj();
    alert("1. " + elementoQuno.value + "\n" + 
          "2. " + elementoQdos.value + "\n" + 
          "3. " + elementoQtres.value + "\n" + 
          "4. " + elementoQcuatro.value + "\n" + 
          "5. " + elementoQcinco.value + "\n");}

//Funcion para reiniciar marcador
function limpiarReloj(){
    clearTimeout(timeoutId);
    clearInterval(relojId);
}


function reinicio() {
    location.reload();
}
