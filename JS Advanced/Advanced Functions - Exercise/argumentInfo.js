function argumentInfo(...args) {

    let type = new Map();
    let count = new Map();

    for (let el of args) {

        console.log(`${typeof el}: ${el}`);

        let type = typeof el;

        let counter = 0;

        if (count.has(type)) {

            counter++;

            let sum = Number(count.get(type));

            sum++;

            count.set(type, sum);

        } else {

            counter++;
            count.set(type, counter);
        }

    }

    let arr = Array.from(count);

    arr.sort((a, b) => b[1] - a[1]).forEach(a => console.log(`${a[0]} = ${a[1]}`));
    
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }
);