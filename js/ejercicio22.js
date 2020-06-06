function capLast(cadenaPara) {
  let cadena = cadenaPara.toLowerCase().split("").join("").split(" ");
  for (let i = 0; i < cadena.length; i++) {
    let longitud = cadena[i].length - 1;
    if (longitud > 0) {
      cadena[i] =
        cadena[i].substring(0, 1).toLowerCase() +
        cadena[i].substring(1, longitud) +
        cadena[i].substr(longitud).toUpperCase();
    } else {
      cadena[i] = cadena[i].toUpperCase();
    }
  }
  return cadena.join(" ");
}

console.log(capLast("luis aldair quispe rios"));
console.log(capLast("hello i am dev"));
