function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
if(s < p) return 0;
  let count = 0;
while(s >= m) {
    s -= p;
    p = Math.max(p - d, m);
    if(s < 0) break;
    count += 1;
}
return count;
}
console.log(howManyGames (20,3,6,70));