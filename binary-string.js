function beautifulBinaryString(b) {
    let count = b.match(/010/g);
    if (count == null)
    return 0;
    else
     return count.length;
}
console.log (beautifulBinaryString("0101010"));