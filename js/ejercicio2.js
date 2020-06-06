function sumaCubitos(...rest) {
  let suma = 0;
  let resultadoCubo = 0;
  for (let i = 0; i < rest.length; i++) {
    resultadoCubo = Math.pow(rest[i], 3);
    console.log(Number(resultadoCubo));
    suma = suma + resultadoCubo;
  }

  return console.log(`La suma de los cubos es: ${suma}`);
}

sumaCubitos(1, 5, 9);
