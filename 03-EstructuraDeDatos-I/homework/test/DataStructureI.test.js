 /* eslint-disable no-undef */
const {
  Queue,
  Node,
  LinkedList,
  nFactorial,
  nFibonacci,
} = require('../homework');

describe('nFactorial(n)', function() {
  it('should return the factorial of n', function() {
    expect(nFactorial(5)).toBe(120);
    expect(nFactorial(15)).toBe(1307674368000);
  });
});

describe('nFibonacci(n)', function() {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  it('should return the nth fibonacci number', () => {
    const fib1 = nFibonacci(0);
    const fib2 = nFibonacci(6);
    const fib3 = nFibonacci(9);
    const fib4 = nFibonacci(2);
    expect(fib1).toBe(0);
    expect(fib2).toBe(8);
    expect(fib3).toBe(34);
    expect(fib4).toBe(1);
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

  it('tiene metodos `addToTail`, `removeTail`, y `search`', function() {
    expect(typeof linkedList.addToTail).toBe('function');
    expect(typeof linkedList.removeTail).toBe('function');
    expect(typeof linkedList.search).toBe('function');
  });

  it('empiezan tail como falso', function () {
    expect(linkedList.hasOwnProperty('tail')).toBe(true);
    expect(linkedList.tail).toBeFalsy();
    expect(linkedList.removeTail()).toBeFalsy();
  });

  it('tiene una clase Node para representar un nodo', function() {
    expect(typeof Node).toBe('function');
    expect(isNative(Node)).toBe(false);
    function isNative(fn) {
      return (/\{\s*\[native code]\s*\}/).test('' + fn);
    }
  });

  it('La clase Node deberia tomar un valor como argumento y definir next como null por default', function() {
    var node = new Node('test');
    expect(node.value).toBe('test');
    expect(node.next).toBe(null);
  });

  it('linkedlist deberia usar la clase Node para agregar nodos en addToTail', function() {
    linkedList.addToTail('first');
    expect(linkedList.tail instanceof Node).toBe(true);
  });

  it('addToTail agrega los elementos linkeandolos entre ellos a traves del next', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    expect(linkedList.tail.value).toBe('first');
    expect(linkedList.tail.next.value).toBe('second');
    expect(linkedList.tail.next.next).toBe(null);
  });

  it('removetail deberia retornar false si la lista esta vacia', function() {
    expect(linkedList.removeTail()).toBeFalsy();
  });

  it('removetail deberia sacar el ultimo ingresado', function() {
    linkedList.addToTail('first');
    linkedList.addToTail('second');
    expect(linkedList.removeTail()).toBe('second');
    expect(linkedList.removeTail()).toBe('first');
  });

  it('el tail deberia ser null cuando se sacan todos los nodos', function() {
    expect(linkedList.removeTail()).toBeFalsy();
    linkedList.addToTail('one');
    expect(linkedList.removeTail()).toBe('one');
    expect(linkedList.removeTail()).toBeFalsy();
    expect(linkedList.tail).toBeFalsy();
  });


  it('deberia devolver los valores correctos para buscar', function() {
    linkedList.addToTail('one');
    linkedList.addToTail('two');
    linkedList.addToTail('three');
    linkedList.addToTail('four');
    expect(linkedList.search('two')).toBe('two');
    expect(linkedList.search('sdd')).toBe(null);
    expect(linkedList.search('one')).toBe('one');
    expect(linkedList.search('four')).toBe('four');
  });

  it('deberia poder tomar strings y funciones ambos como search inputs', function() {
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

    linkedList.addToTail(new UserNode('Nimit', 'nimit@fs.com', 'New York'));
    linkedList.addToTail(new UserNode('David', 'david@fs.com', 'New York'));
    linkedList.addToTail(new UserNode('Paul', 'paul@yc.com', 'Mountain View'));

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
