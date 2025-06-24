//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#herencia_con_la_cadena_de_prototipos

//Se crea un objeto, que sera el prototipo de todos los objetos creados apartir de ese objeto
let perro = {nombre: "simba"};

//Este objeto hereda las propiedades del prototipo perro atraves de un enlace o propiedad __proto__
let perro1 = Object.create(perro);

//Imprime las propiedades del protipo del que heredo
console.log(perro1.__proto__);

//En JavaScript, un prototipo es un mecanismo que permite a los objetos heredar propiedades y métodos de otros objetos, 
// creando una cadena de prototipos. Cada objeto en JavaScript tiene un prototipo asociado, que actúa como una plantilla para ese objeto,
//  permitiendo compartir funcionalidades entre diferentes instancias. 
