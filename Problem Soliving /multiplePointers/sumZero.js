//1. Restate the problem
//This function will take an array and loop through the array and if there are a pair of array indexs that have a sum of 0 it will return it and its going to the first one found
//2. What are the inputs that go into the problem??
//An Array
//3. What are the outputs?
//An array with the pair of elements with a sum of 0
//4. Do I have enough Info to solve the problem
//Yes, the problem seems pretty straight foward just want to create a way if there is a number in there
//5. How shhould I label peices of data in problem?

function sumZero(arr) {
  //The array is looped through until it hits an if statement or returns undefied
  for (let i = 0; arr.length > i; i++) {
    //You grab an element based off the count
    let element = arr[i];
    //You create an array that is minus the selected array
    let sliced = arr.slice(-1);
    //Run a loop on that array
    for (let slice of sliced) {
      //If any arrry element sum equals 0 then return that the existing element and the found element
      if (slice + element === 0) {
        return [slice, element];
      }
    }
  }
  //Else statement that if none is found then you return a undefined
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

//Refactored Verison of sumZero
function sumZero(arr) {
  let left = 0;
  let right = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
