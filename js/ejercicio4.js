function sumita(...rest) {
  let suma = 0;
  for (let i = 0; i < rest.length; i++) {
    suma = suma + rest[i];
  }

  return console.log(suma);
}
sumita(1, 2, 3);
