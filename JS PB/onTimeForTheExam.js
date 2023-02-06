function onTimeForTheExam(input) {

const hourToExam = Number(input[0]);    
const minuteToExam = Number(input[1]);
const hourOfArrival = Number(input[2]);
const minuteOfArrival = Number(input[3]);



const examTimeInSeconds = (hourToExam * 60) + minuteToExam;
const arrivalForExamInSeconds = (hourOfArrival * 60) + minuteOfArrival;

const finalTime = Math.abs(examTimeInSeconds - arrivalForExamInSeconds);

let differentHour = Math.floor(finalTime / 60);
let differentMinutes = finalTime % 60;

let zero = "";

if(differentMinutes < 10){

    zero = "0";

}

if(examTimeInSeconds === arrivalForExamInSeconds){

    console.log("On time");
    
}else if(arrivalForExamInSeconds > examTimeInSeconds && finalTime < 60){


    console.log("Late");
    console.log(`${differentMinutes} minutes after the start`);

}else if(arrivalForExamInSeconds > examTimeInSeconds && finalTime >= 60){

console.log("Late");
console.log(`${differentHour}:${zero}${differentMinutes} hours after the start`);

}else if(arrivalForExamInSeconds < examTimeInSeconds && finalTime <= 30){

    console.log("On time");
    console.log(`${differentMinutes} minutes before the start`);

}else if(arrivalForExamInSeconds < examTimeInSeconds && finalTime < 60){

console.log("Early");
console.log(`${differentMinutes} minutes before the start`);

}else if(arrivalForExamInSeconds < examTimeInSeconds && finalTime >= 60){
    console.log("Early");
    console.log(`${differentHour}:${zero}${differentMinutes} hours before the start`);
}


}


onTimeForTheExam(["10",
"00",
"11",
"00"])