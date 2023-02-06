function c(number) {

    let currentColour = 'black'
    let previousColour = ''
    console.log('<div class="chessboard">')

    for (let rows = 1; rows <= number; rows++) {
        console.log('  <div>')

        for (let columns = 1; columns <= number; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);

            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }

        console.log('  </div>')
        if (number % 2 === 0) {
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
    }

    console.log('</div>')

}

c(3);