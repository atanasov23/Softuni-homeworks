function create(words) {
   
   let result = document.getElementById('content');

   for(let el of words){

      let newElement = document.createElement('div');

      let p = document.createElement('p');

      p.innerText = el;

      p.style.display = 'none';

      newElement.appendChild(p);

      result.appendChild(newElement);

      newElement.addEventListener('click', show);

      function show(){

         p.style.display = 'block';

      }


   }

}