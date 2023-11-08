
//use this file for any code you want to try out
type student = {
    id: number
    quizAnswers: number[];
}


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
}
const correctAnswers = [3, 1, 2, 4];

function gradeQuiz(quizarray: number[], quizAnswers: number[]): number {
    let scoreStudent = 0;
    for (let i = 0; i < quizarray.length; i++) {
        if (quizarray[i] === quizAnswers[i]) {
            scoreStudent = scoreStudent + 1;
        }
    }
    return scoreStudent;
}
console.log(gradeQuiz([1, 1, 2, 4], correctAnswers));



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


