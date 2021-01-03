function findDigits(n) {
    let ans = n.toString().split("").filter(v => n % v == 0);
        return ans.length;
    }
    console.log ( findDigits (12));