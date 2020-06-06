function getBudgets(matriz) {
  let sum = 0;
  for (let i = 0; i < matriz.length; i++) {
    sum = sum + matriz[i].budget;
  }
  return console.log(`La suma de los presupuestos es: ${sum}`);
}

let people = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

getBudgets(people);
