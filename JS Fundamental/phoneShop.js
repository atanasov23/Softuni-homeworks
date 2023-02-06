function phoneShop(input){

    let phones = input.shift().split(', ');

    let index = 0;

    let end = input[index];

    while(end !== 'End'){

        let line = input[index].split(' - ');

        let comand = line.shift();

        let phone1 = '';

        let phone2 = '';

        let phone = line.shift().split(':');

        if(phone.length < 2){

            phone1 = phone[0];

        }else{

            phone1 = phone[0];

            phone2 = phone[1];

        }

        let bool = false;

        let getIndex = 0;

        for(let el of phones){

         if(phone1 === el){

            bool = true;

            getIndex = phones.indexOf(el);

           }

       }


        switch(comand){

            case 'Add':

            if(!bool){

            phones.push(phone1);
  
            }

            break;

            case 'Remove':

            if(bool){

                phones.splice(getIndex, 1);

            }

            break;

            case 'Bonus phone':

            if(bool){

                phones.splice(getIndex + 1,0, phone2);
            }

            break;

            case 'Last':

            if(bool){

            let getValue = phones.splice(getIndex,1).join(' ');

            phones.push(getValue);

            }

            break;

        }

        index++;

        end = input[index];

    }

    console.log(phones.join(', '));

}

phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]));