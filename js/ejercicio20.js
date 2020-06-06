function vreplace(cadena) {
  // Cadena.replace(CadenaABuscar, NuevaCadena);
  let vocales = ("a", "e", "i", "o", "u");
  console.log(vocales);
  /*let newString = cadena.replace(vocales, "u");
  console.log(newString);*/
  for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i], vocales[i]);
  }
  return;
}
vreplace("apples and bananas");
