function productOfArray(arr) {
  let length = arr.length;
  if (length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}
