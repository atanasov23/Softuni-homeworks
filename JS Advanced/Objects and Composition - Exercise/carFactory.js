function carFactory(carRequirement) {

    let carObj = {};

    for (let el in carRequirement) {

        switch (el) {

            case 'power':

                if (carRequirement.power >0 && carRequirement.power <= 90) {

                    carObj.engine = {

                        power: 90,
                        volume: 1800
                    }

                } else if (carRequirement.power > 90 && carRequirement.power <= 120) {

                    carObj.engine = {

                        power: 120,
                        volume: 2400
                    }

                } else if (carRequirement.power > 120 && carRequirement.power <= 200) {

                    carObj.engine = {

                        power: 200,
                        volume: 3500
                    }

                }

                break;

            case 'carriage':

                if (carRequirement[el] === 'hatchback') {

                    carObj.carriage = {

                        type: 'hatchback',
                        color: carRequirement.color
                    }

                } else if (carRequirement[el] === 'coupe') {

                    carObj.carriage = {

                        type: 'coupe',
                        color: carRequirement.color

                    }

                }

                break;

            case 'wheelsize':

                let number = carRequirement.wheelsize;

                if (number % 2 === 0) {

                    number--;

                    carObj.wheels = [number, number, number, number]


                } else {

                    carObj.wheels = [number, number, number, number]

                }


                break;

            default: carObj[el] = carRequirement[el];
        }

    }

    delete carObj.color;

    return carObj;

}

console.log(carFactory({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
}).engine);