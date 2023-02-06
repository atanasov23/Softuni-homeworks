function attachEvents() {

    let textArea = document.getElementById('messages');
    let name = document.getElementsByName('author')[0];
    let content = document.getElementsByName('content')[0];

    let submit = document.getElementById('submit');
    let refresh = document.getElementById('refresh');

    submit.addEventListener('click', sendData);
    refresh.addEventListener('click', showMsg)

     function showMsg() {
        textArea.textContent = '';
        fetch('http://localhost:3030/jsonstore/messenger')
            .then(a => a.json())
            .then(res => {

                let result = [];

                for (let el in res) {

                   result.push(`${res[el].author}: ${res[el].content}`)

                   
                }

               
                textArea.textContent = result.join('\n')

            });

    }

    

    function sendData() {

        let newObj = {
            author: name.value,
            content: content.value,
        }


        fetch('http://localhost:3030/jsonstore/messenger', {

            method: 'POST',
            headers: {
                'Content-Type': 'Aplication/json'
            },
            body: JSON.stringify(newObj)
        })
    }



}

attachEvents();