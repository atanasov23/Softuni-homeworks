function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {

        let arr1Index = i;

        for (let x = 0; x < arr2.length; x++) {

            if (arr1[arr1Index] === arr2[x]) {

                console.log(arr1[i]);

            }

        }

    }

}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);