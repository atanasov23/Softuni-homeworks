class Test{
  
    constructor(number){
      
      this.number = number
      
    }
    
    fixed(numberToFixed){
      
      let result = '';
   
      for(let i = 0; i < this.number.length; i++){
        
        
        
         if(this.number[i] == '.'){
           
           for(let a = 0; a <= numberToFixed; a++){

             result += this.number[i];

             i++
             
           }
           
           return Number(result);
           
         }

         result += this.number[i];
        
      }
      
    } 
  
  }
  
  
  let n = new Test('20.7554332');

  let newResult = n.fixed(3);

  console.log(n.number)

  console.log(newResult);

  class Test2{

    constructor(city){

      this.city = city;

    }

  }

  let a = new Test2('Varna');

  a.name = 'Kris'


  console.log(Object.prototype);
