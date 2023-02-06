function calc() {

    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let result = Number(n1) + Number(n2);
    
    let sum = document.getElementById('sum').value = result;
    
    console.log(sum);

}
