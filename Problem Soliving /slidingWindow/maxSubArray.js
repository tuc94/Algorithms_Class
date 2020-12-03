//1. Restate the problem
//This Function is given an array and interger and takes that array and finds the max sum of number of sub array in the consecutive
//2. What are the inputs that go into the problem??
//An Array and interger
//3. What are the outputs?
//an integer that is the max sum that subarray
//4. Do I have enough Info to solve the problem
//Yes, the problem seems pretty straight foward just want to create a way if there is a number in there
//5. How shhould I label peices of data in problem?

function maxSubarraySum(arr, int) {
  //create a sum object
  let max = 0;
  let maxInt = int;
  //create a for loop for length of arr
  for (let i = 0; i < arr.length; i++) {
    //have sum of upper and lower index be added
    let sum = 0;
    let tempArr = arr.slice(i, maxInt);
    for (let j = 0; j < tempArr.length; j++) {
      sum += tempArr[j];
    }
    if (sum > max) {
      max = sum;
    }
    maxInt += 1;
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));

//Refactored function

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
