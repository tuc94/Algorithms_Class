function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(1);

//base case when num === 0
//input is the number that is being decreased by 1 over time
//if we didn't return
