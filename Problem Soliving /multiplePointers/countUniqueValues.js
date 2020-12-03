//1. Restate the problem
//This Function is given an array and it loops through the array and returns the count the unique number of values
//2. What are the inputs that go into the problem??
//An Array
//3. What are the outputs?
//a value with the number of unique numbers
//4. Do I have enough Info to solve the problem
//Yes, the problem seems pretty straight foward just want to create a way if there is a number in there
//5. How shhould I label peices of data in problem?

function countUniqueValues(arr) {
  //Have object created to hold unique letters
  let unique = {};
  //create a left variable starts at the index 0
  let left = 0;
  //create a right variable that is the last index of array
  let right = arr.length - 1;
  //create a loop that is left greater than right
  //have the left variable check if its bigger than the right variable
  while (left < right) {
    //have varaible checked with object to hold all unique strinsg
    //Create a left string
    let leftArrVal = arr[left];
    unique[leftArrVal] = (unique[leftArrVal] || 0) + 1;
    //Create a right string
    let rightArrVal = arr[right];
    unique[rightArrVal] = (unique[rightArrVal] || 0) + 1;
    //have the left and right varialbe be updated
    left += 1;
    right -= 1;
  }
  //Return the length of the checked variable
  return Object.keys(unique).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));

//Solution to problem
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
