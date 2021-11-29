// //My Attempt 

// function mostDigits(arr) {
//     let biggest = 0;
//     for(let i=0; i < arr.length; i++){
//         let len = arr[i].toString().length;
//         if(biggest < len){
//             biggest = len;
//         }
//     }
//     return biggest;
//   }

  //Real Solution

  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  console.log(mostDigits([12,34,56,78]))