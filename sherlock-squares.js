function squares(a, b) {
    let numofsquares = 0;
    for (let i=0; i<=b; i++){
        let square = i*i;
        if (square >= a && square <=b ){
            numofsquares++;
        }
        if (square >b){
            break
        }
    }
    return numofsquares;
    }
console.log (squares (24, 49)); 