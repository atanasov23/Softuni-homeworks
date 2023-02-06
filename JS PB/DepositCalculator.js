function depositCalculator(input){

let deposit = Number(input[0]);
let months = Number(input[1]);
let interestRate = Number(input[2]);

let annualInterestRate = deposit * (interestRate/100);

let monthlyInterest = annualInterestRate / 12;

let result = deposit + (months * monthlyInterest);

console.log(result);

}

depositCalculator(["200", "3", "5.7"]);