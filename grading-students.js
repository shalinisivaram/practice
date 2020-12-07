function gradingStudents(grades) {
    // Write your code here
return grades.map(g => (g < 38 || g%5 < 3) ? g : g+(5-(g%5)));
}
var result=gradingStudents([73,67,38,33]);
console.log(result);