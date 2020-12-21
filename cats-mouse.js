function catAndMouse(x, y, z) {
    let catAdistance=  Math.abs(x - z)
    let catBdistance = Math.abs(y - z)
    if(catAdistance === catBdistance){
        return'Mouse C';
        }
        else if (catAdistance < catBdistance){
            return 'Cat A';
        }
        else {
            return'Cat B';
        }
    }
var result = catAndMouse(1, 2, 3);
console.log(result);