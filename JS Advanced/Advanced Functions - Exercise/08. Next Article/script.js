function getArticleGenerator(articles) {

    let index = 0;

    let a = document.getElementById('content');

    return function showNext() {

        if(index !== articles.length){

        a.innerHTML += `<article>${articles[index++]}</article>`;

        }

    }


}
