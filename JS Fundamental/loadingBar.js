function loadingBar(n) {

    let count = n / 10;

    let dot = 10 - count;

    if (count !== 10) {

        console.log(`${n}% [${'%'.repeat(count)}${'.'.repeat(dot)}]`);

        console.log('Still loading...');

    } else {

        console.log(`${n}% Complete!`);

        console.log(`[${'%'.repeat(10)}]`);

    }
    
}

loadingBar(10);