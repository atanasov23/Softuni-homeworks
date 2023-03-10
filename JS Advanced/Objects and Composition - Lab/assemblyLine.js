const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine() {

    return {

        hasClima: function (obj) {

            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {

                if (myCar.temp < myCar.tempSettings) {

                    myCar.temp += 1;

                } else {

                    myCar.temp -= 1;
                }
            }

        }, hasAudio: function (obj) {

            obj.currentTrack = null;
            obj.nowPlaying = function () {

                if (myCar.currentTrack !== null) {

                    console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);

                }

            }

        }, hasParktronic: function (obj) {

            obj.checkDistance = function (distance) {

                if (distance < 0.1) {

                    console.log('"Beep! Beep! Beep!"');
                } else if (distance >= 0.1 && distance < 0.25) {

                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {

                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }

    }

}



const assemblyLine = createAssemblyLine();

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(Object.keys(myCar));