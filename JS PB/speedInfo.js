function speedInfo(input){


if(Number(input[0]) <= 10){

 console.log("slow");
    
}else if(Number(input[0]) > 10 && Number(input[0]) <= 50){

    console.log("average");

}else if(Number(input[0]) > 50 && Number(input[0]) <= 150){

    console.log("fast");
}else if(Number(input[0]) > 150 && Number(input[0]) <= 1000){

console.log("ultra fast");

}else{

    console.log("extremely fast");
}
 
}

speedInfo(["1200"]);