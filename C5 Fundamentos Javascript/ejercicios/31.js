// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  var elevar = Math.pow(num, 2);
  return elevar;
}
console.log(elevarAlCuadrado(6));
console.log(elevarAlCuadrado(0));

module.exports = elevarAlCuadrado;
