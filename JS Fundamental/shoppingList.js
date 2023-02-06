function shoppingList(input) {

    let oldList = input.shift().split('!');

    let index = 0;

    let endOfloop = input[index];

    while (endOfloop !== 'Go Shopping!') {

        let line = input[index].split(' ');

        let comand = line.shift();

        let productName = '';

        let productName2 = '';

        if (line.length > 1) {

            productName = line.shift();

            productName2 = line.shift();

        } else {

            productName = line.shift();
        }

        let bool = true;

        let getIndexOfElement = 0;

        for (let i = 0; i < oldList.length; i++) {

            if (productName === oldList[i]) {

                bool = false;

                getIndexOfElement = oldList.indexOf(oldList[i]);

            }
        }

        switch (comand) {

            case 'Urgent':

                if (bool) {

                    oldList.unshift(productName);

                }


                break;

            case 'Unnecessary':

                if (!bool) {

                    oldList.splice(getIndexOfElement, 1);

                }

                break;

            case 'Correct':

                if (!bool) {

                    oldList[getIndexOfElement] = productName2;

                }

                break;

            case 'Rearrange':

                if (!bool) {

                    let getValue = oldList[getIndexOfElement];

                    oldList.splice(getIndexOfElement, 1);

                    oldList.push(getValue);


                }

                break;


        }

        index++;

        endOfloop = input[index];


    }

    console.log(oldList.join(', '));

}

shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]));