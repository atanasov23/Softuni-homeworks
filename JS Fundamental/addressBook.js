function addressBook(arr) {

    let obj = {};

    for (let el of arr) {

        let [name, address] = el.split(':');

        obj[name] = address
    }

    let entries = Object.entries(obj).sort();

    for (let i = 0; i < entries.length; i++) {

        console.log(`${entries[i][0]} -> ${entries[i][1]}`);

    }

}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);