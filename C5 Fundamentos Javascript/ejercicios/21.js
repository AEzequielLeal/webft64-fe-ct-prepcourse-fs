function multiplica(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la multiplicacion de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 50
  // 5, 5 ---> 25
  // Tu código:
  var resultado = x * y;
  return resultado;
}

console.log(multiplica(10, 5));
console.log(multiplica(5, 5));

module.exports = multiplica;