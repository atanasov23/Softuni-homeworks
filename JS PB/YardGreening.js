function YardGreening(get){

let sum = get * 7.61;

let discount = sum * 0.18;

let finalSum = sum - discount;

console.log(`The final price is: ${finalSum} lv. 
The discount is: ${discount} lv.`);

}

YardGreening(550);
