function divide(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 2
  // 5, 5 ---> 1
  // Tu código:
  var resultado = x / y;
  return resultado;
}

console.log(divide(10, 5));
console.log(divide(5, 5));

module.exports = divide;