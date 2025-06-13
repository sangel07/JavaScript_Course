//https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
function mostrarNombre(){
     let elementoNombre = document.getElementById("nombreUsuario").value;
     let elementoTexto = document.getElementById("texto");

     elementoTexto.textContent = "Tu nombre es: " + elementoNombre;
}