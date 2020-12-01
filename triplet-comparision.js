let a=[3,4,5];
let b=[2,4,7];
function compareTriplets(a, b) {
    let result = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            result[0]++;
        } else if (a[i] != b[i]) {
            result[1]++;
        }
    }
    return result;
}
let points=compareTriplets(a,b);
console.log(points);