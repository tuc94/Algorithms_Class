function flatten(array) {
  let result = [];

  if (Array.isArray(array[0]) === true) {
    return array[0].map((index) => {
      if (Array.isArray(index) === true) {
        return [].concat.apply([], index);
      } else {
        return index;
      }
    });
  }

  if (array.length === 0) {
    return array;
  }
  result = result.concat(flatten(array.slice(1)));
  console.log(result);
  result.unshift(array[0]);
  return result;
}

//console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
