function bitcoinMining(input){

    let index = 0;

    let sum = 0;

    let countDays = 0;

    let bitcoin = 0;

    let bitCoinPrice = 11949.16;

    let goldPrice = 67.51;

    let goldToday = 0;

    let firstBitcoin = 0;

    while(index < input.length){

        countDays ++;

        goldToday = input[index];

        if(countDays % 3 === 0){

            goldToday -= goldToday * 0.30;

        }

        sum += goldToday * goldPrice;

        if(sum > bitCoinPrice){

            while(sum > bitCoinPrice){

                  bitcoin++;

            sum -= bitCoinPrice;

              if(bitcoin === 1){

            firstBitcoin = countDays;

            }

            }

        }

        index++;

    }

 console.log(`Bought bitcoins: ${bitcoin}`);

 if(bitcoin > 0){

console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);

 }

 console.log(`Left money: ${sum.toFixed(2)} lv.`);

}

bitcoinMining([50,100]);

