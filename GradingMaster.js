/* 
 * initialize an arry with a set of 5 test scores
 * calculate the average score
 * display the grade according to the following scale:
 *      90+ = A
 *      80-89 = B
 *      70-79 = C
 *      60-69 = D
 *      <60 = F
 *      
 * BONUS: Get scores from the user instead of initializing them in the program
 */

document.write("<p>Grade calculation program</p>");

let grades=[];
while (grades.length <5) {
    grades.push(Number(prompt("Enter scores ")));
}
for(grades of grades)
    if (grades >=90) {
    document.write("<br> A");
    }
    if (grades <=89 ) {
    document.write("<br>B");
    }
    if (grades <=79) {
    document.write("<br>C");
    }
    if (grades <=69) {
    document.write("<br>D");
    }
    if (grades <60) {
    document.write("<br>F");
    }

let total = 0;
for(let grades of grades){
    total += grades;
    let average=total/grades.length;
document.write("<br> Average Score: " + average);
}


