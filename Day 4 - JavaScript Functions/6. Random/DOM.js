//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random



function obtenerNumero(maximo,minimo){
    let elementoRandom = document.getElementById("rand");
    elementoRandom.textContent = Math.floor(Math.random() * (maximo-minimo) + minimo);
}
function generar(){
    let inputMaximo  = document.getElementById("numeroMaximo").value ;
    let elementoMaximo = parseInt(inputMaximo) + 1; 
    let inputMinimo  = document.getElementById("numeroMinimo").value;
    let elementoMinimo = parseInt(inputMinimo); 
    obtenerNumero(elementoMaximo,elementoMinimo);
}

