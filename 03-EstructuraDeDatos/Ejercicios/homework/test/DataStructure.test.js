 /* eslint-disable no-undef */
const {
  Queue,
  Node,
  LinkedList,
  HashTable,
  nFactorial,
  nFibonacci,
  BinarySearchTree
} = require('../homework');

describe('nFactorial(n)', function() {
  it('should return the factorial of n', function() {
    expect(nFactorial(5)).toBe(120);
    expect(nFactorial(15)).toBe(1307674368000);
  });
});

describe('nFibonacci(n)', function() {
  it('should return the nth fibonacci number', () => {
    const fib1 = nFibonacci(5);
    const fib2 = nFibonacci(3);
    const fib3 = nFibonacci(1);
    expect(fib1).toBe(8);
    expect(fib2).toBe(3);
    expect(fib3).toBe(1);
  });
});


describe('Un queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('tiene los metodos `enqueue`, `dequeue`, y `size`', function() {
    expect(typeof queue.enqueue).toBe('function');
    expect(typeof queue.dequeue).toBe('function');
    expect(typeof queue.size).toBe('function');
  });

  it('tiene size 0 inicialmente', function() {
    expect(queue.size()).toBe(0);
  });

  it('incrementa en size cuando agregamos items', function() {
    queue.enqueue('first in line');
    expect(queue.size()).toBe(1);
  });

  it('decrementa en size cuando removemos elementos', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.dequeue();
    expect(queue.size()).toBe(2);
  });

  it('devuelve el item correcto cuando dequeeamos', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.size()).toBe(3);
    expect(queue.dequeue()).toBe('first');
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe('second');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe('third');
    expect(queue.size()).toBe(0);
  });

  it('maneja bien el underflow, cuando no hay elementos dequeue devuelve undefined', function() {
    queue.enqueue('first in line');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe('first in line');
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
  });

  it('maneja bien varios enqueue y dequeue', function(){
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    queue.enqueue(4);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(undefined);
  });

  it('agrega y remueve sus propios items', function(){
    var q2 = new Queue();
    queue.enqueue('fullstack');
    q2.enqueue('JavaScript');
    expect(q2.dequeue()).toBe('JavaScript');
    expect(q2.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe('fullstack');
    expect(queue.dequeue()).toBe(undefined);
  });

});

