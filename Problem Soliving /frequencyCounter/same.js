//1. Restate the problem 
//This function should take in two arrays of any size and check if the second array is every number in the array squarded for the second in the correct corresponding order
//1. Restate the problem 
//This function should take in two arrays of any size and check if the second array is every number in the array squarded for the second in the correct corresponding order
//2. What are the inputs that go into the problem??
//Two Arrays 
//3. What are the outputs?
//A boolean from if the two arrays are squarded are not
//4. Do I have enough Info to solve the problem
//With the examples given yes I have enough info 
//5. How shhould I label peices of data in problem? 





// function same(ar1,ar2){
// //Checks if ther arrays are the same length and if its not the case its returns false
// if(ar1.length !== ar2.length){
//     return false
// }
// //Loops for each Element in ar1 and ar2
// for (let i = 0; i < ar1.length; i++){
//     //Checks if Element is a number and if it isn't a number it returns false
//     if(typeof ar1[i] !== "number"){
//         console.log
//         return false;
//     } 
//     //Double each ar1 element and check if its the element in the index of whatever
//     else if((ar1[i])**2 !== ar2[i]){
//         return false;
//     }
//     //If at anytime it doesn't match up it stops immediatly and returns False
// }
//     return true;
// //After check is complete then if it mathces up then a true boolean is returned
// }

function same(ar1,ar2){
    //Checks if ther arrays are the same length and if its not the case its returns false
    if(ar1.length !== ar2.length){
        return false
    }
    //Loops for each Element in ar1 and ar2
    for (let i = 0; i < ar1.length; i++){
        //Checks if Element is a number and if it isn't a number it returns false
        if(typeof ar1[i] !== "number"){
            console.log
            return false;
        } 
        //Double each ar1 element and check if its the element in the index of whatever
        else if((ar1[i])**2 !== ar2[i]){
            return false;
        }
        //If at anytime it doesn't match up it stops immediatly and returns False
    }
        return true;
    //After check is complete then if it mathces up then a true boolean is returned
    }

console.log(same([1,2,3],[1,4,9])) //True
console.log(same([1,2,3],[1,9])) //False
console.log(same([1,2,3],[1,9,4])) //False
console.log(same(["a",2,3],["a",2,3])) //Invalid Input 