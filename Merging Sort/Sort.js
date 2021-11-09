function sort(array) {
  if(array.length === 1){
    return array;
  }
  let len = array.length;
  let half = Math.floor(len / 2);
  let left = array.slice(0,half);
  let right = array.slice(half);
}

console.log(sort([8, 3, 5, 4, 7, 6, 1, 2]));

//[8,3,5,4]
//[8,3],[5,4]
//[8],[3],[5],[4]
