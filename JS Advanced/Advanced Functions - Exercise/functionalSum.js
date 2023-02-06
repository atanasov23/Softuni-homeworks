function add(n) {
    
    function a(b){

        return add(n + b);
    }

      a.toString = function(){

            return n;
        }

    return a;

}


console.log(+add(2));

