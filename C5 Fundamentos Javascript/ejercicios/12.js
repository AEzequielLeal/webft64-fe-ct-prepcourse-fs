function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  if (str1.length === str2.length) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
tienenMismaLongitud("HolaHenry", "HolaSoyHenry");


module.exports = tienenMismaLongitud;