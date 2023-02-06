function animalType(input){


    switch(input[0]){

        case "dog":

        console.log("mammal");
        break;

        case "snake":
        case "tortoise":
        case "crocodile":
            console.log("reptile");
            break;

            default:

            console.log("unknown");
    }
}

animalType(["cat"]);