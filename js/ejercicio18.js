function filterList(arr) {
  return arr.filter((item) => typeof item === "number");
}

//solo enteros
let lista = [1, 2, 3, "x", "y", 10];
console.log(lista);

console.log(filterList(lista));
