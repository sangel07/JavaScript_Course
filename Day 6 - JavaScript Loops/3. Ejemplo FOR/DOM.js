//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for

function multiplicar(){

    //Obtener el número 
    let elementoEntrada = Number(document.getElementById("entrada").value);

    //Obtener tabla
    let elementoTabla = document.getElementById("listaTabla");

    for(x = 1; x <= 10; x++){
        //Obtener resultado
        let resultado = elementoEntrada * x;

        //Mostrar resultado
        let itemLista = document.createElement("li");
        itemLista.textContent = `${elementoEntrada} por ${x} es igual ${resultado}` //.textContent Lo convierte a una cadena de caracteres
        elementoTabla.appendChild(itemLista);
    }
}