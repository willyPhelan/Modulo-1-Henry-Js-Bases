# Testing Homework

## Introducción

La idea de esta homework será realizar TDD para el desarrollo de una aplicación en JS utilizando JEST. A continuación se irán detallando paso a paso las funcionalidades que deberá tener el programa y ustedes tendrán que ir haciendo para caso paso:

  1. Armar el asociado a esa funcionalidad
  2. Ejecutarlo chequeando que no pasen
  3. Completar el código JS para hacer pasar el test
  4. Ejecutar y verificar que pase el test sin haber roto ningún test anterior, sino volver a 3 arreglando los errores
  5. Avanzar a la siguiente funcionalidad

## Configuración

JEST ya se encuentra dentro de las dependencias en el `package.json` por lo que simplemente con ejectuar `npm install` es suficiente. Por otro lado también se agregó el script `test` que va a permitir correr todos los tests dentro de la carpeta `homework`.

Inicialmente si ejecutan el comando `npm test` no va a funcionar correctamente ya que no existe ningún test dentro del archivo `index.text.js` de la carpeta `tests`. Pueden realizar una prueba incial poniendo un test simple:

```js
it('Always true', () => {
  expect(true).toBe(true);
});
```

<p align="center">
  <img src="../images/always-true.png" />
</p>

## Instrucciones

Ahora si pueden borrar el test de ejemplo de recién y vamos a comenzar a armar los verdaderos tests usando TDD.

#### TEST ONE

Comprobar que existe una función llamada `checkSeatStatus`. Les dejamos comentado la linea del require que nos va a permitir utilizar la función definida en el archivo `homework.js` dentro de `index.test.js`, descomentarla.

__PISTA__: Deberán chequear que esa variable sea de tipo 'function' (¿Cómo era esto? Estoy seguro que lo vimos en el Prep)

<details>
  <summary>ANSWER TEST CODE</summary>
  
  ```js
  const { checkSeatStatus } = require('../homework');

  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });
  ```
</details>

<p align="center">
  <img src="../images/checkSeatStatus-1-error.png" />
</p>

#### CODE ONE

Ahora escribamos el código para que ese test que acabamos de crear y no está pasando si pase. Para ello tendrás que crear la función `checkSeatStatus` en el archivo `homeowrk.js`. Les dejamos comentado unas lineas al final del archivo para exportar la función para que pueda ser utilizada en otros archivos, descomentarla.

<details>
  <summary>ANSWER CODE</summary>
  
  ```js
  function checkSeatStatus() {

  }

  module.exports = {
    checkSeatStatus
  }
  ```
</details>

<p align="center">
  <img src="../images/checkSeatStatus-1-pass.png" />
</p>

#### TEST TWO

La función `checkSeatStatus` debe recibir como primer parámetro un string, de lo contrario debería arrojar un error del tipo `TypeError` con el texto `First parameter is not a string`.

<details>
  <summary>ANSWER TEST CODE</summary>
  
  ```js
  it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
  });
  ```
</details>

#### CODE TWO

Cuando hacemos TDD buscamos realizar el código mínimo necesario para que los tests pasen, por lo que si los tests no están bien diseñados podrían llevar a un código incorrecto como podría ocurrir en este caso. Nuestra función debe arrojar un `TypeError` si no recibe un string como primer parámetro, pero podríamos simplemente en todos los casos arrojar dicho error y pasaría el test ¿verdad? Por ahora dejemoslo así y más adelante lo corregiremos.

<details>
  <summary>ANSWER CODE</summary>
  
  ```js
  it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
  });
  ```
</details>

#### TEST THREE

Ahora queremos que el segundo parámetro de la función sea un número, de lo contrario debería arrojar un error del tipo `TypeError` con el texto `Second parameter is not a number`.

<details>
  <summary>ANSWER TEST CODE</summary>
  
  ```js
  it('should throw a TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('A', '2')).toThrow(new TypeError('Second parameter is not a number'));
  });
  ```
</details>

#### CODE THREE

Si miramos nuestro código anterior nos daremos cuenta de que no estaba tan bien como creíamos ya que ahora que necesitamos dar una respuesta condicional basada en si el error está en el primer o segundo parámetro debemos modificar dicho código. Es más... fijense que si le pasabamos un string como primer parámetro igualmente iba a arrojar un error. ¿Cómo lo arreglamos?

<details>
  <summary>ANSWER CODE</summary>
  
  ```js
  function checkSeatStatus(row, number) {
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
  }
  ```
</details>