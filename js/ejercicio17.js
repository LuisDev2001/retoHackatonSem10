function diffMaxMin(matriz) {
  let diferencia = 0;
  let min = Math.min(...matriz);
  let max = Math.max(...matriz);

  diferencia = max - min;
  return console.log(`La diferencia es: ${diferencia}`);
}

let lista = [10, 4, 1, 4, -10, -50, 32, 21];
console.log(lista);
diffMaxMin(lista);
