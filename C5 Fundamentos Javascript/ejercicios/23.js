function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  var resultado = x % y;
  return resultado;

}

console.log(obtenerResto(10, 5));
console.log(obtenerResto(16, 5));

module.exports = obtenerResto;