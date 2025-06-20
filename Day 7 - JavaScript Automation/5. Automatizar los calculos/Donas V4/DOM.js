/*----------------------- DONAS V2 ---------------------------
Se sintetizan las funciones para hacer más legible el código*/

/*----------------------- DONAS V3 ---------------------------
------- Se automatiza la creación de tiendas en HTML -------*/

/*----------------------- DONAS V4 ---------------------------
--- Se automatiza los calculos con la creación de tiendas ---*/


//Funcion para obtener el valor del elemento input
function conversionElemento(elemento){
    let miNumero = Number(elemento.value);
    return miNumero;
}

//Función para crear el parrafo que contiene las tienda
function crearParrafoTienda(textoLabel, valorMin){
    //Crear etiquetas de parrafo
    let elementoParrafo = document.createElement("p");

    //Crear etiqueta Label
    let elementoLabel = document.createElement("Label");
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
    let elementosVentas = document.getElementById("itemsTienda");

    for(let item of elementosVentas.children){ //Por cada parrafo dentro del div con id ventas
        let valorVenta = conversionElemento(item.children[1]); //Dentro de parrafo obtiene el valor del input 
        ventas.push(valorVenta); //Agrega cada valor al array
    }


    //Se hace la sumatoria con el array creado
    let totalVentas = sumarTotal(ventas);
    let ventaMayor = ventasMayor(ventas);
    let ventaMenor = ventasMenor(ventas);

    for(item of elementosVentas.children){

        item.children[1].className = "neutro";
        let valorVenta = conversionElemento(item.children[1]);
        if(valorVenta == ventaMayor){
            item.children[1].className = "valorMaximo";
        }
        if(valorVenta == ventaMenor){
            item.children[1].className = "valorMinimo";
        }
    }

    let mensajeSalida = `Total de Ventas: ${totalVentas}`
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