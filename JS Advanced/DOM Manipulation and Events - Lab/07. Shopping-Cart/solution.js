function solve() {

   let btn = document.querySelectorAll('.product');

   let checkout = document.getElementsByClassName('checkout')[0];

   let area = document.getElementsByTagName('textarea')[0];

   let set = new Set();

   let sum = 0;

   let bool = false;

   for (let el of btn) {

      el.addEventListener('click', add);
   }

   function add() {

      if(bool){

         for (let el of btn) {

            el.disable = true
         }

      }else{

      let arr = Array.from(this.children);

      let price = Number(arr[3].innerText);

      sum += price;

      let productName = arr[1].children[0].innerText;

      let create = document.createTextNode(`Added ${productName} for ${price.toFixed(2)} to the cart.\n`);

      area.appendChild(create);

      set.add(productName);

      }

   }

   checkout.addEventListener('click', result);


   function result() {
      

      if (bool) {

         checkout.disable = true

      }else{

      let toArr = Array.from(set);

      let result = `You bought ${toArr.join(', ')} for ${sum.toFixed(2)}.`;

      let txt = document.createTextNode(result);

      area.appendChild(txt);

      sum = 0

      bool = true

      }

   }


}