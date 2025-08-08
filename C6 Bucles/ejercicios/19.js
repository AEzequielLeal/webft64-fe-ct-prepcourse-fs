function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma = 0;
  for (var i = 1; i <= n; i++) {
    suma = suma + i
  }

  console.log(suma);
  return suma;
}
sumarHastaN(5); // 1 + 2 + 3 + 4 + 5 = 15
sumarHastaN(1); // 1
sumarHastaN(0); // 0


module.exports = sumarHastaN;
