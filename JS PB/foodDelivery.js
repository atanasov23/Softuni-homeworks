function foodDelivery(input){

    let chickenMenu = Number(input[0] * 10.35);
    let fishMenu = Number(input[1] * 12.40);
    let vegetarianMenu = Number(input[2] * 8.15);
    let deliveryPrice = 2.50;

    let price = (chickenMenu + fishMenu + vegetarianMenu);
    let percent = price * (20/100);
    let totalSum = price + percent + deliveryPrice;

console.log(totalSum);
}

foodDelivery(["9", "2", "6"]);