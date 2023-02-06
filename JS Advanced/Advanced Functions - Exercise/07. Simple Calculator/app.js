function calculator() {

    return {

        init: function(selector1, selector2, resultSelector){

           this.selector1 =  document.querySelector(selector1);
           this.selector2 =  document.querySelector(selector2);
           this.resultSelector = document.querySelector(resultSelector);

        },

        add: function(){

            let n1 = Number(this.selector1.value);
            let n2 = Number(this.selector2.value);

            this.resultSelector.value = n1 + n2;
        },

        subtract: function(){

            let n1 = Number(this.selector1.value);
            let n2 = Number(this.selector2.value);

            this.resultSelector.value = n1 - n2;

        }
    }
}


let calculate = calculator();

calculate.init('#num1', '#num2', '#result');

console.log(calculate);




