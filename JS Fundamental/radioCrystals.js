function radioCrystals(arr){

    let neededSize = arr[0];

    for(let i = 1; i < arr.length; i++){

        let chunk = arr[i];

        console.log(`Processing chunk ${arr[i]} microns`);

        function cut(num){

            return num / 4;
        }
        

        function lap(num){

            return num -= num * 0.20;
        }

        function grind(num){

            return num = num - 20
        }

        function etch(num){

            return num -= 2;
        }

        function xray(num){

            return num += 1;
        }

        let cutCount = 0;

        let lapCount = 0;

        let grindCount = 0;

        let etcCount = 0;

        let xrayCount = 0;

        while (chunk !== neededSize) {
            while (chunk / 4 >= neededSize) {
                chunk = cut(chunk);
                cutCount++;
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                chunk = Math.floor(chunk);
            }
 
            while (chunk - chunk * 0.2 >= neededSize) {
                chunk = lap(chunk);
                lapCount++;
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                chunk = Math.floor(chunk);
            }
 
            while (chunk - 20 >= neededSize) {
                chunk = grind(chunk);
                grindCount++;
            }
            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log(`Transporting and washing`);
                chunk = Math.floor(chunk);
            }
 
            while (chunk - 2 >= neededSize - 1) {
                chunk = etch(chunk);
                etcCount++;
            }
            if (etcCount > 0) {
                console.log(`Etch x${etcCount}`);
                console.log(`Transporting and washing`);
                chunk = Math.floor(chunk);
            }
 
            if (chunk < neededSize) {
                chunk = xray(chunk);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${neededSize} microns`);
        
    }
}

radioCrystals([1375, 50000]);