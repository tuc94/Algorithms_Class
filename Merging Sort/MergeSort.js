//My Attempt

function merge(arr1, arr2){
    console.log(arr1,arr2)
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        console.log(i,j)
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
  
  //console.log(merge([], [1,3]));
 
  
  function MergeSort(array) {
    if(array.length <= 1){
      return array;
    }
    let half = Math.floor(array.length / 2);
    let left = array.slice(0,half);
    let right = array.slice(half); 
    return merge(left,right);
  }
  
  console.log(MergeSort([10,24,76,73,71,9]));
  
  //[8,3,5,4]
  //[8,3],[5,4]
  //[8],[3],[5],[4]
  
  //Correct Solution 

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

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([10,24,76,73]));