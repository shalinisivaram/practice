function bonAppetit(bill, k, b) {
    bill.splice(k,1);
    let total = (bill.reduce ((a,c) => a + c)/2);
    if(total == b){
        return console.log("Bon Appetit")}
        else{
        return console.log(b - total);    
        }
    }
        var result=bonAppetit([2, 4, 6], 2, 6);
        console.log(result);  