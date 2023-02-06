function solve(input) {

    let passWord = input.shift();


    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'Complete') {

            break;

        }

        let comandSplit = input[i].split(' ');

        switch (comandSplit[0]) {

            case 'Make':

                let comand = comandSplit[1];

                if (comand === 'Upper') {

                    let oldValue = passWord[Number(comandSplit[2])];

                    let getValue = passWord[Number(comandSplit[2])].toUpperCase();

                    passWord = passWord.replace(oldValue, getValue);

                    console.log(passWord);

                } else if (comand === 'Lower') {

                    let oldValue2 = passWord[Number(comandSplit[2])];

                    let getValue2 = passWord[Number(comandSplit[2])].toLowerCase();

                    passWord = passWord.replace(oldValue2, getValue2);

                    console.log(passWord);
                }


                break;

            case 'Insert':

                let index = Number(comandSplit[1]);

                let value = comandSplit[2];

                if (index >= 0 || index <= passWord.length) {

                let split = passWord.split('');

                split.splice(index, 0, value);

                passWord = split.join('');

                console.log(passWord);

                }

                break;

            case 'Replace':

                let curentValue = Number(comandSplit[1].charCodeAt());

                let givenValue = Number(comandSplit[2]);

                if(passWord.includes(comandSplit[1])){

                let result = curentValue + givenValue;

                let fromCharCode = String.fromCharCode(result);

                let value = comandSplit[1]

                let test = `[${value}]`;

                let regEx = new RegExp(test, 'g');

                passWord = passWord.replace(regEx, fromCharCode)

                console.log(passWord);

                }

                break;

            case 'Validation':
                

                let digit = /\d/g;
            
                let lower = /[a-z]/g
            
                let upper = /[A-Z]/g
            
                let valid = /[!@#\$&*~=+-]/g
            
                if(!passWord.match(digit)){
            
                    console.log('Password must consist at least one digit!');
            
                }if(!passWord.match(lower)){
            
                    console.log("Password must consist at least one lowercase letter!");
            
                }if(!passWord.match(upper)){
            
                    console.log("Password must consist at least one uppercase letter!");
            
                }if(passWord.match(valid)){
            
                    console.log("Password must consist only of letters, digits and _!");
            
                }if(passWord.length < 8){
                    
                    console.log("Password must be at least 8 characters long!");
                }
            
                break;


        }

    }

}

solve((['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete']));