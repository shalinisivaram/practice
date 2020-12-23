function sockMerchant(n, ar) {
    var result  = 0;
      ar.sort();
        for( let i = 0; i < n; i++)
        {
            if ( ar [i] == ar[i+1]){
                i++;
                result ++;
            }
    }
    return result;
    }
    var s = sockMerchant (6, [10,20,20,10,10,30,50,10,20]);
    console.log(s);