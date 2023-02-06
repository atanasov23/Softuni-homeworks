(function stringExtension(str34) {

    let str = 'daadad';

    

    String.prototype.ensureStart = function (input) {

        if (str.startsWith(input)) {

            return str;

        } else {

            //str = `${input} ${str}`

            return `${input}${str}`;
        }

    }


    String.prototype.ensureEnd = function (input) {

        if (str.endsWith(input)) {

            return str;

        } else {

           // str = `${input} ${str}`

            return `${str} ${input}`;
        }

    }

    String.prototype.isEmpty = function (input) {

        if (input === '') {

            return true;

        } else {

            return false;
        }

    }

    String.prototype.truncate = function (input) {

        let bool = false;

        let result = '';

        if (input < 4) {

            result = '.'.repeat(2)

            return result

        }

        if (bool) {

            result = str.slice(0, n - 3);

          //  str = result

            return `${result}...`
        }

        if (str.length < input) {


            return str

        } else {

           

            let n = 0;

            for (let i = str.length; i > 0; i--) {

                if (str[i] === ' ') {

                    result = str.slice(0, i);

                   // str = result

                    return `${result}...`

                } else {

                    bool = true;
                }

                n = i;

            }

            result = str.slice(0, n);

           // str = result

            return `${result}...`
        }
    }

    String.format = function (string, ...args) {

        if (string.includes('{0}')) {

            if (string.includes('{1}')) {

                if (args.length > 1) {

                    string = `${string.replace('{0}', args[0])}`;

                    string = `${string.replace('{1}', args[1])}`;

                    string = `${string.replace('{2}', args[2])}`;

                    return string;
                }else{

                    return `${string.replace('{0}', args[0])}`;

                }
            }

        }
    }



    //console.log(str.ensureStart('quick brown fox jumps over the lazy dog'));

  // console.log(String.format(str, 'quick', 'fox', 'lazy', 'bananas'));


})('quick brown fox jumps over the lazy dog')