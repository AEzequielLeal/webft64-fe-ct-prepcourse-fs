function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:

  var area = alto * ancho;
  return area;
  
}

console.log(obtenerAreaRectangulo(2, 2))
console.log(obtenerAreaRectangulo(0, 2))

module.exports = obtenerAreaRectangulo;
