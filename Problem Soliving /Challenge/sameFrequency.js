//1. Restate the problem
//This function is given two integers and sees if they are the same freuqncy or same amount of numbers like anagram of another
//2. What are the inputs that go into the problem??
//two ints
//3. What are the outputs?
//a boolean telling the user if its same frequency or not
//4. Do I have enough Info to solve the problem
//Yes, the problem seems pretty straight foward just want to create a way if there is a number in there
//5. How shhould I label peices of data in problem?

function sameFrequency(int1, int2) {
  //Create an obj1 to hold int1 content count
  let obj1 = {};
  //create an obj2 to hold int2 content count
  let obj2 = {};
  //loop through int1
  for (number of int1.toString()) {
    //have each unique number in int be counted and given a value
    obj1[number] = (obj1[number] || 0) + 1;
  }
  //loop through int2
  for (number of int2.toString()) {
    //have each unique number in int be counted and given a value
    obj2[number] = (obj2[number] || 0) + 1;
  }
  //have another loop that is the length of obj1
  for (let number in obj1) {
    //have the loop check if they have the same amount of numbers
    if (!(number in obj2)) {
      //if not then you return false
      return false;
    }
    if (obj1[number] !== obj2[number]) {
      return false;
    }
  }
  //At end of loop if it doesn't hit a if statment you print out a true
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
