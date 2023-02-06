function evenPowersOf2(input) {
  let number = Number(input[0]);
 let sum = 0;

  for (let i = 0; i <= number; i++) {

    if(i % 2 == 0){


      sum = Math.pow(2,i);
 console.log(sum)
    }

  }
}

evenPowersOf2(["3"]);
