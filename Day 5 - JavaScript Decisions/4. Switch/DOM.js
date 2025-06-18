//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
function elegirPrecio(){
    let elementoRespuesta =document.getElementById("textoPrecio");
    let elementoFruta =  document.getElementById("numeroFruta");
    
    let fruta = elementoFruta.value;

    switch(fruta){
        case "1":
            elementoRespuesta.textContent = "$8.45/kg"
            break;
        case "2":
            elementoRespuesta.textContent = "$5.30/kg"
            break;
        case "3":
            elementoRespuesta.textContent = "$7.40/kg"
            break;
        case "4":
            elementoRespuesta.textContent = "$12.30/kg"
            break;
        default:
            elementoRespuesta.textContent = "Precio no encontrado"
            break;
    }

}