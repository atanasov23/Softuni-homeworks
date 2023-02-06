function inventory(input){

    let book = input.shift().split(', ');

    let index = 0;

    let endOfLoop = input[index];

    while(endOfLoop !== 'Craft!'){

        let line = input[index].split(' - ');

        let comand = line.shift();

        let item = '';

        let item2 = '';

        if(comand === 'Combine Items'){

            //item = line.shift();
            twoItems = line.shift().split(':'); 

            item = twoItems.shift();

            item2 = twoItems.shift();
        }else{

            item = line.shift();
        }

        
        let bool = false;

        let itemIndex = 0;

        for(let i = 0; i < book.length; i++){

            if(item === book[i]){

                bool = true;

                itemIndex = book.indexOf(book[i]);

            }

        }

        
        switch(comand){

            case 'Collect':

            if(!bool){

                book.push(item);

            }

            break;

            case 'Drop':

            if(bool){

                book.splice(itemIndex, 1);

            }

            break;

            case 'Combine Items':

            if(bool){

                book.splice(itemIndex + 1,0, item2);

            }

            break;

            case 'Renew':

            if(bool){

                let getItemValue = book.splice(itemIndex,1).join();

                book.push(getItemValue);
            }

            break;


        }

        index++;

        endOfLoop = input[index];

    }

    console.log(book.join(', '));

}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]);