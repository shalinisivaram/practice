function pickingNumbers(a) {
    // Write your code here
let biggest = 0
    a.forEach( elem => {
        const subarray = a.filter( subElem => elem-subElem === 0 || elem-subElem === 1);
        if( subarray.length > biggest) biggest = subarray.length;
    });
    return biggest;
}
var result =pickingNumbers([4, 6, 5, 3, 3, 1]);
console.log (result);