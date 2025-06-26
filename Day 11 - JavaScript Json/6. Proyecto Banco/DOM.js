//Se declara la variable que contiene el Json
let datosJson;

//Se declaran elementos que contienen los parrafos
let elementoBanco = obtenerElemento("banco");
let elementoSucursal = obtenerElemento("sucursal");
let elementoTitular = obtenerElemento("titular");
let elementoNumeroCuenta = obtenerElemento("numeroCuenta");
let elementoDollar = obtenerElemento("dollar");
let elementoEuro = obtenerElemento("euro");
let elementoCuenta = obtenerElemento("cuenta");
let elementoFechaApertura = obtenerElemento("fechaApertura");

function mostrarResumen(){
    //Se recupera el archivo para obtener la info del json
    fetch("clientes.json?nocache=" + Date.now())
    .then(response => response.json())
    .then(salida => {
        datosJson = salida;
        elementoBanco.textContent = salida.banco;
        elementoSucursal.textContent = salida.sucursal;
        elementoTitular.textContent = salida.titular;
        elementoNumeroCuenta.textContent = salida.nro_cuenta;
        elementoDollar.textContent = salida.saldo[0].monto + " " + salida.saldo[0].moneda;
        elementoEuro.textContent = salida.saldo[1].monto + " " + salida.saldo[1].moneda;
        elementoCuenta.textContent = datosJson.cbu;
        elementoFechaApertura.textContent = datosJson.abierto;

    })
    .catch(function(error){
        alert(error)
    })
}

function obtenerElemento(id){
    return elemento = document.getElementById(id);
}
