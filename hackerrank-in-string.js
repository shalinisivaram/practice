function hackerrankInString(s) {
    let reg = /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/;
    return (s.match(reg))?"YES":"NO";
}
console.log (hackerrankInString ("hereiamstackerrank"));