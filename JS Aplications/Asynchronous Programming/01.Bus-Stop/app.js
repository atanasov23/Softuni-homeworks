function getInfo() {
    
    let stopId = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
    .then(a => a.json())
    .then(showResult)
    .catch(showError);


    function showResult(data){

        for(let el in data.buses){

           let li = document.createElement('li');

           li.textContent += `Bus ${el} arrives in ${data.buses[el]} minutes`;

           buses.appendChild(li);

        }

        stopName.textContent = data.name;

        stopId.value = ''
    }
    
    function showError(err){

        stopName.textContent = 'Error';

        stopId.value = ''

    }
   
    
}
