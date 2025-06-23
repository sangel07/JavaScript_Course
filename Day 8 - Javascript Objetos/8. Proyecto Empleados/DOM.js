//Se declara el arreglo que contendra a los empleados
let empleadosAgregados = [];

//Constructor de objetos para empleados
function Empleado(matricula, nombre, apellido, fechaNacimiento, cargo){
    //se declaran las propiedades para empleado
    this.matricula = matricula,
    this.nombre = nombre,
    this.apellido = apellido,
    this.fechaNacimiento = fechaNacimiento,
    this.cargo = cargo;
}
//funcion para obtener el elemento
function obtenerElemento(id){
    let elemento = document.getElementById(id).value;
    return elemento;
}
//funcion resetear
function reseteoVariables(){
    document.getElementById("formEmpleado").reset();
}


//Funcion para agregar empleados
function agregarEmpleados(){

    //Se obtienen los elementos Input
    let matricula = obtenerElemento("matricula");
    let nombre = obtenerElemento("nombre");
    let apellido = obtenerElemento("apellido");
    let fechaNacimiento = obtenerElemento("fechaNacimiento");
    let cargo = obtenerElemento("cargo");

    //Validación de campos completos
    if (!matricula || !nombre || !apellido || !fechaNacimiento || !cargo) {
    alert("Todos los campos son obligatorios.");
    return;
    }

    //Se crea el objeto empleado
    let empleadoCreacion = new Empleado(matricula,nombre,apellido,fechaNacimiento,cargo);
    empleadosAgregados.unshift(empleadoCreacion);
    alert("Empleado creado exitosamente");
    reseteoVariables();
}

function mostrarEmpleado(){
    let contador = 1;
    let listado = "";
    for(item of empleadosAgregados){
        listado += "\nEmpleado " + contador + ":\n"
        for(elemento in item){
            listado = listado + elemento.toUpperCase() + ": " + item[elemento] + " ";
            contador ++;
        }
    }
    alert(listado);
}