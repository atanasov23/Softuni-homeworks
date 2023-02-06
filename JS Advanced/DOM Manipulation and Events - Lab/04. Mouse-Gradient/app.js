function attachGradientEvents() {
    
    let element = document.getElementById('gradient');

    element.addEventListener('mousemove', move);

    element.addEventListener('mouseleave', leave);

    let result = document.getElementById('result');

    function move(a){

        let off = a.offsetX / (a.target.clientWidth - 1);

           off = Math.trunc(off * 100);

           result.textContent = `${off}%`;

    }

    function leave(){

        result.textContent = "";

    }
}