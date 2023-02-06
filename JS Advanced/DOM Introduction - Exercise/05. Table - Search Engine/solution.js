function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let getInput = document.getElementById('searchField');

      let result = document.getElementById('result');

      let getElements = document.querySelectorAll('.container tr');

      if(document.getElementsByClassName('select').length > 0){

         let obj = document.getElementsByClassName('select')

         for(let el of obj){

            console.log(el);

            el.classList.remove('select');
         }


      }

      for (let i = 2; i < getElements.length; i++) {

         let test = getElements[i].textContent;

         if (test.includes(getInput.value)) {

            getElements[i].className = 'select'

         }

      }

      getInput.value = '';

   }
}