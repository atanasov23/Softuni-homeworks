function generateReport() {

    let getCheck = document.querySelectorAll('th input');

    let td = document.querySelectorAll('tr');

    let personObj = [];

    let checkArr = [];

    for (let bool of getCheck) {

        checkArr.push([bool.checked, bool.name]);

    }

    let index = 0;

    for (let i = 1; i < td.length; i++) {

        let obj = {};

        let toArray = Array.from(td[i].children);
        for (let getName of toArray) {

            if (checkArr[index][0]) {

                let position = checkArr[index][1];
                let name = getName.innerText;

                obj[position] = name;

            }

            index++;

        }

        personObj.push(obj)
        index = 0;
    }

    let json = JSON.stringify(personObj);

    let area = document.getElementById('output').innerText = json

}