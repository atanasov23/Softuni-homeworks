function lunchBreak(input){

let episode = input[0];
let episodeTime = Number(input[1]);
let restTime = Number(input[2]);

let timeForLunch = restTime / 8;
let timeForRest = restTime / 4;
let remainingTime = restTime - timeForLunch - timeForRest;

let freeTime = 0;



if(remainingTime >= episodeTime){
    freeTime = Math.ceil(remainingTime - episodeTime);
    console.log(`You have enough time to watch ${episode} and left with ${freeTime} minutes free time.`);
}else{
     freeTime = Math.ceil(episodeTime - remainingTime);
    console.log(`You don't have enough time to watch ${episode}, you need ${freeTime} more minutes.`);
}

}

lunchBreak(["Game of Thrones", "10", "96"]);