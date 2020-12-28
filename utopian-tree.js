function utopianTree(n) {
    var meters = 1;
    if (n != 0)
        for ( let j=1; j <= n; j++)
            j % 2 == 0 ?
                meters ++ :
             meters *= 2;
    return meters;
    }
    var s=utopianTree(3);
console.log(s);