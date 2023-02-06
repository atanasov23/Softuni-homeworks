function thePyramidOfKingDjoser(base, inc) {

    let stone = 0;

    let marble = 0;

    let lapisLazuli = 0;

    let gold = 0;

    let count = 0;

    let baseHeight = Number(base);

    let increment = Number(inc);

    while(baseHeight > 1){

        
        let block = (baseHeight * baseHeight * increment);

        let stoneIn = ((baseHeight - 2) * (baseHeight - 2)) * increment;

         let marbleOut = block - stoneIn;

        if(baseHeight - 2 === 0){

            break;

        }

        count++; 

        baseHeight -= 2;

        if(count % 5 === 0){

            lapisLazuli += marbleOut;
            stone += stoneIn;
            

        }else{

            stone += stoneIn;
            marble += marbleOut;
        }


    }

    count++;

    gold += (baseHeight * baseHeight * increment);

    let height = count * increment;



    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);


    
}

thePyramidOfKingDjoser(23, 0.5);