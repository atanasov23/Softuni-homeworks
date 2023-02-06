function search() {

   let result = document.getElementById('result');

   let txt = document.getElementById('searchText').value;

   let element = document.querySelectorAll('#towns li');

   let count = 0;

   for (let el of element) {

      el.style.textDecoration = 'none';

      el.style.fontWeight = 'normal'

      if (el.textContent.includes(txt)) {

         count++;

         el.style.textDecoration = 'underline';

         el.style.fontWeight = 'bold'

      }

   }

   result.textContent = `${count} matches found`

   let obj = {}

   console.log(Object.keys(obj).length);
}
