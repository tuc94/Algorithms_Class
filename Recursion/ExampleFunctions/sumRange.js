function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

//base case when num === 0
//input is the number that is being decreased by 1 over time
//if we didn't return then the function would run forever

// 4 + sumRange(3)
//3 + sumRange(2)
//2 + sumRange(1)
//1

// 4 + 6
//3 + 3
//2 + 1
//1
