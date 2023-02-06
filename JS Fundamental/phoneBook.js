function phoneBook(arr) {

    let obj = {};

    for (let el of arr) {

        let [name, number] = el.split(' ');

        obj[name] = number

    }

    for (let el in obj) {

        console.log(`${el} -> ${obj[el]}`);

    }

}

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);