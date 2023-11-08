const student1 = {
    studentid: 101,
    quizAnswers: [1, 1, 2, 4]
};
const student2 = {
    studentid: 102,
    quizAnswers: [2, 1, 2, 2]
};
const student3 = {
    studentid: 103,
    quizAnswers: [3, 1, 3, 4]
};
const correctAnswers = [3, 1, 2, 4];
function gradeQuiz(quizarray, quizAnswers) {
    let scoreStudent = 0;
    for (let i = 0; i < quizarray.length; i++) {
        if (quizarray[i] === quizAnswers[i]) {
            scoreStudent = scoreStudent + 1;
        }
    }
    return scoreStudent;
}
console.log(gradeQuiz([1, 1, 2, 4], correctAnswers));
export {};
// function computesScoeStudent(stu:student,quizKey:number[]):number[]{
//     //get the student answer
//     const answer = stu.quizAnswers;
//     let numCorrect:number[]=[];
//     for(let i=0;i<answer.length;i++){
//         if (answer[i] === quizKey[i]){
//             numCorrect.push(i);
//         }
//     }
//     return numCorrect;
// }
// console.log("expect3:", computesScoeStudent(student1.quizAnswers,));
