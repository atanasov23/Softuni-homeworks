function solve() {

    let arriveButton = document.getElementById('arrive');
    let departButton = document.getElementById('depart');
    let spanInfo = document.getElementsByClassName('info')[0];
    let nextStopId = 'depot';

    function depart() {

        arriveButton.disabled = false;
        departButton.disabled = true;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(a => a.json())
            .then(details => {

                nextStopId = details.next;
                spanInfo.innerHTML = `Next stop ${details.name}`
            });

    }

    function arrive() {

        arriveButton.disabled = true;
        departButton.disabled = false;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(a => a.json())
            .then(details => {

                nextStopId = details.next;
                spanInfo.innerHTML = `Arriving at ${details.name}`
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();