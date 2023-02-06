function sortArray(arr){

    let sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));

    console.log(sorted.join('\n'));

}

sortArray([1, 2, 3, 4, 5, 6]);