//my attempt
function pivotHelper (array,start,end){
    function swap(array, swapID,i){
        let temp = array[i]
        array[i] = array[swapID];
        array[swapID] = temp; 
    }

     start = 0;
     end = array.length -1;
     let newInd = 0;

     for(let i= start + 1; i <= end; i++){
         if(array[i] < array[start]){
             newInd += 1;
             swap(array, newInd,i);
             console.log(array)
         }
     }
     return(array,start,newInd)
     return newInd;
}

console.log(pivotHelper([4,3,2,1],0,4));


  
  //Correct attempt
  // Version with ES2015 Syntax
  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  pivot([4,8,2,1,5,7,6,3])
  
  