function beautifulTriplets(d, arr) {
    let counter = 0;
   for (let i = 0; i < arr.length; i++) {
   for (let j = i+1; j < arr.length; j++) {
    if (arr[j]-arr[i] == d) {
    for (let k = j+1; k < arr.length; k++) {
    if (arr[k] - arr[j] == d) {
   counter++;
   }
    }
   }
   }
   }
    return counter;
   }
   console.log (beautifulTriplets (3, [1,2,4,5,7,8,10]));