describe('Una linked list', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it('tiene metodos `addToTail`, `removeHead`, y `search`', function() {
    expect(typeof linkedList.addToTail).toBe('function');
    expect(typeof linkedList.removeHead).toBe('function');
    expect(typeof linkedList.search).toBe('function');
  });

  it('empiezan con head y tail como falsos', function () {
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.tail).toBeFalsy();
    expect(linkedList.removeHead()).toBeFalsy();
  });

  it('tiene una clase Node para representar un nodo', function() {
    expect(typeof Node).toBe('function');
    // There is already an object called `Node` in the browser.
    // This spec makes sure you've defined your OWN `Node`.
    expect(isNative(Node)).toBe(false);
    function isNative(fn) {
      return (/\{\s*\[native code]\s*\}/).test('' + fn);
    }
  });

  it(' La clase Node deberia tomar un valor como argumento y definir next y previous como null por default', function() {
    var node = new Node('test');
    expect(node.value).toBe('test');
    expect(node.next).toBe(null);
    expect(node.previous).toBe(null);
  });

  it('linkedlist deberia usar la clase Node para agregar nodos', function() {
    linkedList.addToTail('first');
    expect(linkedList.tail instanceof Node).toBe(true);
  });

  it('si solo un nodo es agregado al head deberia estar tambien apuntado por el tail', function() {
    linkedList.addToHead('first');
    expect(linkedList.head.value).toBe('first');
    expect(linkedList.head.next).toBeFalsy();
    expect(linkedList.head.previous).toBeFalsy();
    expect(linkedList.head).toBe(linkedList.tail);
  });

  it('deberia devolver el head en removeHead', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toBe('first');
    expect(linkedList.removeHead()).toBe('second');
    expect(linkedList.removeHead()).toBe('third');
  });

  it('deberia estar seguro que la propiedad previous de un nuevo head sea null', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toBe('first');
    expect(linkedList.head.previous).toBe(null);
  });

  it('deberia asegurarse que el next de un nuevo tail sea null', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    linkedList.addToTail('third');
    expect(linkedList.removeTail()).toBe('third');
    expect(linkedList.tail.next).toBe(null);
  });

  it('deberia poder agregar al head y al tail', function() {
    linkedList.addToTail('second');
    linkedList.addToHead('first');
    linkedList.addToTail('third');
    expect(linkedList.removeHead()).toBe('first');
    expect(linkedList.removeHead()).toBe('second');
    expect(linkedList.removeHead()).toBe('third');
  });

  it('deberia devolver el tail con removeTail', function() {
    linkedList.addToTail('second');
    linkedList.addToHead('third');
    linkedList.addToTail('first');
    expect(linkedList.removeTail()).toBe('first');
    expect(linkedList.removeTail()).toBe('second');
    expect(linkedList.removeTail()).toBe('third');
  });

  it('deberia eliminar el head y el tail cuando el ultimo nodo es', function() {
    expect(linkedList.removeHead()).toBeFalsy();
    linkedList.addToTail('one');
    expect(linkedList.removeHead()).toBe('one');
    expect(linkedList.removeHead()).toBeFalsy();
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.tail).toBeFalsy();
  });


  it('deberia devolver los valores correctos para buscar', function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    linkedList.addToTail('four');
    linkedList.addToTail('one');
    expect(linkedList.search('two')).toBe('two');
    expect(linkedList.search('sdd')).toBe(null);
    expect(linkedList.search('one')).toBe('one');
    expect(linkedList.search('four')).toBe('four');
  });

  it('deberia poder tomar strings y functiones ambos como search inputs', function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    expect(linkedList.search(function(nodeValue) {
      return nodeValue === 'two';
    })).toBe('two');
  });

  // This spec demonstrates the utility of the previous spec.
  // If you are passing the last one correctly, this one should already pass!

  it('deberia poder buscar por lo tanto no solo strings pero tambien objetos', function() {
    function UserNode(name, email, city) {
      this.name = name;
      this.email = email;
      this.city = city;
    }

    linkedList.addToHead(new UserNode('Nimit', 'nimit@fs.com', 'New York'));
    linkedList.addToHead(new UserNode('David', 'david@fs.com', 'New York'));
    linkedList.addToHead(new UserNode('Paul', 'paul@yc.com', 'Mountain View'));

    expect(linkedList.search(function (userNode) {
      return userNode.name === 'Nimit';
    }).email).toBe('nimit@fs.com');

    expect(linkedList.search(function (userNode) {
      return userNode.email === 'david@fs.com';
    }).city).toBe('New York');

    expect(linkedList.search(function (userNode) {
      return userNode.city === 'Mountain View';
    }).name).toBe('Paul');
  });

});


