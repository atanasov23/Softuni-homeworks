function edit(element, textForChange, text) {

    let content = element.textContent;

    let regEx = new RegExp(textForChange, 'g');

    let replace = content.replace(regEx, text);
    
    element.textContent = replace;
}

console.log('trrfef'.replaceAll('r', 'b'));