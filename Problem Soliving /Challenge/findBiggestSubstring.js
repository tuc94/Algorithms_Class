//1. Restate the problem
//A function that takes in a string and looks through the string and finds the larget substring whre all the charecters are diffrent
//2. What are the inputs
//A string
//3. What are the outputs
//A interger with the size of the length of the longest substring
// 4. Do I have any questsion I need asked?

function findBiggestSubString(string) {
  //create varaibles to hold count
  let count = 0;
  //create varaible to hold the large size of a
  let substringLength = 0;
  //create while loop that runs through the size of the string
  while (count < string.length) {
    //Create varaible to hold charecters
    let obj = {};
    let j = 0;
    //have for loop run through the size of a string
    for (let i = count; i < string.length; i++) {
      //check if string charaecter is in obj and add it if so
      let char = string[i];
      if (i + 1 === string.length && obj[char] === undefined) {
        substringLength = Math.max(
          string.slice(count, i + 1).length,
          substringLength
        );
        console.log(substringLength);
        i = string.length;
      }
      if (obj[char] === undefined) {
        obj[char] = 1;
      } else if (obj[char] === 1) {
        substringLength = Math.max(
          string.slice(count, i).length,
          substringLength
        );
        i = string.length;
      }
    }
    //have count varaible be incretemented
    count += 1;
  }
  //return the size of the maxsubstring to the user
  return substringLength;
}

console.log(findBiggestSubString(""));
console.log(findBiggestSubString("rithmschool"));
console.log(findBiggestSubString("thisisawesome"));
console.log(findBiggestSubString("thecatinthehat"));
console.log(findBiggestSubString("longestsubstring"));
console.log(findBiggestSubString("thisishowwedoit"));
