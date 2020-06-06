function objectToArray(obj) {
  let result = Object.keys(obj).map(function (key) {
    return [String(key), obj[key]];
  });
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  return result;
}

let objeto = {
  likes: 2,
  dislikes: 3,
  followers: 10,
};

objectToArray(objeto);
