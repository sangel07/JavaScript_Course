//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#usando_prototipos_en_javascript

function Libro(autor, titulo, canPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.canPaginas = canPaginas;
}

let libro1 = new Libro("Stephen king", "Carrie", 524);
let libro2 = new Libro("test", "test", 111);

//Modificación del objeto Libro y de todas sus instancias, es decir, todos los objetos que sean creados desde el prototipo Libro. Se actualiza toda la cadena de herencia
Libro.prototype.abrirLibro = function(){
    alert(this.titulo + " esta ahora abierto");
}


//Se recomienda difinir las propiedades dentro del constructor y los métods dentro del prototipo

//se crean las propiedades dentro del cnstructor
function unObjeto(a){
    this.a = a;
}

//Se crean los métodos fuera del constructor
unObjeto.prototype.metodo1 = function(){};
unObjeto.prototype.metodo2 = function(){};