//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

function evaluar(){
    //Declaracion de elementos variables 
    let elementoPrecio = parseFloat(document.getElementById("precioLeche").value);
    let elementoDecision = document.getElementById("decision");

    //Lógica
    if (isNaN(elementoPrecio)) { //Valida si no es número
        elementoDecision.textContent = "Por favor ingresa un número válido.";
    }else if(elementoPrecio < 5){
        elementoDecision.textContent = "Comprar dos cartones de Leche"
    } else if(elementoPrecio >=5 && elementoPrecio <= 10){
        elementoDecision.textContent = "Comprar un carton de Leche"
    } else{
        elementoDecision.textContent = "No comprar"
    }
}