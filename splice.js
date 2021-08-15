const s=["hello","hi","shal","sivaram"]
s.splice(1,0,"welcome")
console.log(s)

s.splice(4,1,"world")
console.log(s)

let removed = s.splice(1,2)
console.log(removed)
console.log(s)