/*----------------------- DONAS V2 ---------------------------
Se sintetizan las funciones para hacer más legible el código*/

/*----------------------- DONAS V3 ---------------------------
------- Se automatiza la creación de tiendas en HTML -------*/

//Funcion para obtener el valor del elemento input
function conversionElemento(id){
    let elemento = Number(document.getElementById(id).value);
    return elemento;
}

//Función para crear el parrafo que contiene las tienda
function crearParrafoTienda(textoLabel, valorMin){
    //Crear etiquetas de parrafo
    let elementoParrafo = document.createElement("p");

    //Crear etiqueta Label
    let elementoLabel = document.createElement("label");
    elementoLabel.innerText = textoLabel + ": ";
    //Conectar input
    elementoLabel.setAttribute("for", textoLabel);

    //Crear input
    let elementoInput = document.createElement("input");
    //Establecer elemento input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //agregar labe e input al parrafo
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el parrafo a HTML
    return elementoParrafo;
}

//Funcion para crear tiendas
function crearTiendas(contenedorId, min, cantidadTiendas){
    //Encontrar contendor por ID
    let elementoContenedor = document.getElementById(contenedorId);
    
    //loop para creación de tiendas
    for(let conteoTienda= 1; conteoTienda <= cantidadTiendas; conteoTienda++){
        //Crear texto de label para llamar la función
        let textoEtiqueta = "Tienda " +conteoTienda;

        //crear tiendas con la funcion crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar parrafo
        elementoContenedor.appendChild(parrafoTienda);
    }
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