function tseamAccount(arr) {

    let instalGame = arr[0].split(' ');

    let stopLoop = '';

    while (stopLoop !== 'Play!') {

        for (let i = 1; i < arr.length; i++) {

            stopLoop = arr[i];

            let comand = arr[i].split(' ')[0];

            let gameName = arr[i].split(' ')[1]

            switch (comand) {

                case 'Install':

                    let checkForInstall = instalGame.includes(gameName);

                    if (!checkForInstall) {

                        instalGame.push(gameName);

                    }

                    break;

                case 'Uninstall':

            
                        if (instalGame.includes(gameName)){

                        
                            let getIndex = instalGame.indexOf(gameName);

                            instalGame.splice(getIndex, 1);
                            
                        }
                    

                    break;

                case 'Update':

                
                        if (instalGame.includes(gameName)) {

                            let getIndex = instalGame.indexOf(gameName);

                            instalGame.splice(getIndex, 1);

                            instalGame.push(gameName);
                        }

                  

                    break;

                case 'Expansion':

                    let expansion = gameName.split('-');

                    console.log(expansion);

                    let game = expansion[0];
         
                    if (instalGame.includes(game)) {

                        let expandedGame = expansion.join(':');

                        let index = instalGame.indexOf(game);

                        instalGame.splice(index + 1, 0, expandedGame);
                    }
            
                    break;

            }

        }

    }

    console.log(instalGame.join(' '));
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);