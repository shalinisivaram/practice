function minimumDistances(a) {
    let res = a.length
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                if (j - i < res) res = j - i;
            }
        }
    }
    return (res != a.length) ? res : -1;
}
console.log (minimumDistances ([7,1,3,4,1,7]));