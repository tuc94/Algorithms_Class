// function linearSearch(array, num) {
//   let value = -1;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === num) {
//       value = i;
//       i = array.length;
//     }
//   }
//   return value;
// }

function linearSearch(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([100], 100));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
