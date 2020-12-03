//1. Restate the problem
//This function takes in an array and a integer that is the average of a pair of elements in the array and returns a boolean if thats the case
//2. What are the inputs that go into the problem??
//an array and an integer
//3. What are the outputs?
//a boolean telling the user if there is a pair that equals that average
//4. Do I have enough Info to solve the problem
//Yes, the problem seems pretty straight foward just want to create a way if there is a number in there
//5. How shhould I label peices of data in problem?

function averagePair(array, integer) {
  //Create a left varaible that is equal to 0
  let left = 0;
  //Create a right variable that is 1 less than the array length
  let right = array.length - 1;
  //Create a while loop that is running while left < right
  while (left <= right) {
    //Create plus and minus vairalbes or left +1 and right -1
    let plus = left + 1;
    let minus = right - 1;
    //create if condition that if the array left and array left +1 average equals int
    if (
      array[left] + array[plus] / 2 === integer ||
      array[right] + array[minus] / 2 === integer
    ) {
      //then return true
      return true;
    }
    //at the end of those if statements update the left varaible +1
    left += 1;
    //at the end of those if statements update the right varaible -1
    right -= 1;
  }
  //if at the end of the while loop its not it a if statment then return a false
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
