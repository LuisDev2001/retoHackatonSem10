function findLargestNums(matriz) {
  let newArray = [];
  for (let i = 0; i < matriz.length; i++) {
    let mayor = Math.max(...matriz[i]);
    newArray.push(mayor);
  }
  return console.log(
    `Los numeros mayores de la matriz de matrices son ${newArray} 
    y el nuevo array es`,
    newArray
  );
}
let matrices = [
  [4, 2, 7, 1],
  [20, 70, 40, 90],
  [1, 2, 0],
];
console.log(matrices);
findLargestNums(matrices);
