//1. Restate the problem
//This function takes in two strings and if the first string is a Subsquence then returns a true boolean
//2. what are the inputs?
// two strings
//3. what are the outputs?
// a boolean
//4. Do you have enough information?
//Yes it seems simple enough

// function isSubsequence(string1, string2) {
//   //Create object to hold string information
//   let obj = {};
//   //create a left varialbe that is equal to 0
//   let left = 0;
//   //create a right varaible that is equal to length of string 2 minus 1
//   let right = string2.length;
//   //run a loop to chapter the object of string 1
//   for (charater of string1) {
//     obj[charater] = (obj[charater] || 0) + 1;
//   }
//   const keys = Object.keys(obj);
//   //create a while loop that is left < right
//   while (left < right) {
//     //Obj1
//     let obj1 = {};
//     //Obj2
//     let obj2 = {};
//     //create a plus variable that is left varaible plus lenth of string1
//     let plus = left + string1.length;
//     //create string that is slice of left and right
//     let leftPlus = string2.slice(left, plus);
//     //create a minus variable thatt is the right varaible minus length of string1
//     let minus = right - string1.length;
//     //create string that is slice of left and right
//     let rightMinus = string2.slice(minus, right);

//     //create two loops to capture the makeup of the strings
//     for (let charater of leftPlus) {
//       obj1[charater] = (obj1[charater] || 0) + 1;
//     }
//     //Another One
//     for (let charater of rightMinus) {
//       obj2[charater] = (obj2[charater] || 0) + 1;
//     }

//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     let count1 = 0;
//     let count2 = 0;
//     for (let i = 0; i < keys1.length; i++) {
//       let correctKey = keys[i];
//       if (!(keys1[i] in obj)) {
//         count1 += 1;
//       }
//       if (obj1[correctKey] !== obj[correctKey]) {
//         count1 += 1;
//       }
//       if (keys1[i] !== correctKey) {
//         count1 += 1;
//       }
//     }
//     for (let i = 0; i < keys2.length; i++) {
//       let correctKey = keys[i];
//       if (!(keys2[i] in obj)) {
//         count2 += 1;
//       }
//       if (obj2[correctKey] !== obj[correctKey]) {
//         count2 += 1;
//       }
//       if (keys2[i] !== correctKey) {
//         count2 += 1;
//       }
//     }

//     console.log(obj1, obj2);

//     if (count1 === 0 || count2 === 0) {
//       return true;
//     }
//     left += 1;
//     right -= 1;
//   }
//   //Otherwise return a false
//   return false;
// }

function isSubsequence(string1, string2) {
  if (string2.legnth < string1.legnth) {
    return false;
  }

  let i = 0;
  let j = 0;
  let left = string1.length;
  let right = string2.length;
  while (i < left && j < right) {
    if (string1[i] == string2[j]) {
      i += 1;
      j += 1;
    } else {
      j += 1;
    }
    if (i === left) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
