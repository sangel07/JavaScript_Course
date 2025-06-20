let calificaciones = [8,9,7,4,5,3];
let elementoTabla = document.getElementById("listaTabla");
let elementoReprobado = document.getElementById("reprobado");



function mostrarNotas(){
    let contador = 1; 
    reseteo();
    for (let calificacion of calificaciones) {
        let itemLista = document.createElement("li");
        itemLista.textContent = `Materia ${contador} : ${calificacion}`;
        elementoTabla.appendChild(itemLista);
        contador ++;
    }
}

function promedio(){
    let suma = 0;
    let promedioCalificaciones
    reseteo();
    for(i=0;i < calificaciones.length; i++){
        suma +=calificaciones[i] 
        promedioCalificaciones = suma/ calificaciones.length;
    }
    let itemLista = document.createElement("li");
    itemLista.textContent = `Promedio General : ${promedioCalificaciones}`;
    elementoTabla.appendChild(itemLista);
}

function notaMasAlta(){
    let masAlta = 0;
    reseteo();
    for (let calificacion of calificaciones) {
        if(calificacion > masAlta){
            masAlta = calificacion;
        }
    }
    let itemLista = document.createElement("li");
    itemLista.textContent = `Nota más alta: ${masAlta}`;
    elementoTabla.appendChild(itemLista);
}

function aplazos(){
    let aprobacion = 4;
    let contador = 1;
    
    reseteo();
    for(let calificacion of calificaciones){
        if(calificacion <= aprobacion){
        let itemLista = document.createElement("li");
        itemLista.textContent = `Materia ${contador} : ${calificacion}`;
        elementoTabla.appendChild(itemLista);
        elementoReprobado.textContent = "REPROBADO"
        }
        else{
            continue;
        }
        contador ++;
    }
}

function reseteo(){
    elementoTabla.innerHTML = ""; // 🔄 Limpiar lista antes de llenarla
    elementoReprobado.innerHTML = ""
}