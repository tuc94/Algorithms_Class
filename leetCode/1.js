
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
    //count varaible 
    let count = 1;
    //loop through the array 
    for(let i = 0; i < array.length; i++){
        //inner loop through all other stuff and checks if it works
        while(!skip && count !== array.length + 1){
        sum = array[i]
        //need a loop that increments after each loop
        for(let j = i + count; j < array.length; j++){
            sum += array[j]
            if(target < sum){
                j = array.length;
            } else if(sum === target){
                endstart =i;
                end = j;
                count = array.length
                skip = true
            } 
        }
        count += 1;
        }
        count = 0
    }
    output = [endstart,end];
    return output
};

//i=0, j=1
//loop
//i=0, j=2

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