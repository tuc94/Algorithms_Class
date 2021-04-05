function binarySearch(array, num) {
  let min = 0;
  let max = array.length - 1;
  let average = Math.floor((max + min) / 2);
  while (num !== array[average]) {
    if (max < min) {
      return -1;
    }
    if (array[average] < num) {
      min = average + 1;
      average = Math.floor((max + min) / 2);
    }
    if (num < array[average]) {
      max = average - 1;
      average = Math.floor((max + min) / 2);
    }
  }
  return average;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 3, 4, 8, 9, 11, 12, 15, 16, 17, 19], 15));
