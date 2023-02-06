function convertToObject(obj){

    let json = JSON.parse(obj);

    for(let el in json){

        console.log(`${el}: ${json[el]}`);

    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');