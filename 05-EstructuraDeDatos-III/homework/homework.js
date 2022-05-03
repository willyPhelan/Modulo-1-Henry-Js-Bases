'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value ; 
  this.left = null ; 
  this.right = null ; }

BinarySearchTree.prototype.insert = function (valor) {
    if (this.value > valor) {
    
      if (!this.left) { 
        this.left = new BinarySearchTree(valor) }

        else { 
          this.left.insert (valor) }
        }
      
        else { 
          if (!this.right) { 
            this.right = new BinarySearchTree(valor) }

            else {
            this.right.insert (valor) ; } 
        }
      }



BinarySearchTree.prototype.size = function () {
  var count = 1 ; 
  if (this.left) count += this.left.size() ;
  if (this.right) count += this.right.size() ; 

  return count ;
}




BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value ) return true ; 
  
  if (this.left) { 
    if (this.left.contains(value)) return true ; 
  }
  
  if (this.right) { 
  if (this.right.contains(value)) return true ; 
}
return false ; 
}


BinarySearchTree.prototype.depthFirstForEach = function (cb, order = 'in-order') {
  switch (order) { 
    case 'in-order' : {
      this.left?.depthFirstForEach (cb, order) ;
      cb(this.value) ; 
      this.right?.depthFirstForEach(cb, order) ; 
      break ; } 

    case 'pre-order' : {
  cb(this.value) ; 
  this.left?.depthFirstForEach (cb, order) ;
      this.right?.depthFirstForEach(cb, order) ; 
      break }
    
    
case 'post-order' : {
  this.left?.depthFirstForEach (cb, order) ;
      this.right?.depthFirstForEach(cb, order) ; 
      cb(this.value) ; 
} }}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {
  cb (this.value) 
  if (this.left) queue.push(this.left)
  if (this.right) queue.push (this.right) ; 
  if (queue.length) { 
    queue.shift().breadthFirstForEach(cb, queue) }
     }

  

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
