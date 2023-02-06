function solve() {

  let txt = document.getElementById('text').value.toLowerCase().split(' ');

  let type = document.getElementById('naming-convention').value;

  let result = document.getElementById('result');

  let letter = '';

  switch (type) {

    case 'Camel Case':

      letter += txt[0]

      for (let i = 1; i < txt.length; i += 1) {

        let firstLetter = txt[i][0].toUpperCase();

        let nextLetter = txt[i].substring(1);

        letter += `${firstLetter}${nextLetter}`;

      }

      result.textContent = letter

      break;

    case 'Pascal Case':

      for (let i = 0; i < txt.length; i++) {

        let firstLetter = txt[i][0].toUpperCase();

        let nextLetter = txt[i].substring(1).toLowerCase();

        letter += `${firstLetter}${nextLetter}`;

      }

       result.textContent = letter;


      break;

    default: result.textContent = 'Error!';

      break;
  }


 
}