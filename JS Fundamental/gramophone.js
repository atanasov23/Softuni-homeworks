function gramophone(bandName, album, songName) {

    let rotateTime = (album.length * bandName.length) * songName.length / 2

    console.log(`The plate was rotated ${Math.ceil(rotateTime / 2.5)} times.`);

}

gramophone('Rammstein', 'Sehnsucht', 'Engel');