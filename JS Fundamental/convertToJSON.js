function convertToJSON(firstName, lastName, hairColor){

    let obj = {
        
        name:firstName,
        lastName,
        hairColor
    }

    let convert = JSON.stringify(obj);

    console.log(convert);

}

convertToJSON('George', 'Jones', 'Brown');