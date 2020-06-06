function getStudentNames(matriz) {
  let newArray = [];
  for (let i = 0; i < matriz.length; i++) {
    newArray.push(matriz[i].name);
  }

  return console.log("El array es:", newArray);
}

let students = [
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" },
  { name: "Luis" },
  { name: "Diego" },
  { name: "Juan" },
];

getStudentNames(students);
