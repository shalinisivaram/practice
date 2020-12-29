function angryProfessor(k, a) {
    return (a.filter(x=>x<=0).length < k ? "YES" : "NO");
    
    }
    let s = angryProfessor([4, 3], [-1,-3,4,2]);
    console.log (s);           