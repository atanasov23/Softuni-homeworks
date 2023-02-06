

class Hex {

    

    constructor(value){

        this.value = value;

    }

    valueOf(){

        return this.value;

    }

    toString(a){
    
       // console.log(this);
        return `0x${this.value.toString(16).toUpperCase()}`;


    }

    plus(objValue){

        let sum = this.value + objValue.value;

     //this.value += objValue.value;

       return new Hex(sum);

    }

    minus(objValue){

        let sum = this.value - objValue.value;

        //this.value += objValue.value;
   
          return new Hex(sum);


    }

    parse(hex){

        return parseInt(hex, 16);


    }

}

let FF = new Hex(255);



let act = FF.toString();


let exp = "0xFF";

let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);


let act2 = a.plus(c).toString();


let exp2 = "0xA5";

let act3 = a.minus(b).toString();

console.log(act3);


let exp3 = "0x5";
