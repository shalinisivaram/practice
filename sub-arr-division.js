function birthday(s, d, m) {
    let result=0;
    for(let i=0;i<s.length;i++)
    {
        if(s.slice(i, i+m).reduce((a,c)=> a+c)===d){
            result++;
        }
    }
return result;
}
var s=birthday([1,2,1,3,2], 3, 2);
console.log(s);