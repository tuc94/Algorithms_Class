//1. Restate the problem 
//This Function is given two strings and checks if the two strings are anagrams of each other or the same amount of letters in diffrent order and returns a boolean
//2. What are the inputs that go into the problem??
//two strings 
//3. What are the outputs?
//a boolean telling the user if its a anagram or not
//4. Do I have enough Info to solve the problem
//Yes, the problem seems pretty straight foward just want to create a way if there is a number in there
//5. How shhould I label peices of data in problem? 

function validAnagram(str1,str2){
//intail check to see if the stirngs are the same length and if not return false
    if(str1.length !== str2.length){
        console.log("ouch")
        return false
    }
//create objects to old unique letters
let letters1= {};
let letters2 = {};
//run a loop of the first string 
for(letter of str1){
        //Grab all the unique letters and count of often they occur in the string
        letters1[letter] = (letters1[letter] || 0) + 1; 
}
//run a loop of the second string 
for(letter of str2){
    //Grab all the unique letters and count of often they occur in the string
    letters2[letter] = (letters2[letter] || 0) + 1; 
}

//console.log(letters1)
//console.log(letters2)
//run a simple for loop to see if the objects are the not same for the unique letters and return false
for(let letter in letters1){
    if(!(letter in letters2)){
        return false
    }

    if(letters1[letter] !== letters2[letter]){
        return false
    }

}
return true
//else statement with return true statement

}

console.log(validAnagram("",""))
console.log(validAnagram("qwerty","qeywrt"))
console.log(validAnagram("qwerty","qeyrrt"))


//Solution to the problem on UDEMY 

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')