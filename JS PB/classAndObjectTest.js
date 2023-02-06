
class Cars{
    
    constructor(model,price,color,region){

        this.model = model;
        this.price = price;
        this.color = color;
        this.region = region;

        this.congratulation = function(){

            const a = price + 200;

            if(a < 20000){

                console.log(`Congratulation price is ${a}`);
            }

            
        }

    }

}

const audi = new Cars('Audi', 4000, 'black', 'Varna');
const bmw = new Cars('Audi', 10000, 'black', 'Varna');
const skoda = new Cars('Audi', 22000, 'black', 'Varna');
const opel = new Cars('Audi', 3500, 'black', 'Varna');

//console.log(audi.congratulation());
//console.log(bmw.congratulation());
//console.log(skoda.congratulation());
//console.log(opel.congratulation());


audi["color"] = 'white';
//console.log(audi.color);


opel["color"] = 'green'
 //console.log(opel.color);


  