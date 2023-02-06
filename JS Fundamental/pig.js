function pig(input){

    let food = Number(input[0]) * 1000;

    let hay = Number(input[1]) * 1000;

    let cover = Number(input[2]) * 1000;

    let weight = Number(input[3]) * 1000;

    let month = 0;

    while(month < 30){

        month++;

        food -= 300;

        if(month % 2 === 0){

           hay -= food * 0.05;

        }
        
        if(month % 3 === 0){

            cover -= weight * 1/3;

        }

        if(food <= 0 || hay <= 0 || cover <= 0){

            console.log("Merry must go to the pet store!");

            return;

        }else{

            
        }
        
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);

}

pig((["1", 
"1.5", 
"3", 
"1.5"
]));