function palindrome(s1){
    var s2 = s1.split("").reverse().join("")
    if(s1 === s2){
        return ("string is palindrome")
    }
    return('String is not palindrome')
}
console.log(palindrome("abab"));