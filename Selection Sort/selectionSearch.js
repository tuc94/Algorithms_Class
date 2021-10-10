function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        console.log(j);
        lowest = j;
      }
    }
    let temp = array[i];
    array[i] = array[lowest];
    array[lowest] = temp;
  }
  return array;
}
//5,3,4,1,2
console.log(selectionSort([17, 43, 22, 50]));
