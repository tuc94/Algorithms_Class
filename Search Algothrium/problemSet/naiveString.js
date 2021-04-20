function naiveSearch(array, string) {
  let first = string[0];
  let len = string.length;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === first) {
      for (let j = 0; j < len; j++) {
        if (array[i + j] !== string[j]) {
          break;
        }
        if (j === len - 1) {
          count += 1;
        }
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie  loled", "lol"));
