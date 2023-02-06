function formatGrade(grade) {

    let gradeShow = '';

    if (grade < 3.00) {

        gradeShow = 'Fail (2)';

    } else if (grade < 3.50) {

        gradeShow = `Poor (${grade.toFixed(2)})`;

    } else if (grade < 4.50) {

        gradeShow = `Good (${grade.toFixed(2)})`;

    } else if (grade < 5.50) {

        gradeShow = `Very good (${grade.toFixed(2)})`;

    } else {

        gradeShow = `Excellent (${grade.toFixed(2)})`;
    }

    console.log(gradeShow);

}

formatGrade(6.00);