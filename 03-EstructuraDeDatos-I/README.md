# Estructuras de Datos I

Cuando hablamos a estructura de Datos nos referimos a cómo organizamos los datos cuando programamos. Básicamente, este tema trata de encontrar formas particulares de  organizar datos de tal manera que puedan ser utilizados de manera eficiente.

Imaginen que los datos que tenemos que manejar son libros!, y en un principio tenemos muchísimos libros desordenados por casa. Cada vez que queremos leer un libro, tardamos dos horas buscando uno por uno hasta dar con el libro. Eso no es eficiente. Entonces, ¿qué hacemos? Bueno, podemos armar una biblioteca, por ejemplo, y acomodamos los libros en orden alfabético, esto nos ahorra tiempo en buscarlos. Y, ¿qué pasa si tenemos demasiados libros y no entran en una biblioteca? Podemos tener un lugar donde depositamos los libros que menos usamos, y mantenemos una libretita donde especificamos qué libros dejamos ahí y en que depósito están.
En fin, podemos organizarlos de mil maneras, pero se entiende la idea que organizando los datos vamos a ser más eficientes, no?

## Arreglos

El arreglo es una estructura de datos que ya conocían! Es tan usada, que muchos lenguajes la implementan de forma nativa, como javascript.
El arreglo es una colección finita de elementos que ocupan espacios contiguos de memoria, y se pueden acceder a cada uno de ellos a través de un índice.

![Array](./img/array.jpg)

Los arreglos nos sirven para guardar una colección de cosas (objetos, enteros, funciones, etc...) que tengan algo en común. Lo bueno de los arreglos es que la inserción es muy rápida, y es fácil acceder a un objeto si conocemos su índice. Pero no es tan bueno cuando tenemos que buscar un objeto en él, ya que tenemos que recorrerlo entero para encontrarlo. Borrar un elemento también es medio costoso.


## Sets

Un Set es una colección de elementos sin un orden en particular en donde _cada elemento puede aparecer una sola vez_. O sea, que es parecido a un arreglo, pero con la condición que cada elemento sea único.
En javascript los sets ya están implementados, y los podemos encontrar en la clase `Set`, acá esta la [documentación](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set). Veamos un ejemplo:

```javascript
var arreglo = [1,2,3,4,4,5,5,1,2]
var set1    = new Set(arreglo)
console.log(arreglo)   // [ 1, 2, 3, 4, 4, 5, 5, 1, 2 ]
console.log(set1)      // Set { 1, 2, 3, 4, 5 }
```

## Pilas (Stack)

Esta estructura de datos es básicamente una _pila de cosas_. Vieron cuando tienen que lavar los platos: primero van poniendo un plato arriba del otro (armando la pila), después empiezan a sacar desde arriba para ir limpiando. Bueno, si se fijan bien el primer plato que ponen en la pila es el último que va a ser lavado, o bien, el último que entra es el primero que va a salir. Esto se conoce como una estructura tipo __LIFO__: _Last in, first out_.

![stack](./img/stack.jpg)

Básicamente un stack tiene dos operaciones: `push()` y `pop()`, ya que sólo podés poner y sacar elementos en un orden definido, hace que no necesitemos más operaciones.
Podemos usar múltiples formas de implementar una Pila en javascript. Lo podemos hacer usando arreglos, una lista enlazada, o bien crear nuestra propia clase Pila.
Veamos como hacerlo usando arreglos:

```javascript
var stack = [];
stack.push(1);       // la pila es [1]
stack.push(10);      // la pila es ahora [1, 10]
var i = stack.pop(); // la pila [1]
console.log(i);      // muestra 10
```

## Cola (Queue)

Una cola, es una estructura en la cual el primer elemento que entra es el primer elemento que sale (como cuando hacemos una cola en el Banco :smile:). Esto es lo opuesto al comportamiento de una Pila, y se conoce como estructura tipo __FIFO__: _First in, First out_. La cola tiene dos métodos tambien: `enqueue()` y `dequeue()`, que sirven para encolar y 'desencolar' elementos.
Esta estructura la vamos a usar mucho para representar problemas de la vida real. Por ejemplo, si tuviera que hacer una app que desvie llamados de clientes a operadores, podríamos hacer una cola, donde vamos metiendo los clientes que van llegando, y cuando algún operador esté libre, sacar un cliente de la cola y pasarlo.

![colas](./img/cola.jpg)

Veamos como podemos implementarlo en Javascript, igual que con Pilas, se puede hacer de muchas maneras. Vamos a mostrar la más simple, con arreglos:

```javascript
var queue = [];
queue.push(1);         // la cola es [1]
queue.push(2);         // la cola es [1, 2]
var i = queue.shift(); // la cola es [2]
console.log(i);        // muestra 1
```

Como ven, cuando construimos el set pasándole un [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) nos devuelve un `Set` en donde cada uno de los elementos que contiene es único!