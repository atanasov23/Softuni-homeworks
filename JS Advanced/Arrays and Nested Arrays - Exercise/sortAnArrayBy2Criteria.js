function sortAnArrayBy2Criteria(arr){

    let result = arr
    .sort((a,b) => a.localeCompare(b))
    .sort((a,b) => a.length - b.length)
    .forEach(element => {
        console.log(element);
    });
}

sortAnArrayBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
);