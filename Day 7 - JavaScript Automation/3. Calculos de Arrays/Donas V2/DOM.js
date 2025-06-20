/*----------------------- DONAS V2 ---------------------------
Se sintetizan las funciones para hacer más legible el código*/

//Funcion para obtener el valor del elemento input
function conversionElemento(id){
    let elemento = Number(document.getElementById(id).value);
    return elemento;
}

//Funcion principal para calcular las ventas
function calcular(){

    //Se crea el Array
    let ventas = [];
    ventas[0]= conversionElemento("ventasTienda1");
    ventas[1] = conversionElemento("ventasTienda2");
    ventas[2] = conversionElemento("ventasTienda3");
    ventas[3] = conversionElemento("ventasTienda4");
    ventas[4] = conversionElemento("ventasTienda5");
    ventas[5] = conversionElemento("ventasTienda6");

    //Se hace la sumatoria con el array creado
    let totalVentas = sumarTotal(ventas);
    let ventaMayor = ventasMayor(ventas);
    let ventaMenor = ventasMenor(ventas);

    let mensajeSalida = `Total de Ventas: ${totalVentas} / Venta Mayor: ${ventaMayor} / Venta Menor: ${ventaMenor} `
    let elementoSalida = document.getElementById("parrafoSalida");
    
    elementoSalida.textContent = mensajeSalida;
}

//Calcula la venta total de las sucursales
function sumarTotal(array){
    total = 0;
    for(let venta of array){
        total += venta;
    }
    return total;
}

//Calcula la venta mayor 
function ventasMayor(array){
    let mayor = array[0];
    for(let venta of array){
        if(venta > mayor){
            mayor = venta;
        }
        else{
            continue;
        }
    }
    return mayor;
}

//Calcula la venta menor 
function ventasMenor(array){
    let menor = array[0];
    for(let venta of array){
        if(venta < menor){
            menor = venta;
        }
        else{
            continue;
        }
    }
    return menor;
}