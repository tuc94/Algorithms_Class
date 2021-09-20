function selectionSort(array) {
  let swaps;
  //create a loop that stops when all the elements are in the correct order
  for (let i = array.length; i !== 0; i--) {
    swaps = false;
    let min;
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[0]) {
        min = array[j];
        swaps = true;
      }
    }
    if (swaps) {
      let changeElement = array.indexOf(min);
      let orginal = array[0];
      console.log(changeElement, orginal);
      array[0] = min;
      array[changeElement] = orginal;
    }
    if (!swaps) break;
  }
  return array;
}

// function selectionSort(array) {
//   //Create a loop that looks at all the elements
//   let swap;

//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//       swap = true
//     }
//   }
//   //element of min
//   console.log(min)
//   let changeElement = array.indexOf(min);
//   let orginal = array[0];
//   console.log(changeElement, orginal)
//   array[0] = min;
//   array[changeElement] = orginal;
//   return array;
// }

//5,3,4,1,2
console.log(selectionSort([34, 22, 10, 19, 17]));
