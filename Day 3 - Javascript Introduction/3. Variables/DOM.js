//https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Variables
let miNombre = "Angel";
let edad = 25;
alert("me llamo "+ miNombre + " y tengo "+ edad + "años ") 
function enviar(){
    let elemento = document.getElementById("nombreUsuario").value
    alert("Hola " + elemento);
}