//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
let elementoTiempo = document.getElementById("tiempo"); //Obtiene el elemento con el id tiempo
let elementoAdvice = document.getElementById("advice"); //Obtiene el elemento con el id advice
let elementoAlarma = document.getElementById("alarm");

function comenzarTiempo(){
    setTimeout(tiempoCumplido, 1000 * elementoTiempo.value); //Funcion para aplicar un delay
}

function tiempoCumplido(){
    elementoAdvice.style.color = "green";
    elementoAlarma.play();
}
function comenzarReloj(){
    setInterval(tictac,1000); //Cada intervalo de tiempo ejecuta una función 
}
function tictac(){
    let tiempoActual = new Date();
    let hora = String(tiempoActual.getHours()).padStart(2,0);
    let minutos = String(tiempoActual.getMinutes()).padStart(2,0);
    let segundos = String(tiempoActual.getSeconds()).padStart(2,0); //Sirve para agregar un cero cuando solo exista un digito, el primer elemento es el número de digitos y el segundo, con que digito se quiere reemplazar

    textoHora = hora + ":" + minutos + ":" + segundos;
    elementoAdvice.textContent = textoHora;
}
