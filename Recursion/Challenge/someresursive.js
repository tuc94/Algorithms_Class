const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
  if (array.length === 0) {
    return array;
  }
  let result = someRecursive(array.slice(1), callback);
  if (callback(array[0]) === true) {
    return true;
  }

  if (result === true) {
    return true;
  } else {
    return false;
  }
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
