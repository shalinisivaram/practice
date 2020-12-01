function simpleArraySum(ar){
    //intialize the value of sum
var sum=0;
//check the array value
for(var i=0;i<ar.length;i++){
    //add the array index value to sum
    sum+=ar[i];
}
//return the sum value
return sum;
}
var result=simpleArraySum([3,5,6,3,6]);
console.log(result);
