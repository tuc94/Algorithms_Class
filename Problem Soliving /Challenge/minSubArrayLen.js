//1. Restate the Function?
//This Function takes in a postive array and integer and outputs the amount of array elemnts added togther that are equal to or greter than that integer
//2. What are the inputs?
//A postive integer and integer
//3. What is the output?
//A integer that represents the amount of array elements it took to get over that hump
//4. Any other quetions
//

function minSubArrayLen(array, int) {
  //Create a loop Min Len variable
  let minLen = 0;
  //Create a temp Min Len varaible
  let tempMinLen = 0;
  //Create a sum varaible
  let sum = 0;
  let sumCount = 0;
  //Run a loop that calculates to see how long it takes to hit
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    //if it doesn't it returns a 0
    if (int <= sum) {
      sumCount = i;
      i = array.length;
    }
    if (sum <= !int && i === array.length) {
      return 0;
    }
  }
  tempMinLen = sumCount;
  if (0 < sumCount) {
    for (let i = tempMinLen; i < array.length; i++) {
      sum = 0;
      sum += array[i];
      if (int <= sum) {
        sumCount = Math.min(i, sumCount);
        i = array.length;
      }
    }

    return sumCount;
  }

  //Run a loop to compare other starting points and such to
  //Use Math.min to compare and save new len
  //Return at end the len
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
//console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
