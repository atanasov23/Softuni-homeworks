function employees(arr) {

    let list = {};

    for (let el of arr) {

        list = { name: el, personalNumber: el.length };

        console.log(`Name: ${list.name} -- Personal Number: ${list.personalNumber}`);
    }



}

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);