// function bubbleSort(array) {
//   //create a loop that stops when all the elements are in the correct order
//   for (let i = array.length; i !== 0; i--) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j + 1] < array[j]) {
//         let temp = array[j + 1];
//         array[j + 1] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;

//Optimized verions of bubbleSort
function bubbleSort(array) {
  let noSwaps;
  //create a loop that stops when all the elements are in the correct order
  for (let i = array.length; i !== 0; i--) {
    noSwaps = true;
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
