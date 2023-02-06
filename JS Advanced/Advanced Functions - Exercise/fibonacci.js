function fibonacci() {

    //let count = 1;
    let n1 = 0;

    let n2 = 1;

    let fib = 0;

    //console.log(1);

    return function () {

        if(fib === 0){


            fib = 1;

            return fib

        }
        
        fib = n1 + n2;

        n1 = n2;
        
        n2 = fib
        
        //onsole.log(fib);
        return fib;
    }

}

let result = fibonacci();

console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())



