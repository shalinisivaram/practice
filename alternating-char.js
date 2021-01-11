function alternatingCharacters(s) {
    let count = 0;
    for(let i=0; i< s.length -1; i++)
    if (s.charAt(i) == s.charAt(i+1))
    count++
    return count;
    }
    console.log(alternatingCharacters ("AABAAB"));