//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/continue#ejemplo_usando_continue_con_una_etiqueta
let alto = 4;
let ancho =  3;

loopExterno:
for (i =1;i <=alto; i++){
    for(j=1; j <=ancho; j++){
        document.writeln(i + "." + j + "<br>");
        if(i == 2 && j ==2){
            break loopExterno;
        }
    }
}