function cinema(input) {

    const r = Number(input[1]);
    const c = Number(input[2]);
    let profit = 0 ; 

switch(input[0]){

    case "Premiere":

    profit = (r * c) * 12;

        break;

    case "Normal":

    profit = (r * c) * 7.50;
        break;

    case "Discount":

        profit = (r * c) * 5;

        break;
}

console.log(`${profit.toFixed(2)} leva`);

}

cinema(["Normal","63", "64"])
  
