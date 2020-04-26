// resolve estos ejercicios usando recursión

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

}

// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.

function Queue() {

}

// Implementa la clase LinkedList
// tiene metodos `addToTail`, `removeTail`, y `search`
// addToTail:   Agrega un valor en el final de la lista.   Modifica solo el puntero tail.
// removeTail   Borra el último valor de la lista.   Resuelve correctamente una lista de un solo valor.
// search:   Busca un valor dentro de la lista.   Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {

}

function Node(value){

}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  Queue,
  Node,
  LinkedList,
  nFactorial,
  nFibonacci,
};