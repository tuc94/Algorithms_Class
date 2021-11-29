//MY Try

// function digitCount(num) {
//   let stringNum = num.toString();
//   let len = stringNum.length;
//   return len;
// }

//Real Solution

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(314));