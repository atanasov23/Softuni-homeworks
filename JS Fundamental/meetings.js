function meetings(arr) {

    let obj = {}

    for (let el of arr) {

        let [day, name] = el.split(' ');

        if (obj.hasOwnProperty(day)) {

            console.log(`Conflict on ${day}!`);

        } else {

            console.log(`Scheduled for ${day}`);

            obj[day] = name;

        }

    }

    for (let el in obj) {

        console.log(`${el} -> ${obj[el]}`);

    }
}

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);