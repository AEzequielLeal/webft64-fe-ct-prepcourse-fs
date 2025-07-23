function retornarPerimetro(lado) {
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:

   var PerimetroDeUnCuadrado = 4 * lado;
   return PerimetroDeUnCuadrado;

}

console.log(retornarPerimetro(2));
console.log(retornarPerimetro(0));

module.exports = retornarPerimetro;
