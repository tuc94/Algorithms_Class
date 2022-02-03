
var twoSum = function(array, target) {
    // intalize skip variable 
    let skip = false;
    // intailze sum varaible 
    let sum;
    //The k number
    let end = 0;
    let endstart = 0;
    //output array
    let output = [];
    //loop through the array 
    for(let i = 0; i < array.length; i++){
        sum = 0 
        sum += array[i]
        //inner loop through all other stuff and checks if it works
        if(!skip){
        for(let j = i+1; j < array.length; j++){
            sum += array[j]
            if(target < sum){
                j = array.length;
            } else if(sum ===target){
                endstart =i;
                end = j;
            }
        }
        }
    }
    output = [endstart,end];
    return output
};

console.log(twoSum([3,2,3],6)


// var twoSum = function(array, target) {
//     //create a varaible to capture sums
//   let targets = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         targets.shift(array[i]);
//         targets.shift(array[j]);
//       }
//     }
//   }
//   return targets
// };