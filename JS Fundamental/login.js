function login(input) {

    let index = 0;

    let password = input[index];

    let reversePass = '';

    let counterLog = 0;

    index++;

    for (let i = password.length - 1; i >= 0; i--) {

        reversePass += password[i];

    }

    while (reversePass !== input[index]) {

        counterLog++;

        if (counterLog > 3) {

            console.log(`User ${password} blocked!`);

            return;

        }

        console.log("Incorrect password. Try again.");

        index++;

    }

    console.log(`User ${password} logged in.`);

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);