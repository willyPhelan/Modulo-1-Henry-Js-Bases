'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if ( n > -1 && n < 2)  return 1 ;
  return n * ( nFactorial ( n -1  ) ) }

  // CON BUCLE 
function Factorial (n) {
for (var i = 0 ; i < n.length ; i++) { 
  if ( n > -1 && n < 2 ) return 1 ; 
  var Factorial = n[i] * (n -1 ) ; 
}
return  Factorial ;  } 

function nFibonacci(n) {
  //                         0, 1, 2, 3 ,4, 5, 6, 7,  8, 9,  10, 11---> ORDEN
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 16 
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if ( n <= 1 ) return n  ; 
  return nFibonacci ( n -1 ) + nFibonacci ( n -2 ) ; 

}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.data = [] ; }

  Queue.prototype.enqueue = function (valor) {
    this.data.push(valor) ; }

  
  Queue.prototype.dequeue = function () {
    return this.data.shift() ; }
  
  Queue.prototype.size = function () {
    return this.data.length ; }

  



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
