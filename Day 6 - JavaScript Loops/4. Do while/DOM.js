//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while

let vidas = 10;

//Hace por lo menos una comprobación 
/*do{
    console.log("Vidas: " + vidas);
    vidas --;
}while(vidas >=0);*/

let nombre;
do{
    nombre = prompt("Escribe algo","Escribe aquí") //Sirve para que el usuario pueda escribir en un alert
}while(nombre != "pedro");

document.writeln("<h1>Ese es mi nombre </h1>")