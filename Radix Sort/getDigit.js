//My Implementation 

// function getDigit(num, place) {
//   let stringNum = num.toString();
//   let len = stringNum.length -1;
//   let digit = stringNum[len - place];
//   if (digit === undefined){
//     return 0
//   }
//   return digit;
// }

//Actual Implemenation

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(12345, 0));
