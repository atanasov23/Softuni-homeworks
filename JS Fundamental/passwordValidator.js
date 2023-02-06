function passwordValidator(password) {

    let bool = true;

    if (password.length < 6 || password.length > 10) {

        console.log("Password must be between 6 and 10 characters");

        bool = false

    }

    if (!/^[A-Za-z0-9]*$/.test(password)) {

        console.log("Password must consist only of letters and digits");

        bool = false
    }

    if (password.replace(/[^0-9]/g, '').length < 2) {

        console.log("Password must have at least 2 digits");

        bool = false
    }

    if (bool) {

        console.log('Password is valid');
    }
    
}

passwordValidator('hggfdss4');