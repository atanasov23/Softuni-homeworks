function repainting(input){

let nylon = Number(input[0]);
let paint = Number(input[1]);
let thinner = Number(input[2]);
let workHour = Number(input[3]);

let paintPercent = Number(input[1] * (10/100));

let nylonSum = (nylon + 2) * 1.50;
let paintSum = (paint + paintPercent) * 14.50;
let thinnerSum = thinner * 5;
let bag = 0.40;

let Sum = nylonSum + paintSum + thinnerSum + bag;

let percentForWorker = (Sum * (30/100) * workHour);

let totalSum = Sum + percentForWorker;



console.log(totalSum);

}

repainting(["5", "10", "10", "1"]);