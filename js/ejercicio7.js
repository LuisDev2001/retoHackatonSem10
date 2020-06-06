function formatPhoneNumber([a, b, c, d, e, f, g, h, i, j]) {
  return console.log(`(${a}${b}${c}) - ${d}${e}${f} ${g}${h}${i}${j}`);
}
let numbers = [0, 1, 2, 3, 4, 5, 7, 8, 9];
formatPhoneNumber(numbers);
