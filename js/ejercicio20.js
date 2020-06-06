function vreplace(cadena) {
  let vocales = ("a", "e", "i", "o", "u");
  console.log(vocales);
  for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i], vocales[i]);
  }
  return;
}
vreplace("apples and bananas");
