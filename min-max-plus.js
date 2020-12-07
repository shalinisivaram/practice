function miniMaxSum(arr) {
    // will add the array value and store in sum using reduce
    let sum = arr.reduce((a, b) => {
    return a + b;
  });
  //will reduce the max value of array from sum
  const min = sum - Math.max(...arr);
  //will reduce the min value of array from sum
  const max = sum - Math.min(...arr);
  console.log(min + " " + max);
}
var result=miniMaxSum([3,5,6,3,6]);
console.log(result);
