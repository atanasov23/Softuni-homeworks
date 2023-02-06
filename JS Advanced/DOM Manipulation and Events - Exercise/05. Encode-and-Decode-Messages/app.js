function encodeAndDecodeMessages() {

    let btns = [...document.querySelectorAll('div button')];

    btns[0].addEventListener('click', get);

    btns[1].addEventListener('click', code);

    let text = '';

    function get() {

        text = this.previousElementSibling.value;

        let encode = '';

        for (let el of text) {

            let charCode = el.charCodeAt() + 1;

            encode += String.fromCharCode(charCode);
        }

        btns[1].previousElementSibling.value = encode;

        document.querySelector('textarea').value = '';
    }

    function code() {

        let textForDecode = this.previousElementSibling.value = text;

    }

}