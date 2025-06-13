//https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/audio
let elementoTiempo = document.getElementById("tiempo"); //Obtiene el elemento con el id tiempo
let elementoAdvice = document.getElementById("advice"); //Obtiene el elemento con el id advice
let elementoAlarma = document.getElementById("alarm");

function comenzarTiempo(){
    setTimeout(tiempoCumplido, 1000 * elementoTiempo.value); //Funcion para aplicar un delay
}

function tiempoCumplido(){
    elementoAdvice.textContent = "Encendido"; //Cambia el texto de h1
    elementoAdvice.style.color ="green"; //Cambia color de texto
    elementoAlarma.play();
}
