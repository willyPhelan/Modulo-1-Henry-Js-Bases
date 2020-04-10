
function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2

}

function cacheFunction(cb) {
  // Usa closures para crear un cache para la funcion cb.
  // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion
  // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb
  // deberia retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};