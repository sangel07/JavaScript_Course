//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor


//El prototipo de este objeto es Object() por lo tanto se pueden usar las propiedades y los métodos de Object()
//Caa funcion constructor tiene una propiedad prototype
function Libro(autor, titulo, canPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.canPaginas = canPaginas;
}

//El objeto prototipo es Libro
let libro1 = new Libro("Stephen king", "Carrie", 524);

//El objeto prototipo es libro1 que a su vez es Libro 
let libro2 = Object.create(libro1);

//Para ver el valor de la propiedad de Libro, que es el constructor de la funcion
//prototype almacena todas las porpiedades que se púeden transmitir a los objetos que son creados apartir de un constructor de funcion
console.log(Libro.prototype);

//Muestran el mismo constructor ya que su prototipo original es Libro()
console.log(libro2.constructor);
console.log(libro1.constructor);

let libro3 = new libro1.constructor("Franz","La metamorfosis", 350);
console.log(libro3.titulo);

//el objeto del libro3 es insatancia del objeto Libro 
console.log(libro3.constructor.name);