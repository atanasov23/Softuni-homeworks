function songs(arr){

    class Song{

        constructor(typeList, name, time){

            this.typeList = typeList
            this.name = name
            this.time = time
        }

    }

    let numberOfSongs = arr.shift();

    let typeListShow = arr.pop();

    for(let i = 0; i < numberOfSongs; i++){

        let songInfo = arr[i].split('_');

        let [typeList, name, time] = songInfo;

        let songObj = new Song(typeList, name, time);

        if(typeListShow === typeList){

            console.log(songObj.name);

        }else if(typeListShow === 'all'){

            console.log(songObj.name);

        }

    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);