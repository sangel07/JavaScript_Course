//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

let array1 = ["Alejandra","Maria", "alfonso"]

console.log(array1.length); // PAra obtener el largo del array
console.log(array1[1]); //Para obtener el elemento en el indice seleccionado
console.log(array1.indexOf("Alejandra")); //Obtienes el indice del elemento
console.log(array1.pop()); //Se elimina el ultimo elemento del array y se puede almacenar 
console.log(array1.shift());//Se elimina el primer elemento del array y se puede almacenar 
console.log(array1.unshift("Pedro"))//Se agrega en el primer elemento del array 
console.log(array1.push("Alberto"))//Se agrega en el ultimo elemento del array 
console.log(array1.slice(1,2)); // Elimina los elementos que esten dentro de los indices indicados
array1.forEach(function(elemento){console.log(elemento);}); //Sirve para recorrer cada uno de los elementos 
array1.forEach(function(elemento,index){console.log(`[${index}] ${elemento}`);}); //Sirve para recorrer cada uno de los elementos y obtener los indices