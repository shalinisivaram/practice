function circularArrayRotation(a, k, queries) {
    for ( let i= 1; i<=k; i++)
    {
        a.unshift(a.pop());
    }
    return queries.map(value=>{ 
        return a [value];
    })
    }
var s =  circularArrayRotation ([3, 4, 5], 2, [1, 2]);
console.log(s);
