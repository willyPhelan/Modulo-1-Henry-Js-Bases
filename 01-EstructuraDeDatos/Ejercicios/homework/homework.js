// resolve estos ejercicios usando recursión

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 1 2 3 5 8 13 ...
  // Retorna el enésimo numero de la serie
}

// Implementa la clase Queue
// enqueue   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size   Devuelve el número de elementos que contiene la queue.
function Queue() {

}

// Implementa la clase LinkedList
// tiene metodos `addToTail`, `removeHead`, y `search`
// ddToTail   Agrega un valor en el final de la lista.   Modifica solo el puntero tail.
// addToHead   Agrega un valor al principio de la lista.   Modifica solo el puntero head
// removeTail   Borra el último valor de la lista.   Resuelve correctamente una lista de un solo valor.
// removeHead   Borra el primer valor de la lista.   Resuelve correctamente una lista de un solo valor.
// search   Busca un valor dentro de la lista.   Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function LinkedList() {

}

function Node(){

}

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