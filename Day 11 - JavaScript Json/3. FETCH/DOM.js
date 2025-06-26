//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

let datosJason;
fetch("persona2.json?nocache=" + Date.now())
//Es una promesa y se ejecuta hasta que la promesa reciba la respuesta. La respuesta se almacena en una variable que en este caso es response, esta respuesta inlcuye la info del objeto Json
.then(response => response.json())
.then((salida =>{
    datosJason = salida;

    let elementoTexto = document.getElementById("nombre");
    elementoTexto.textContent = datosJason.edad;
    
}))