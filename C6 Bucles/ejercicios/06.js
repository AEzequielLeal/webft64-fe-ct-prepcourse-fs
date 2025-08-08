function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num >= 100 && num <= 999) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}
tieneTresDigitos(99);
tieneTresDigitos(100);
tieneTresDigitos(1000);


module.exports = tieneTresDigitos;
