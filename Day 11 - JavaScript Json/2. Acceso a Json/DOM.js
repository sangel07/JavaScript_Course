//https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest

//se declara variable que almacenara el Json
let datosJson;

//Se crea la solicitud de un objeto Json
let xhr = new XMLHttpRequest();
//Se usa para abrir el archivo, se escribe primero el método, despues la URL, por utlimo si es sincrono o asincrono. Se refiere a si se cargara en 2do plano(true = async) o en 1er plano
xhr.open("GET", "persona.json",true);
//El tipo de respuesta que se espera, se adecua
xhr.responseType = "json";
//la funcion que hara al cargarse, se desglosa cuando la respuesta se completo
xhr.onload = function(){
    //Se usa para comprobar si la respuesta fue 200:se completo exitosamente
    if(xhr.status === 200){
        //Se almacena la espuesta del xhr
        datosJson = xhr.response;
        //Se declara el elemento donde se mostrara la respuesta
        let elementoTexto = document.getElementById("nombre");
        elementoTexto.textContent = datosJson.nombre;
    } else {
        //Manejar el error
    }
}
//para llamar y mandar la respuesta, siempre se usa
xhr.send()
