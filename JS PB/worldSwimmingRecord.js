function worldSwimmingRecord(input) {
 
   
    const recordInSec = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeInSec = Number(input[2]);
   
    let swimDistance = distanceInMeters * timeInSec;
   
    const delay = Math.floor(distanceInMeters / 15);
    const delayAdded = delay * 12.5;
    const totalTime = delayAdded + swimDistance;
   
    if (recordInSec > totalTime) {
    
  console.log(
        ` Yes, he succeeded! The new world record is ${totalTime.toFixed(
          2
        )} seconds.`
      );
 
    } else {
    
 
  console.log(
        `No, he failed! He was ${Math.abs(totalTime - recordInSec).toFixed(
          2
        )} seconds slower.`
      );
 
 
    } 
  }

  worldSwimmingRecord(["55555.67","3017","5.03"])