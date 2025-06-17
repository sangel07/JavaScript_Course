//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
function potencia(num1,num2){
    return Math.pow(num1,num2)
}

function raiz(num){
    return Math.sqrt(num);
}

function absoluto(num,num1){
    return Math.abs(num - num1);
}

function pi(){
    return Math.PI;
}

function resultado(){
    let elementoNum1 = parseInt(document.getElementById("num1").value);
    let elementoNum2 = parseInt(document.getElementById("num2").value);

    let elementoPotencia = document.getElementById("potencia");
    let elementoRaiz = document.getElementById("raiz");
    let elementoAbsoluto = document.getElementById("absoluto");
    let elementoPi = document.getElementById("pi");

    elementoPotencia.textContent = potencia(elementoNum1,elementoNum2);
    elementoRaiz.textContent = raiz(elementoNum1);
    elementoAbsoluto.textContent = absoluto(elementoNum1, elementoNum2);
    elementoPi.textContent = pi()
}