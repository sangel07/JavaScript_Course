//Se crea constructor de automovil
function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}
//Se declara el array
let arrayAutomoviles = [];

//Se crean los objetos apartir del prototipo Automovil
let automovilUno = new Automovil("Volkswagen","Jetta","Plata","2025","Luis Alvarez");
let automovilDos = new Automovil("Nissan","March","Vino","2024", "Alfonso Quaron");
let automovilTres = new Automovil("Chevrolet","Trax","Azul","2022","Angel Soriano");

//Se agregan los autos al array
arrayAutomoviles.unshift(automovilUno,automovilDos,automovilTres);

//Formar métodos del constructor
Automovil.prototype.venderAutomovil = function(){
    this.titular = titular;
}

Automovil.prototype.verAuto = function(){
    let auto = `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
    return auto;
}

Automovil.prototype.encender = function(){
    alert("El automovil esta en marcha");
}

function mostrarRegistro(){
    let elementoLista = document.getElementById("listaAutomoviles");

    for(automovil of arrayAutomoviles){
        let item = document.createElement("li");
        item.innerText = automovil.verAuto();
        elementoLista.appendChild(item);
    }
    
}