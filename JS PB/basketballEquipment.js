function basketballEquipment(input){

let sneakers = input - (input * (40/100));
let basketballTeam = sneakers - (sneakers * 0.20);
let ball = basketballTeam / 4;
let basketballAccessories = ball / 5;

console.log(sneakers + basketballTeam + ball + basketballAccessories + Number(input));
  
}

basketballEquipment([365]);