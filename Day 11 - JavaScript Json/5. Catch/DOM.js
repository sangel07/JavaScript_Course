//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

let datosJason;
fetch("persona3.json?nocache=" + Date.now())

.then(response => response.json())
.then((salida =>{
    datosJason = salida;

    let elementoTexto = document.getElementById("nombre");
    elementoTexto.textContent = datosJason.edad;
    
}))

//Se usa para controlar los errores
.catch(function(error){ //El nombre del parametro puede ser cualquiera
    alert(error)
})