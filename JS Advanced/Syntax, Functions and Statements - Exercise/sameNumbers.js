function sameNumbers(n) {

    let toString = String(n);

    let firstElement = toString[0];

    let boolean = true;

    let sum = 0;

    for (let el of toString) {

        if (el !== firstElement) {

            boolean = false;

        } else {

            firstElement = el;

        }

        sum += Number(el);

    }

    console.log(boolean);
    console.log(sum);

}
sameNumbers(2222222);