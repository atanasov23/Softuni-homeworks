function solve() {

    document.getElementsByTagName("form")[0].addEventListener('submit', task)

    let sections = Array.from(document.getElementsByTagName('section'));
    let openProgres = sections[1];
    let progres = sections[2];
    let complete = sections[3];

    function task(f){

        f.preventDefault();

        let form = f.target;
        let title = form.elements[0].value;
        let description = form.elements[1].value;
        let date = form.elements[2].value;
    if(title.length === 0 || description.length === 0 || date.length === 0){

            return;

        }

        let inner = article(title, description, date, {class: 'green', text: 'Start'}, {class: 'red', text: 'Delete'});
        sections[1].children[1].appendChild(inner);
        
    }

    function article(title, desc, date, firstButton, secButton){

    
        let buttons = createButton(firstButton, secButton);

        let createArticle = document.createElement('article');

        let innerHtml = `<h3>${title}</h3>
        <p>Description: ${desc}</p>
        <p>Due Date: ${date}</p>
         ${buttons}`

         createArticle.innerHTML = innerHtml;

         createArticle.addEventListener('click', handler);
         return createArticle;

    }

    function createButton(firstButton, secondButton){

        let buttons = `<div class= "flex">
        <button class="${firstButton.class}">${firstButton.text}</button>
        <button class="${secondButton.class}">${secondButton.text}</button>
        </div>`

        return buttons
    }

    function handler(el){

        if(el.target.tagName !== "BUTTON"){

            return

        }

        let comand = cmd();

        let text = el.target.innerText.toLowerCase();

        comand[text](el);

    }

    function cmd(){

        return{

            start: function(el){

                progres.children[1].appendChild(el.currentTarget);
                el.target.parentElement.remove();
                el.currentTarget.innerHTML += createButton({class: 'red', text: "Delete"}, {class: "orange", text: "Finish"})

            },
            delete: function(el){

                el.target.parentElement.parentElement.remove()


            },
            finish: function(el){

                complete.children[1].appendChild(el.currentTarget);
                el.target.parentElement.remove();
                

            }
        }
    }

    
}