describe('binarySearchTree', function() {
  var tree,
      testArr,
      valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

  beforeEach(function() {
    tree = new BinarySearchTree(20);
    testArr = [];
  });

  it('tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, y otros', function() {
    expect(typeof tree.insert).toBe('function');
    expect(typeof tree.contains).toBe('function');
    expect(typeof tree.depthFirstForEach).toBe('function');
    expect(typeof tree.breadthFirstForEach).toBe('function');
    expect(typeof tree.size).toBe('function');
  });

  it('toma valores y reporta tamaño correctamente', function () {
    tree.insert(12);
    expect(tree.size()).toBe(2);
  });

  it('hace nodos en la rama correcta', function () {
    tree.insert(12);
    tree.insert(22);
    expect(tree.left.value).toBe(12);
    expect(tree.right.value).toBe(22);
  });

  it('ordena valores cuando agrega', function() {
    expect(tree.value).toBe(20);
    tree.insert(15);
    expect(tree.left.value).toBe(15);
    tree.insert(25);
    expect(tree.right.value).toBe(25);
    tree.insert(5);
    expect(tree.left.left.value).toBe(5);
    tree.insert(17);
    tree.insert(21);
    tree.insert(28);
    tree.insert(0);
    tree.insert(14);
    tree.insert(50);
    tree.insert(1);
    tree.insert(45);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    expect(tree.left.left.right.left.left.left.value).toBe(11);
    tree.insert(30);
    tree.insert(35);
    tree.insert(33);
    tree.insert(31);
    tree.insert(34);
    expect(tree.right.right.right.left.left.right.left.right.value).toBe(34);
  });

  it('`contains` devuelve true si el valor esta en el tree', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    valuesToInsert.forEach(function(value){
        expect(tree.contains(value)).toBe(true);
    });
  });

  it('`contains` devuelve false si el valor no esta en el tree', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    [6, 23, 37, 51].forEach(function(value){
        expect(tree.contains(value)).toBe(false);
    });
  });

  // ventaja obvia: valores son procesados respetando su orden lógico
  it('corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order"', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); });
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
    testArr = [];
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'in-order');
    expect(testArr).toEqual([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
  });

  // caso de uso: copiar el arbol (procesa primero la raiz)
  it('corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'pre-order');
    expect(testArr).toEqual([20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31, 34]);
  });

  // caso de uso: borrar un arbol, procesa primero las hojas
  it('corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    tree.depthFirstForEach(function(val){ testArr.push(val); }, 'post-order');
    expect(testArr).toEqual([ 1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25, 20 ]);
  });

  // util cuando los niveles del arbol tienen significado (org chart? DOM elements?)
  it('corre breadth-first cuando breadthFirstForEach() es ejecutado', function() {
    valuesToInsert.forEach(function(value){
        tree.insert(value);
    });
    var depth = [];
    tree.breadthFirstForEach(function(val){ depth.push(val); });
    expect(depth).toEqual([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34]);
  });
});


describe('HashTable', function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('deberia tener 35 buckets', function() {
    expect(hashTable.numBuckets).toBe(35);
  });

  it('deberia tener metodos `set`, `get`, y `hasKey`', function() {
    expect(typeof hashTable.set).toBe('function');
    expect(typeof hashTable.get).toBe('function');
    expect(typeof hashTable.hasKey).toBe('function');
  });

  it('deberia `hash` correctament', function() {
    // esta funcion hasheadora deberia sumar los key code de las letras de la palabra,
    // y hacer el mod de ese numero por el numero de buckets .
    expect(hashTable.hash('foo')).toBe(9);
    expect(hashTable.hash('this is a key')).toBe(27);
    expect(hashTable.hash('what about this one')).toBe(13);
  });

  it('deberia guardar y buscar valores por key', function() {
    hashTable.set('key1', 'val1');
    hashTable.set('key2', 'val2');
    hashTable.set('this is a very different string', 44.4);
    expect(hashTable.get('key1')).toBe('val1');
    expect(hashTable.get('key2')).toBe('val2');
    expect(hashTable.get('this is a very different string')).toBe(44.4);
  });

  it('deberia devolver un error cuando el key no es un string', function() {
    expect(function() {
      hashTable.set(false, 'hi');
    }).toThrowError(TypeError, 'Keys must be strings');
  });

  it('deberia manejar colisiones', function() {
    hashTable.set('foo', 'bar1');
    hashTable.set('ofo', 'bar2');
    expect(hashTable.get('ofo')).toBe('bar2');
    expect(hashTable.get('foo')).toBe('bar1');
  });

  it('deberia sobreescribir keys', function() {
    hashTable.set('foo', 'bar1');
    hashTable.set('foo', 'bar2');
    expect(hashTable.get('foo')).toBe('bar2');
  });

  it('deberia devolver booleanos para el metodo #hasKey', function() {
    hashTable.set('foobar', 'fluf cats');
    expect(hashTable.hasKey('foobar')).toBe(true);
    expect(hashTable.hasKey('raboof')).toBe(false);
  });

});


