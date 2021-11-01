//My Attempt

function insertionSort(array) {
  let temp;
  let sortedArray = [];
  let sortedEle = 0;
  for (let i = 0; i < array.length; i++) {
    sortedEle = array[i];
    for (let j = i -1; 0 <= j; j--) {
      if(sortedEle < array[j]){
        console.log(j)
        array[j+1] = array[j]
        array[j] = sortedEle
      }
    }
  }
  return array;
}

//Correct way 

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,19,76,4]));


