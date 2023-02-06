function tickets(arr, status){

    let result = [];

    for(let el of arr){

        let [destination, price, status] = el.split('|');

        price = Number(price)

        result.push({destination, price, status});

    }

    if(status === 'destination'){

        result.sort((a, b) => a.destination.localeCompare(b.destination));

    }else if(status === 'status'){

        result.sort((a, b) => a.status.localeCompare(b.status));


    }

    return result;
}

  // arr.sort((a, b) => a.destination.localeCompare(b.destination));
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')[2]);
    