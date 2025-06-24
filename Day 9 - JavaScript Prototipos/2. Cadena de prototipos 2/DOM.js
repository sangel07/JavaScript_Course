//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto


//El prototipo de este objeto es Object() por lo tanto se pueden usar las propiedades y loss métodos de Object()
function Libro(autor, titulo, canPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.canPaginas = canPaginas;
}

let libro1 = new Libro("Stephen king", "Carrie", 524);

console.log(libro1.valueOf());
