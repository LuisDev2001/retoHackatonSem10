function repeat(elemto, tiempos) {
  let newArr = [];
  for (let i = 1; i <= tiempos; i++) {
    newArr.push(elemto);
  }
  return console.log("El resultado de las repeticiones es", newArr);
}
repeat(13, 5);
repeat(13, 10);
repeat(13, 7);
repeat(13, 100);
