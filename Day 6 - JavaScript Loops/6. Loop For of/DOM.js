//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

let arrayUno = ["a","b","c"];

function loopear(){
    for (let letra of arrayUno) {
        document.writeln(letra);
    }
}