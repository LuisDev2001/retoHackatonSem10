function filtrarCadena(arr) {
  return arr.filter((item) => typeof item === "string");
}
let arr = [18, true, "Luis", false, "Jaime", "Juan", 15, 5000];
console.log("Los string filtrados son:");
console.log(filtrarCadena(arr));
