function solve() {

  let text = document.querySelectorAll('textarea');

  let btns = document.querySelectorAll('button');

  btns[0].addEventListener('click', getObj);

  function getObj() {

    let furniture = JSON.parse(text[0].value);

    let tbody = document.querySelector('tbody');

    for (let i = 0; i < furniture.length; i++) {

      let objlength = Object.keys(furniture[i]);

      let obj = furniture[i];

      let element = document.createElement('tr');

      let img = document.createElement('img');

      img.src = obj.img;

      let td2 = document.createElement('td');

      td2.appendChild(img);

      element.appendChild(td2);

      for (let j = 0; j < objlength.length; j++) {

        if(j === 1){

          continue;

        }

        let objElement = obj[objlength[j]];

        let td = document.createElement('td');

        let p = document.createElement('p');

        p.textContent = objElement;

        td.appendChild(p);

        element.appendChild(td);

      }

      let check = document.createElement('input');

      check.type = 'checkbox';

      let td3 = document.createElement('td');

      td3.appendChild(check);

      element.appendChild(td3);

      tbody.appendChild(element);

    }


    let getCheck = Array.from(document.querySelectorAll('input'));

   

    btns[1].addEventListener('click', bye);

    function bye() {

      let sum = 0;
      let average = 0;
      let nameOfProduct = [];

      for (let el of getCheck) {

        if (el.checked) {

          let parent = el.parentElement.parentElement.children;

          sum += Number(parent[2].lastChild.textContent);

          average += Number(parent[3].lastChild.textContent);

          nameOfProduct.push(parent[1].lastChild.textContent);

        }

      }

      text[1].value = `Bought furniture: ${nameOfProduct.join(', ')}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${average / nameOfProduct.length}`
 
    }
  }
}