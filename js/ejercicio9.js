function charIndex(cadena, indice) {
  let arr = Array.from(cadena);
  console.log("Tenemos en el array: ", arr);
  console.log("Buscando ", indice);
  let index = arr.indexOf(indice);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], index);
  }
}
charIndex("hello", "l");
