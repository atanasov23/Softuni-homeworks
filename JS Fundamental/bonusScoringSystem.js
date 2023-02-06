function bonusScoringSystem(input){

    let studentNumber = Number(input[0]);

    let numberOfLecture = Number(input[1]);

    let bonus = Number(input[2]);

    let totalBonus = 0;

    let max = 0;

    let studenAttendances = 0;

    for(let i = 0; i < studentNumber; i++){

        totalBonus = (Number(input[i + 3]) / numberOfLecture) * (5 + bonus);

        if(totalBonus > max){

            max = totalBonus;

            studenAttendances = Number(input[i + 3]);

        }

    }
    console.log(`Max Bonus: ${Math.ceil(max)}.`);

    console.log(`The student has attended ${studenAttendances} lectures.`);
}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);