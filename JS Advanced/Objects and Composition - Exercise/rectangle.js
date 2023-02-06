function rectangle(width, height, color){

    let resultText = color[0].toUpperCase();

    for(let i = 1; i < color.length; i++){

        resultText += color[i];

    }

    return {

        width,
        height,
        color: resultText,
        calcArea:function(){

            return width * height;
        }
    }

}



let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());