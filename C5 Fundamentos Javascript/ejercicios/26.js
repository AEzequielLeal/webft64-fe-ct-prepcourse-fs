function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
  var identidad = nombre;
  var saludar = "Hola";
  var espacio = " ";
  var signo = "!";
  var resultdo = saludar + espacio + identidad + signo;
  return resultdo;
}

console.log(obtenerSaludo("Martin"));


module.exports = obtenerSaludo;