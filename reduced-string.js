function superReducedString(s) {
    let res = s.split('');
     for(let i = 0; i < res.length; i++){
       if(res[i] === res[i+1]){
         res.splice(i, 2);
         i = -1;
        }
      }
     return res.length === 0 ? 'Empty String' :res.join('');
    }
console.log (superReducedString("aaabccddd")); 