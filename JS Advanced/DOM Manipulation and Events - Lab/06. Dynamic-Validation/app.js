function validate() {
    
    let element = document.getElementById('email');

    element.addEventListener('change', change);

    function change(a){

        let validation = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

        if(a.target.value.match(validation)){

            a.target.classList = ''

        }else{

            a.target.classList = 'error'

        }

    }


}