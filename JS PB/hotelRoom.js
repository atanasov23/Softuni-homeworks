function hotelRoom(input) {
    const night = Number(input[1]);
    const month = input[0];
  
    let studioPrice = 0;
    let apartmentPrice = 0;
    let discount = 0;
    let apartmentDiscount = 0;
  
    if (month == "May" || month == "October") {

        if(night <= 7){

   studioPrice = night * 50;
  
        apartmentPrice = night * 65;

        } else if (night > 7 && night <= 14) {

            studioPrice = night * 50;
  
            apartmentPrice = night * 65;
     
  
        discount = 0.05;
      } else if(night > 14){

        studioPrice = night * 50;
  
        discount = 0.3;
  
        apartmentPrice = night * 65;
  
      }

    } else if (month == "June" || month == "September") {

        if(night <= 7){


        }else if (night > 7 && night <= 14) {

        studioPrice = night * 75.2;
  
        apartmentPrice = night * 68.7;

        

      } else if(night > 14){

        studioPrice = night * 75.2;
  
        discount = 0.2;
  
        apartmentPrice = night * 68.7;
  
      }

    } else if (month == "July" || month == "August") {

      studioPrice = night * 76;
  
      apartmentPrice = night * 77;
  
    }
  
      if (night > 14) {

        apartmentDiscount = 0.1;
      }
    const apartmentFinalPrice =
      apartmentPrice - (apartmentPrice * apartmentDiscount);
  
    const studioFinalPrice = studioPrice - (studioPrice * discount);
  
    console.log(`Apartment: ${apartmentFinalPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioFinalPrice.toFixed(2)} lv.`);
  }

hotelRoom(["May",
"15"])