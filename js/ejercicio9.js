function charIndex(cadena, indice) {
  let arr = cadena.split(", ");
  console.log(arr);
  console.log("Tenemos la cadena:", cadena);
  console.log("Buscando la letra", indice);

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].indexOf(indice);
    console.log(index);
    newArr.push(index);
  }

  return console.log(newArr);
}

let name = "aloja";
letter = "o";

charIndex(name, letter);
