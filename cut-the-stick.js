function cutTheSticks(arr) {
    arr.sort((a, b) => {
        return a-b;
    })
    let i = 0;
    let result = []
    
    while (i < arr.length) {
        result.push(arr.length - i);
        while (arr[i] === arr[i + 1]) {
            i++;
        }
        i++;
    }
    return result;
}
var s =  cutTheSticks ([5,4,4,2,2,8]);
console.log(s);