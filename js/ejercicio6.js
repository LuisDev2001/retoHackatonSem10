function minMax(arr) {
  let mayor = Math.max(...arr);
  let menor = Math.min(...arr);
  return console.log(
    `El menor numero de la lista es: ${menor} y el mayor es: ${mayor}`
  );
}
let listaDatos = [1, 2, 3, 4, 5];
let listaDatos2 = [1, 25, 180, -1, 1000];

minMax(listaDatos);
minMax(listaDatos2);
