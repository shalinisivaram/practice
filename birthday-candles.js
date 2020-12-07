function birthdayCakeCandles(candles) {
    let max=Math.max(...candles)
    return candles.filter(item => item===max).length;
}
var result=birthdayCakeCandles([3,5,6,3,6]);
console.log(result);