// function binarySearch(array, num) {
//   let left = array[0];
//   let middleLen = Math.round(array.length / 2) - 1;
//   let middle = array[middleLen];
//   let end = array[array.length - 1];

//   while (num < end) {
//     if (middle < num) {
//       left = middle + 1;
//     }
//     return array;
//   }
// }

function binarySearch(array, num) {
  let left = array[0];
  let end = array[array.length - 1];
  let middleLen = Math.round(array.length / 2) - 1;
  let middle = array[middleLen];
  let length = middleLen;
  while (num !== middle) {
    if (end < num) {
      length = -1;
      num = middle;
    }
    if (num < middle) {
      let newArray = array.slice(left, middleLen);
      console.log(newArray);
      left = newArray[0];
      end = newArray[newArray.length - 1];
      middleLen = Math.round(newArray.length / 2) - 1;
      middle = newArray[middleLen];
      length = middleLen + 1;
    }
    if (middle < num) {
      let newArray = array.slice(middleLen + 1, end);
      left = newArray[0];
      end = newArray[newArray.length - 1];
      middleLen = Math.round(newArray.length / 2) - 1;
      middle = newArray[middleLen];
      length = middleLen + length + 1;
    }
  }
  return length;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2));
// console.log(binarySearch([1, 2, 3, 4, 5], 3));
// console.log(binarySearch([1, 2, 3, 4, 5], 4));
// console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 3, 4, 8, 9, 11, 12, 15, 16, 17, 19], 15));
