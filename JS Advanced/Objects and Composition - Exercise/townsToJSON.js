function townsToJSON(arr){

    let result = [];

    for(let i = 1; i < arr.length; i++){

        let [townName, latitude, longitude] = arr[i].split('|').join('').trim().split('  ')

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        longitude = Number(longitude);
        latitude = Number(latitude)

        result.push({Town:townName, Latitude:latitude, Longitude:longitude});

    }

    console.log(JSON.stringify(result));

}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);