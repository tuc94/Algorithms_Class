// //My Solution 

// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
//   }
  
//   function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
//   }
  
//   function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//       maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//     }
//     return maxDigits;
//   }

//   function radixSort(arr){
//       let digits = mostDigits(arr);
//       let buckets = [[],[],[],[],[],[],[],[],[],[]]
//       for(let k =0; k < digits; k++){
//           let newArr = [];
//           buckets = [[],[],[],[],[],[],[],[],[],[]]
//           for(let i =0; i < arr.length; i++){
//             let digit = getDigit(arr[i],k)
//             buckets[digit].push(arr[i]);
//           }
//           for(let j =0; j < buckets.length; j++){
//               newArr = newArr.concat(buckets[j])
//           }
//           arr = newArr;
//       }
//       return arr;
//   }

//   console.log(radixSort([23,345,5467,12,2345,9852]))

  //Correct Solution

  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          nums = [].concat(...digitBuckets);
      }
      return nums;
  }
  
  radixSort([23,345,5467,12,2345,9852])
  
  
  
  