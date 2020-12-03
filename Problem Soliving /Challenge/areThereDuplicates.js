//1. Restate the problem
//This function is given an array of strings or ints and the function will return a boolean if they have any duplicates
//2. What are the inputs that go into the problem??
//a gropu of ints or strings
//3. What are the outputs?
//a boolean telling the user if there are duplicates or not
//4. Do I have enough Info to solve the problem
//Yes, the problem seems pretty straight foward just want to create a way if there is a number in there
//5. How shhould I label peices of data in problem?

function areThereDuplicates() {
  //create an object to count the number of items in
  let elements = {};
  //Loop through the arr
  let array = Object.values(arguments);
  for (let element of array) {
    //caputure the value of each key in the object
    elements[element] = (elements[element] || 0) + 1;
  }
  //create a second loop that is the elements in the array
  for (let element in elements) {
    //if one of the keys has a value greater than 2 than return a true
    if (1 < elements[element]) {
      return true;
    }
  }
  //Return false at the end
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates());
