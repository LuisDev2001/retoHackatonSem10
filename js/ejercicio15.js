function multiplyByLength(matriz) {
  let cantidadArr = matriz.length;
  let newArr = [];
  for (let i = 0; i < matriz.length; i++) {
    let multiplicacion = matriz[i] * cantidadArr;
    newArr.push(multiplicacion);
  }
  return console.log(
    "La multiplicacion de los valores en esta matriz",
    matriz,
    "es",
    newArr
  );
}

let arr = [2, 3, 1, 0];
multiplyByLength(arr);
