function cone(radius, height){

    console.log(`volume = ${(1/3 * Math.PI * (radius * radius) * height).toFixed(4)}`);

    let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))) 

    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);