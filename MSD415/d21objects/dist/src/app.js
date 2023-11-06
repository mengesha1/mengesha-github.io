student1 = {
    studentid: 101,
    quizAnswers: [1, 1, 2, 4]
};
student2 = {
    studentid: 102,
    quizAnswers: [2, 1, 2, 2]
};
student3 = {
    studentid: 103,
    quizAnswers: [3, 1, 3, 4]
};
console.log("expect3:", computestudentscore(student1));
function computrScoeestudent(stu, quizKey) {
    //get the student answer
    var answer = stu.quizAnswers;
    var numcorrect;
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] == quizkey[i]) {
            numcorrect.push(i);
        }
    }
    return numcorrect;
}
