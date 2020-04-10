/* global graphGen shortestPaths performanceLoop */
/* eslint-disable id-length */

describe('`shortestPaths`', function(){
  var arrayContains = jasmine.arrayContaining;
  var undirectedGraph, largeGraph;

  beforeEach(function(){

    /*
    Tu función, "shortestPaths", debe devolver un array de los caminos más cortos entre dos nodos en un gráfico no dirigido
   (a diferencia del gráfico dirigido en el problema "doesPathExist", todos los bordes en un gráfico no dirigido son bidireccionales).

    El "undirectedGraph" que se muestra a continuación se utilizará para la mayoría de las especificaciones de prueba,
    y el gráfico generado ("largeGraph") se utilizará para la especificación final. 
    El gráfico generado es bastante grande, ¡así que piensa cuidadosamente en cómo deberías enfocar este problema!
    Una búsqueda no optimizada puede terminar tomando un tiempo innecesariamente largo para ejecutarse.
    Considere cuidadosamente lo que ha aprendido en el taller de estructuras de datos, y qué "tipo" de búsqueda sería la más adecuada para este problema!

    */

    undirectedGraph = {
      a: ['q', 'b', 'c'],
      b: ['a', 'd'],
      c: ['a', 'd', 'y'],
      d: ['b', 'c', 'r', 'x'],
		  q: ['a', 'r', 's', 't', 'u'],
		  r: ['d', 'q', 'z'],
      s: ['v', 'q'],
      t: ['v', 'q'],
      u: ['v', 'q'],
      v: ['s', 't', 'u'],
		  x: ['d'],
		  y: ['c'],
		  z: ['r']
    };

    largeGraph = graphGen(5, 35);
    /*
    `graphGen` aquí crea un gráfico con 35 vértices totales cada uno conectado a un número aleatorio de vecinos (máximo de 5).

    El gráfico también contiene un bucle gigante que conecta los vértices más exteriores,
     así que una vez más, ¡asegúrate de que tu función detecte los ciclos!
    */
  });

  it('devuelve un array', function(){
    var returnedValue = shortestPaths(undirectedGraph, 'a', '!@#$%');
    expect(returnedValue).toEqual(jasmine.any(Array));
  });

  it('devuelve un array con un largo de 0 si el camino no existe', function(){
    var returnedValue = shortestPaths(undirectedGraph, 'a', '!@#$%');
    expect(returnedValue.length).toBe(0);
  });

  it('devuelve un array de arrays si el camino existe', function(){
    var returnedValue = shortestPaths(undirectedGraph, 'a', 'a');
    expect(returnedValue).toEqual(jasmine.any(Array));
    for (let element of returnedValue){
      expect(element).toEqual(jasmine.any(Array));
    }
  });

  describe('para los vértices de inicio y final que sólo tienen un único camino más corto entre ellos', function(){
    it(' devuelve un array de largo 1', function(){
      expect(shortestPaths(undirectedGraph, 'a', 'y').length).toBe(1);
      expect(shortestPaths(undirectedGraph, 'd', 'z').length).toBe(1);
    });
    it('devuelve el camino más corto correcto', function(){
      expect(shortestPaths(undirectedGraph, 'a', 'y')[0].toString()).toEqual('a,c,y');
      expect(shortestPaths(undirectedGraph, 'd', 'z')[0].toString()).toEqual('d,r,z');
    });
  });

  describe('para los vértices de inicio y final que tienen múltiples caminos más cortos entre ellos', function(){
    it('devuelve una matriz con una longitud que coincide con el número de caminos más cortos', function(){
      expect(shortestPaths(undirectedGraph, 'a', 'd').length).toBe(2);
      expect(shortestPaths(undirectedGraph, 'x', 'a').length).toBe(2);
      expect(shortestPaths(undirectedGraph, 'q', 'v').length).toBe(3);
    });

    it('devuelve los caminos más cortos correctos', function(){
      expect(shortestPaths(undirectedGraph, 'a', 'd')).toEqual(arrayContains([['a', 'b', 'd'], ['a', 'c', 'd']]));
      expect(shortestPaths(undirectedGraph, 'x', 'a')).toEqual(arrayContains([['x', 'd', 'b', 'a'], ['x', 'd', 'c', 'a']]));
      expect(shortestPaths(undirectedGraph, 'v', 'q')).toEqual(arrayContains([['v', 'u', 'q'], ['v', 't', 'q'], ['v', 's', 'q']]));
    });
  });

  xdescribe('dado un gráfico con más de 30 vértices', function(){
    it('debe ser optimizada y completar sus cálculos en un tiempo determinado (depende de lo rápido que sea el ordenador, pero normalmente menos de 50 milisegundos)', function(){
      // Esto comprobará si su función se ha escrito de forma óptima.  No debería realizar cálculos innecesarios.
      // Quita la 'x' antes de la descripción (en la línea 95) para ejecutar esta especificación de prueba.

      var startBaseline = Date.now();
      performanceLoop(); // Esto es para establecer un tiempo base para comparar con el tiempo del "shortestPath" (el "performanceLoop" suele tardar unos 6 milisegundos en funcionar).
      var elapsedTimeBaseline = Date.now() - startBaseline;

      var start = Date.now();
      var shortestPathsArr = shortestPaths(largeGraph, 'a', 'b');
      if (!shortestPathsArr) throw Error('shortestPaths no devuelve nada');
      var elapsedTime = Date.now() - start;

      // Si se aplica correctamente, "shortestPaths" debería tomar menos tiempo que el tiempo de la línea de base. La especificación aquí probará si por lo menos termina antes del tiempo de la línea de base multiplicado por 2. Una función subóptima de "shortestPaths" probablemente tomará un par de segundos en completarse (y fallará la especificación).

      expect(elapsedTime).toBeLessThan(elapsedTimeBaseline * 2);
    });
  });
});
