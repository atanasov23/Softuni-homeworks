function cinemaVoucher(input) {

  let vaucher = Number(input[0]);

  let index = 0;

  index++;

  let tickets = "";

  let ticketCounter = 0;

  let otherCounte = 0;

  let boolean = false;
  let booleanTwo = false;

  let sum = 0;

  let test = 0;

  

  while (tickets !== "End" ) {

    tickets = input[index];

    index++;

    if(sum < vaucher){

    if (tickets.length > 8) {

      sum = Number(tickets.charCodeAt(0)  + tickets.charCodeAt(1));

     vaucher -= sum;

      ticketCounter++;

      test += sum;

      //if(vaucher < sum){

        //console.log(`${ticketCounter}`);
       // console.log(`${otherCounte}`);
    
    //}

    } 
    
    if (tickets.length <= 8) {
   

      sum = Number(tickets.charCodeAt(0));

      otherCounte++;

      vaucher -= sum;

      test += sum

     // if(vaucher < sum){

       // console.log(`${ticketCounter}`);
       // console.log(`${otherCounte}`);
    
    //}

    }
    }else{

      otherCounte++;
    }




//if(vaucher < sum){

      //  console.log(`${ticketCounter}`);
       // console.log(`${otherCounte}`);
    
    //}

  }

}
cinemaVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])
