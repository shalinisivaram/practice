function palindrome (s1){
let rev = s1.split("").reverse().join("");
if(s1 == rev)
return ("Palindrome");
else 
return ("not palindrome");
}
console.log (palindrome ("abcb"));