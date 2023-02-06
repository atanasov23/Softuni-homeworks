function areaOfFigures(input){

let figure = input[0];

switch(input[0]){

    case "square":

    let faceOfAFigure = Number(input[1]) * Number(input[1]);

    console.log(faceOfAFigure.toFixed(3));

    break;

    case "rectangle":

      let faceOfRectangle = Number(input[1]) * Number(input[2]);

      console.log(faceOfRectangle.toFixed(3));

    break;

    case "circle":

        let faceOfCircle = Math.PI * (Number(input[1]) * Number(input[1]));

        console.log(faceOfCircle.toFixed(3));

    break;

    case "triangle":

        let faceOfTriangle = (Number(input[1]) * Number(input[2]) / 2);

        console.log(faceOfTriangle.toFixed(3));
    break;

}

}

areaOfFigures(["triangle", "4.5", "20"]);