function toyShop(input){

    let trip = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

let sum = (puzzle * 2.60) + (talkingDoll * 3) + (teddyBears * 4.10) + (minions * 8.20) + (trucks * 2);
let toyNumber = 0;
let discount = 0;


for(let a = 1; a < input.length; a++){
    toyNumber += Number(input[a]);
}

if(toyNumber >= 50){
discount = sum * 0.25;
}

let allSum = sum - discount; 
let profit = allSum - (allSum * 0.1);


if(profit < trip){
  


 console.log(`Not enough money! ${Math.abs(profit - trip).toFixed(2)} lv needed.`);
}else{

   console.log(`Yes! ${ Math.abs(profit - trip).toFixed(2)} lv left.`);


}

}

toyShop(["320","8","2","5","5","1"]);

 let arr = [10,20];

console.log(arr[0] + arr[1]);