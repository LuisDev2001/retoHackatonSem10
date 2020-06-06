function squaresSum(number) {
  let suma = 0;
  for (let i = 1; i <= number; i++) {
    let cuadrados = Math.pow(i, 2);
    suma = suma + cuadrados;
  }
  console.log(`La suma de todos los numeros cuadrados es: ${suma}`);
  return suma;
}
squaresSum(3);
