function findNemo(cadena) {
  let palabra = "Nemo";
  let posicion = cadena.indexOf(palabra);
  if (posicion !== -1) {
    console.log("¡Encontré a Nemo en la posicion " + posicion + "!");
  } else {
    console.log("No encontré lo que estás buscando");
  }
  return;
}

findNemo("I am finding Nemo !");
findNemo("I am finding !");
findNemo("I am finding finding findingNemo !");
