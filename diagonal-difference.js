function diagonalDifference(arr) {
const length = arr.length;
    let diagonal1 = 0, 
         diagonal2 = 0;
    for (let i = 0; i < arr.length; i++) {
    
        diagonal1 += arr[i][i];
        
        diagonal2 += arr[length - 1 - i][i];
    }
    
    return Math.abs(diagonal1 - diagonal2); 

}
let arr=diagonalDifference([
    [1, 2, 3],
    [4, 9, 6],
    [7, 8, 7]
]);
console.log(arr);