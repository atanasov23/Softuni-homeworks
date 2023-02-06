let getBtn = document.getElementById('submit');
let inputs = document.getElementsByClassName('inputs')[0];
let showResult = document.getElementsByTagName('tbody')[0];

getBtn.addEventListener('click', addStudents);

async function showStudent(){

    let response = await fetch('http://localhost:3030/jsonstore/collections/students')
    .then(a => a.json());

    showResult.innerHTML = ''

    for(let el in response){

        showResult.innerHTML += `
        <tr>
        <td>${response[el].firstName}</td>
        <td>${response[el].lastName}</td>
        <td>${response[el].facultyNumber}</td>
        <td>${response[el].grade}</td>
        </tr>`

    }
}

showStudent()


async function addStudents(e) {

    e.preventDefault();

    let arr = Array.from(inputs.children);

    let student = {};

    for (let el of arr) {

        if (el.value === '') {

            return;

       }

        student[el.name] = el.value;

    }

    await fetch('http://localhost:3030/jsonstore/collections/students', {

        method: 'POST',
        headers: { 'Content-Type': 'Aplication/json' },
        body: JSON.stringify(student)

    });

  showStudent();

}




 function test(){

  return  fetch('http://localhost:3030/jsonstore/collections/students')
    .then(a => a.json()).then(a => a);

}



console.log(test());
 



