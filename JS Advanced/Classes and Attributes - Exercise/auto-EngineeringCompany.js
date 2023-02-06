function autoEngineeringCompany(input) {

    let register = {};

    for (let el of input) {

        let [carBrand, carModel, producedCars] = el.split(' | ');

        let sum = 0;

        if (register.hasOwnProperty(carBrand)) {

            if (register[carBrand][carModel] !== undefined) {

                sum = Number(register[carBrand][carModel]) + Number(producedCars);

                register[carBrand][carModel] = sum;

            } else {


                register[carBrand][carModel] = producedCars;
            }

        } else {

            register[carBrand] = {

                [carModel]: producedCars

            }
        }

    }

    for (let el in register) {

        console.log(el);

        for(let model in register[el]){

            register[el][model]

            console.log(`###${model} -> ${register[el][model]}`);

        }


    }
}



autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])