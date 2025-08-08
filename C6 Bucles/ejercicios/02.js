function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (booleano1 && booleano2) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

esVerdaderoYFalso("", 0);
esVerdaderoYFalso(1, "hola");

module.exports = esVerdaderoYFalso;
