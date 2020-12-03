//1. Restate the problem?
// This function takes in an array and an integer and based off that integer finds the max amount of sum based on that possible amount of intergers added up
//2. it is the inputs?
//It is an array and a interger
//3. What is the output?
// an integer that is the max sum of the entire array with the amount of integers
//4. do I have enough information?
//now I do since I know its a subarray not any part of the array mixed togther

function maxSubarraySum(array, int) {
  //create a sum variable and make it equal to 0
  let maxSum = 0;
  let tempSum = 0;
  //create a four loop based on the length of the array till it i < int
  if (array.length < int) {
    return null;
  }
  for (let i = 0; i < int; i++) {
    //This loop should get the maximum amount of array
    maxSum += array[i];
  }
  tempSum = maxSum;
  //Have a second for loop that is based off the size of array
  for (let i = int; i < array.length; i++) {
    //create a tempary sum of the based on int - int and array of int
    tempSum = tempSum + array[i] - array[i - int];
    //check whats bigger
    maxSum = Math.max(tempSum, maxSum);
  }
  //At the end of the the loop return the max
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
