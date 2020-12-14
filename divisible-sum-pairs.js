function divisibleSumPairs(n, k, ar) {
    var sum=0;
    for(let i=0; i<n; i++){
        for(let j=(i+1); j<n; j++){
            if((ar[i] + ar[j]) % k === 0){
                sum++;
                
            }
        }
    }
    return sum;
    }
    var k=3;
var s= divisibleSumPairs(6, 3, [1,3,2,6,1,2]);
console.log(s);