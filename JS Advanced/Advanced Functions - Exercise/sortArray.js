function sortArray(arr, order) {

    let result = arr.slice(0);

    switch (order) {

        case 'asc':

            result.sort((a, b) => a - b);

            break;

        case 'desc':

            result.sort((a, b) => b - a);

            break;

    }
    return result
}


sortArray([14, 7, 17, 6, 8], 'desc');