function timeToWalk(steps, footSteps, speed) {

    let distance = steps * footSteps;
    let speedInMeter = speed / 3.6;
    let time = distance / speedInMeter;
    let rest = Math.floor(distance / 500);

    let min = Math.floor(time / 60);
    let sec = Math.ceil(time - (min * 60));
    let hour = Math.floor(time / 3600);

    min += rest;
    hour += Math.floor(min / 60);
  
    if(min < 10){
        min = `0${min}`
    }
    if(sec < 10){

        sec = `0${sec}`
    }
    if(hour < 1){

        hour = `0${hour}`
    }

    console.log(`${hour}:${min}:${sec}`);

}

timeToWalk(2564, 0.70, 5.5);