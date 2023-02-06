function schoolGrades(arr) {

    let students = {};

    let newObj = {};

    for (let el of arr) {

        let student = el.split(' ');

        let studentName = student.shift();

        if (students.hasOwnProperty(studentName)) {

            for (let grade of student) {

                students[studentName].push(grade);

            }

        } else {

            students[studentName] = student;

        }

    }

    for (let el in students) {

        let gradeSum = 0;

        let gradeCounter = 0;

        for (let i = 0; i < students[el].length; i++) {

            gradeSum += Number(students[el][i]);

            gradeCounter++;

        }

        let averageGrade = gradeSum / gradeCounter;

        newObj[el] = averageGrade;

    }

    let entries = Object.entries(newObj).sort();

    for (let el of entries) {

        console.log(`${el[0]}: ${el[1].toFixed(2)}`);

    }

}

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);