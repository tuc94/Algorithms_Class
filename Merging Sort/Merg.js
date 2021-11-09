//My Attempt at merg
function merg(arr1, arr2) {
  let arr1Len = arr1.length;
  let arr1Ele = 0;
  let arr2Len = arr2.length;
  let arr2Ele = 0;
  let sortedLen = arr1Len + arr2Len;
  let sortedArr = [];

  for (let i = 0; i < sortedLen; i++) {
    //check if arr1 element is smaller than arr2
    if (arr1[arr1Ele] < arr2[arr2Ele] || arr1Ele < arr1Len) {
      //push this to the end of the sorted array
      sortedArr.push(arr1[arr1Ele]);
      arr1Ele += 1;
    }


    //check if arr2 element is smaller than arr1
    if (arr2[arr2Ele] < arr1[arr1Ele] || arr2Ele < arr2Len) {
      //push this to end of the sorted array
      console.log(arr2[arr2Ele])
      sortedArr.push(arr2[arr2Ele]);
      arr2Ele += 1;
    }
  }
  return sortedArr;
}

//The Acutal Solution

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}

console.log(merg([], [1,3]));
