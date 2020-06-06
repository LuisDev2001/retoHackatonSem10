function toArray(obj) {
  let result = Object.keys(obj).map(function (key) {
    return [String(key), obj[key]];
  });
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  return result;
}

let obj = {
  a: 5,
  b: 7,
  c: 51,
  d: 75,
};

toArray(obj);
