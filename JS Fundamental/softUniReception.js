function softUniReception(input) {

    let studentInReception = Number(input[input.length - 1]);

    let employers = 0;

    let hours = 0;

    for (let i = 0; i < input.length - 1; i++) {

        employers += Number(input[i]);

    }

    while (studentInReception > 0) {


        studentInReception -= employers;

        hours++;

        if (hours % 4 === 0) {

            hours++;

        }

    }

    console.log(`Time needed: ${hours}h.`)

}

softUniReception(['3','2','5','40']);