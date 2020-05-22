// resolve estos ejercicios usando recursión

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un valor en el final de la lista. Modifica solo el puntero tail.
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Eliminar el último nodo de la lista y devuelve su valor. Resuelve correctamente una lista de un solo nodo.
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {

}

function Node(value){

}

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable() {

}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};