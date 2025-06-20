//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/break
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/continue

let array = [1, 5, 24, 95, 11, 10, 62, 15, 9];

for(let numero of array){
    if (numero <50){
        document.writeln(numero + "<br>");
    }else{
        continue; //imprime todos los numeros a excepcion de los que son mayores a 50 1, 5, 24, 11, 10, 62, 15, 9
        //break; //Imprime los numeros antes del numero que que sea mayor a 50; 1 ,5 ,24
    }
}
document.writeln("Eso es todo");