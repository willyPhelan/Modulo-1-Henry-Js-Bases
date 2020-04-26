// resolve estos ejercicios usando recursión


// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, y 'breadthFirstForEach'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
//corre breadth-first cuando breadthFirstForEach() es ejecutado
function BinarySearchTree() {

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
  Queue,
  Node,
  LinkedList,
  HashTable,
  nFactorial,
  nFibonacci,
  BinarySearchTree
};