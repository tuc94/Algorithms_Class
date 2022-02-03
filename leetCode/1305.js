var getAllElements = function (root1, root2) {
  //Intalize array that will be returned
  let arr = [];
  //intialize final array
  let finArr = [];
  //Loop through first tree
  for (let i = 0; i < root1.length; i++) {
    //Grab elements from each array and store it in array
    arr.push(root1[i]);
  }
  for (let j = 0; j < root2.length; j++) {
    //Grab elements from each array and store it in array
    arr.push(root2[j]);
  }
  console.log(arr);
  let min = arr[0];
  let minIndex = 0;
  while (typeof arr !== 'undefined' || arr.length !== 0) {
    //loop through array
    for (z = 0; z < arr.length; z++) {
      //sort it with max and min
      if (arr[z] < min) {
        min = arr[z];
        minIndex = z;
      }
    }
    finArr.push(min);
    arr = arr.filter(function (el) {
      return el !== min;
    });
  }
  return finArr;
};

let root1 = [2, 1, 4];
let root2 = [1, 0, 3];
console.log(getAllElements(root1, root2));

// let arr = [1,2,5,6,10]

// function tuc (value){
//   return value !== 1;
// }

// let buck = arr.filter(tuc);

// console.log(buck)
