function beautifulDays(i, j, k) {
    let count=0
 
 for(let a=i;a<=j;a++)
 {
    let b=a.toString().split('').reverse().join('');
     let sol =Math.abs((a-b)/k)
     if(Number.isInteger(sol))
     {
       count+=1
     }
 }
 return count;
 }
 let result = beautifulDays (20, 23, 6);
 console.log(result);