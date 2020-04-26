// the `global pathExists` comment directive (on line 6) tells certain linters
// that these variables come from other files
// the `eslint-disable id-length` comment directive (on line 7) tells certain
// linters not to enforce maximum/minimum length variable names

/* global pathExists */
/* eslint-disable id-length */

describe('`Path Existe`', function(){
  var binaryTree, generalTree, graph, graphWithCycles;

  //Tu función, "pathExists", debe determinar si existe un camino entre dos nodos de un árbol o un gráfico.

  describe('dado un arbol binario', function(){
    beforeEach(function(){
      /*        Binary Tree

                      +-+
                      |A|
                      +-+
                       |
                 +-----+-----+
                 |           |
                 v           v
                +-+         +-+
                |B|         |C|
                +-+         +-+
                 |           |
              +--+--+     +--+---+
              |     |     |      |
              v     v     v      v
             +-+   +-+   +-+    +-+
             |D|   |E|   |F|    |G|
             +-+   +-+   +-+    +-+
              |           |      |
              |           |      |
           +--+        +--+--+   +--+
           |           |     |      |
           v           v     v      v
          +-+         +-+   +-+    +-+
          |H|         |I|   |J|    |K|
          +-+         +-+   +-+    +-+

      Este árbol binario es similar al árbol de búsqueda binaria (BST) que
      trabajaron en el workshop, pero hay dos diferencias clave:

      1.  Aquí (línea 68), se representa como una "lista de adyacencia".Toda
      la información sobre los nodos y sus nodos hijos se almacena en un
      un solo objeto.  Las claves de esta lista de adyacencias son los nodos y
      los valores representan los correspondientes nodos hijos izquierdo y derecho
      (el primer elemento de la matriz es el hijo izquierdo, y el segundo elemento
      siendo el hijo derecho).  Por ejemplo, el hijo izquierdo del nodo "b" es "d" y
      El hijo derecho es "e".


      2. A diferencia de la BST en el workshop, este árbol binario también está desordenado
      (no hay nada que realmente determine lo que va a la izquierda o a la derecha de un
      nodo).  Las BST son un subconjunto de árboles binarios, y mientras que el primero tiene
      ordenamiento implícito, este último no (necesariamente).
      NOTA:  Que este árbol binario este sin ordenar resulta ser representado como un
      lista de adyacencia, ¡esto no significa que todos tengan que serlo!

      Debido a estas diferencias, vas a tener que tomar una diferente manera de hacer 
      que lo que hiciste con el método de "contains" del prototipo de la BST.

      */

      binaryTree = {
        a: ['b', 'c'],
        b: ['d', 'e'],
        c: ['f', 'g'],
        d: ['h'],
        e: [],
        f: ['i', 'j'],
        g: ['k'],
        h: [],
        i: [],
        j: [],
        k: [],
      };
    });

    it('devuelve true si el hijo existe', function(){
      expect(pathExists(binaryTree, 'a', 'h')).toBe(true);
      expect(pathExists(binaryTree, 'c', 'j')).toBe(true);
    });

    it('devuelve false si el hijo no existe', function(){
      expect(pathExists(binaryTree, 'b', 'j')).toBe(false);
      expect(pathExists(binaryTree, 'c', 'h')).toBe(false);
    });
  });

  describe('dado un arbol con mas de dos hijos', function(){
    beforeEach(function(){
      /* General Tree

               +-+
               |A|
               +-+
                |
          +-----+---------+
          |     |         |
          v     v         v
         +-+   +-+       +-+
         |B|   |C|       |D|
         +-+   +-+       +-+
          |     |         |
       +--+-+   |     +---+-+---+---+
       |    |   |     |     |   |   |
       v    v   v     v     v   v   v
      +-+  +-+ +-+   +-+   +-+ +-+ +-+
      |E|  |G| |H|   |I|   |J| |K| |L|
      +-+  +-+ +-+   +-+   +-+ +-+ +-+
            |         |
            |      +--+---+
            |      |      |
            v      v      v
           +-+    +-+    +-+
           |M|    |N|    |O|
           +-+    +-+    +-+

      Este árbol es como el árbol binario del Spec anterior, 
      ¡salvo que no hay límite en el número de hijos que puede tener cada nodo!

      */
      generalTree = {
        a: ['b', 'c', 'd'],
        b: ['e', 'g'],
        c: ['h'],
        d: ['i', 'j', 'k', 'l'],
        e: [],
        g: ['m'],
        h: [],
        i: ['n', 'o'],
        j: [],
        k: [],
        l: [],
        m: [],
        n: [],
        o: [],
      };
    });

    it('devuelve true si el hijo existe', function(){
      expect(pathExists(generalTree, 'a', 'n')).toBe(true);
      expect(pathExists(generalTree, 'b', 'm')).toBe(true);
    });

    it('devuelve false si el hijo no existe', function(){
      expect(pathExists(generalTree, 'b', 'n')).toBe(false);
      expect(pathExists(generalTree, 'c', 'm')).toBe(false);
    });
  });

  describe('dado un gráfico acíclico', function(){
    beforeEach(function(){
      /* Graph (no cycles)

                +-+
                |A|
                +-+
                 |
             +---+---+
             |       |
             v       v
            +-+     +-+
            |B|     |C|
            +-+     +-+
             |       |
             |       |
             +---+---+
                 |
                 v
                +-+
                |D|
                +-+


      Noten que para esta especificación, varios padres pueden ahora alcanzar al mismo niño!
      ('b' y 'c' pueden ambos alcanzar 'd'). 
      Esto significa que la estructura de datos ya no puede llamarse un *árbol*, sino más bien un *grafico*! 
      Todos los árboles son técnicamente un subconjunto de gráficos, pero los árboles no pueden tener múltiples raíces o múltiples caminos a cualquier nodo.
       Por lo tanto, no podemos llamar a esto los datos estructuran un árbol.

      Afortunadamente, lo más probable es que no tengas que cambiar mucho de tu código para tiene "pathExists" trabajo aquí:
      si funcionara para el "generalTree", lo haría  probablemente también funcione para este gráfico.

      */
      graph = {
        a: ['b', 'c'],
        b: ['d'],
        c: ['d'],
        d: [],
      };
    });

    it('devuelve true si el hijo existe', function(){
      expect(pathExists(graph, 'a', 'd')).toBe(true);
      expect(pathExists(graph, 'b', 'd')).toBe(true);
    });

    it('devuelve false si el hijo no existe', function(){
      expect(pathExists(graph, 'a', '!@#$')).toBe(false);
      expect(pathExists(graph, 'd', 'a')).toBe(false);
    });
  });

  describe('dado un gráfico acíclico', function(){
    beforeEach(function(){

      /* Graph (with cycles!)

                    +-+
                    |D|--+
                    +-+  |
                         v
                        +-+
                 +----->|A|
                 |      +-+
                 |       |
                 |       |
                 |       v
                +-+     +-+   +-+
                |S|<--->|C|<--|B|
                +-+     +-+   +-+
                         |
                       +-+-+
                       |   |
                       v   v
                      +-+ +-+
                      |R| |T|
                      +-+ +-+

      ¡¡Aquí viene la parte divertida!!

      Este gráfico ahora contiene ciclos. 
      No existe ahora el concepto de relaciones padre-hijo,
      ya que cualquier nodo puede volver atrás y conectarse a un nodo anterior (previamente atravesado). 
      No hay nodos "padres" o nodos "hijos", sólo nodos y nodos vecinos.

      Los enlaces entre los nodos y los nodos vecinos se denominan "bordes", 
      y pueden ser bidireccionales (entre los nodos S y C, por ejemplo) o unidireccionales (en cualquier otro lugar).

      (Para tu información, el término "vecino" puede no significar lo que piensas.
      En informática sólo se refiere a un posible próximo destino,no a si 2 nodos están "próximos" el uno al otro.  
      En el gráfico de abajo, por ejemplo, A tiene a C como vecino, pero C no tiene a A como vecino).

      Nota final: Un gráfico cíclico probablemente resultará en un bucle infinito si no has cambiado tu código todavía para tratar con los ciclos. 
      RETIRE LA X ANTES DE DESCRIBIRLA (en la línea 210) PARA EJECUTAR ESTA PRUEBA, PERO SÓLO HÁGALO CUANDO ESTÉ LISTO PARA ABORDAR ESTE PROBLEMA.
      */

      graphWithCycles = {
        a: ['c'],
        b: ['c'],
        c: ['s', 'r', 't'],
        d: ['a'],
        s: ['a', 'c'],
        r: ['d'],
        t: [],
        z: ['z'],
      };

    });

    it('devuelve true si el hijo existe', function(){
      expect(pathExists(graphWithCycles, 'a', 'c')).toBe(true);
      expect(pathExists(graphWithCycles, 'a', 'd')).toBe(true);
      expect(pathExists(graphWithCycles, 'r', 'd')).toBe(true);
      expect(pathExists(graphWithCycles, 'r', 'a')).toBe(true);
      expect(pathExists(graphWithCycles, 'r', 's')).toBe(true);
    });

    it('devuelve false si el hijo no existe', function(){
      expect(pathExists(graphWithCycles, 'a', 'b')).toBe(false);
      expect(pathExists(graphWithCycles, 'c', 'z')).toBe(false);
      expect(pathExists(graphWithCycles, 'r', 'o')).toBe(false);
    });

  });

});
