function barcodeGenerator(input) {

    let startNumber = Number(input[0]);
    let finalNumber = Number(input[1]);

         let a = Math.floor(startNumber / 1000) % 10;
         let b = Math.floor(startNumber / 100) % 10;
         let c = Math.floor(startNumber / 10) % 10;
         let d = Math.floor(startNumber % 10);

         let e = Math.floor(finalNumber / 1000) % 10;
         let f =  Math.floor(finalNumber / 100) % 10;
         let g =  Math.floor(finalNumber / 10) % 10;
         let h =  Math.floor(finalNumber % 10);

         let test = "";
            
         for(let one = a; one < e+ 1; one++){

            for(let two = b; two < f + 1; two++){

                for(let three = c; three < g + 1; three++){

                    for(let four = d; four < h + 1; four++){

                
                        if(one % 2 !== 0 && two % 2 !== 0 && three % 2 !== 0 && four % 2 !== 0 ){

                           test +=`${one}${two}${three}${four} `;
                    
                        }
                      
                     }
                 
                }
               
             }
        
         }
         console.log(test);

}
barcodeGenerator(["2347", "6789"]);