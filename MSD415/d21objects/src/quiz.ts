//import { count } from "console";

export type Student = {
    id: number
    quizAnswers: number[];
}


export function gradeStudent(quizarray: number[], quizAnswers: number[]): number {
    let scoreStudent = 0;
    for (let i = 0; i < quizarray.length; i++) {
        if (quizarray[i] === quizAnswers[i]) {
            scoreStudent = scoreStudent + 1;
        }
    }
    return scoreStudent;
}
//let stdanswer = [student1.quizAnswers, student2.quizAnswers, student3.quizAnswers];
export function gradeQuiz(stdanswer: number[][], correctAnswers: number[]): number[] {
    let gardQ: number[] = [];
     for (let i = 0; i < stdanswer.length; i++) {
        let count = 0;
        for (let j = 0; j < stdanswer[i].length; j++) {
            if(stdanswer[i][j]===correctAnswers[j]){
                count++;
            }
        }
        gardQ.push(count);
     }
     return gardQ;
}

//IMPLEMENT THIS


/*//let studId =[student1.studentid, student2.studentid, student3.studentid];
// let gradeQ = gradeQuiz();
type Quizlabl = [{
    id: number;
    score: number
}];
export function gradeQuizLabeled(gradeQ:number[][]=[],studid: number[]):Quizlabl{
  
//  const arrAnswers:Quizlabl = [{id:,score:}]
    
//     for (let i = 0; i < gradeQ.length; i++) {
//         let count = 0;
//         for (let j = 0; j < gradeQ[i].length; j++) {
//             if (gradeQ[i][j] === studid[j]) {
//                 count++;
//             }
//            arrAnswers = [{id:studid[j],score:count}]
//         }
//     }
//     return arrAnswers;
// }
//IMPLEMENT THIS*/

