function solve() {

  let getTxt = document.getElementById('input').value;

  let result = document.getElementById('output');

  let arr = [];

  let sentence = '';

  for (let letter of getTxt) {

    if (letter === '.') {

      sentence += '.'

      arr.push(sentence);

      sentence = ''

    } else {

      sentence += letter;
    }

  }

  let txt = ''

  let count = 0;

  for (let el of arr) {

    if (count === 3) {

      txt = `<p>${txt}</p>`

      count = 0;

    }

    txt += el

    count++;

  }

  if(arr.length <= 3){

    txt = `<p>${txt}</p>`;

  }

  if(arr.length > 0){

result.innerHTML = txt;
  }

  

  result.style.color = 'white'


}