function shopping(input){

let budget = Number(input[0]);
let videoCardPrice = Number(input[1] * 250);
let procesorsPrice = Number(input[2]) * (videoCardPrice * 0.35);
let ramPrice = Number(input[3]) * (videoCardPrice * 0.10);

let finalPrice = videoCardPrice + procesorsPrice + ramPrice;

if(Number(input[1]) > Number(input[2])){
 finalPrice -= finalPrice * 0.15; 
}

if(finalPrice > budget){

console.log(`Not enough money! You need ${Math.abs((budget - finalPrice)).toFixed(2)} leva more!`);
}else{

console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
}

}

shopping(["500",
"200",
"80",
"2",
"0.05"])