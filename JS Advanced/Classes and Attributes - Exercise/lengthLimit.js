class Stringer{

    constructor(string, length){

        this.innerString = string;
        this.innerLength = length;

    }

    

    toString(){

        let string = this.innerString.split('');

        if(this.innerString.length > this.innerLength){

           string.splice(-this.innerLength);

          string = `${string.join('')}...`

            return string

        }else if(this.innerLength === 0){

            return `...`

        }else{

            return string.join('')
        }

    }

    increase(length){

        this.innerLength += length;


    }

    decrease(length){

        if(length == undefined){

            this.innerLength = 0;

        }else{

        if(this.innerLength - length < 0){

            this.innerLength = 0;

        }else{

            this.innerLength -= length;
        }

    }


    }


}

let test = new Stringer("Test", 5);

test.decrease(3);

console.log(test.toString());

test.decrease(5);

console.log(test.toString());

test.increase(6);

console.log(test.toString());