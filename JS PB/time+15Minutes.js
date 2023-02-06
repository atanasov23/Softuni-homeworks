function timeMinutes(input){

    let minutesLater = 15;
   
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);
   
    if(seconds + 15 > 60 ){
   
       minutes += 1;
   
       seconds = Math.floor((seconds + minutesLater) % 60);

       if(minutes == 24){
        
        minutes = 0;

       }
   
    }else if(seconds + minutesLater < 60){
     
       seconds += minutesLater;
   
    } else if(minutes == 24){
   
        minutes = 0;   
   
   }else if(seconds + minutesLater == 60){

       seconds = 0;
       minutes += 1;
       
       if(minutes  == 24){
           
        minutes = 0;

       }
   }
    
    if(seconds < 10){
          
           console.log(`${minutes}:0${seconds}`);
   
        }else{
           console.log(`${minutes}:${seconds}`);
   
        }
   }

timeMinutes(["12", "45"]);

