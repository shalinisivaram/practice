function designerPdfViewer(h, word) {
    return Math.max(...word.split('').map((e) => h[e.charCodeAt(0) - 97] * word.length));
    }
    var s=designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"abc");
    console.log(s); 