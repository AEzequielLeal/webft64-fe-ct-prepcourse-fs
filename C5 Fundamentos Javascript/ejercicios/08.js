function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if (Number.isInteger(numero)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
esNumeroEntero(24.67);



module.exports = esNumeroEntero;