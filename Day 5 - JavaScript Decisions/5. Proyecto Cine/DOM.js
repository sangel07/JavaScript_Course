//funcion convertir elemento
function conversionElemento(id){
    let elementoNumero = document.getElementById(id);
    return elementoNumero;
}
//Function reemplazar
function reemplazarElemento(elemento, seleccion){
    elemento.textContent = seleccion; //reemplaza el input
}


function recomendar(genero){
    let edad = Number(conversionElemento("edad").value);
    let recomend = conversionElemento("eleccion");
    switch(genero){
        case "drama":
            if(isNaN(edad)){
                reemplazarElemento(recomend, "Edad no válida");
            }else if(edad == 0 || edad > 99){
                reemplazarElemento(recomend, "Edad fuera del rango");
            }else if(edad < 12){
                reemplazarElemento(recomend, "El gigante de hierro");
            }else if(edad >= 12 && edad < 18){
                reemplazarElemento(recomend, "Si decido quedarme");
            }else{
                reemplazarElemento(recomend, "Harta");
            }   
            break;
        case "comedia":
            if(isNaN(edad)){
            reemplazarElemento(recomend, "");
            }else if(edad == 0 || edad > 99){
                reemplazarElemento(recomend, "Edad no válida");
            }else if(edad < 12){
                reemplazarElemento(recomend, "Shrek");
            }else if(edad >= 12 && edad < 18){
                reemplazarElemento(recomend, "Scary Movie");
            }else{
                reemplazarElemento(recomend, "American Pie");
            }   
            break;
        case "animacion":
            if(isNaN(edad)){
            reemplazarElemento(recomend, "Edad no válida");
            }else if(edad == 0 || edad > 99){
                reemplazarElemento(recomend, "Edad fuera del rango");
            }
            else if(edad < 12){
                reemplazarElemento(recomend, "Mi villano favorito");
            }else if(edad >= 12 && edad < 18){
                reemplazarElemento(recomend, "Los Simpsons:La pelicula");
            }else{
                reemplazarElemento(recomend, "La fiesta de las salchichas");
            }   
            break;
        case "accion":
            if(isNaN(edad)){
            reemplazarElemento(recomend, "Edad no válida");
            }else if(edad == 0 || edad > 99){
                reemplazarElemento(recomend, "Edad fuera del rango");
            }
            else if(edad < 12){
                reemplazarElemento(recomend, "Mini espias");
            }else if(edad >= 12 && edad < 18){
                reemplazarElemento(recomend, "Fast & Furious");
            }else{
                reemplazarElemento(recomend, "Mad Max");
            }   
            break;
        default:
            
    }

}