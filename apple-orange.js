function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter(apple => a + apple >= s && a + apple <= t).length);
    console.log(oranges.filter(orange => b + orange >= s && b + orange <= t).length);
    }
    var result=countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);
    console.log(result);    