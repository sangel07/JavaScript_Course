//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while
let nombre;

while(nombre != "Angel"){
    nombre = prompt("Dime mi nombre","Ingresa el nombre") 
}
document.writeln(`<h1>Hola ${nombre}, bienvenido al sistema` );