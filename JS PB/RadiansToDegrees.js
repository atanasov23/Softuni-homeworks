function RadiansToDegrees(get){

let a = Number(get[0]);

let b = a * 180 / Math.PI;

console.log(b);

}

RadiansToDegrees(["3.1416"]);