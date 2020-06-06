function countdown(number) {
  let newArr = [];
  for (let i = number; i >= 0; i--) {
    newArr.push(i);
  }
  return console.log(newArr);
}

countdown(5);
countdown(15);
