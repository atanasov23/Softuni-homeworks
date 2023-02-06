function companyUsers(arr){

    let company = new Map();

    for(let el of arr){

        let companyInfo = el.split(' -> ');

        company.set(companyInfo[0], new Set());

    }

    for(let el of arr){

        let companyInfo = el.split(' -> ');

        company.get(companyInfo[0]).add(companyInfo[1]);

    }

    let newArr = Array.from(company).sort((a,b) => {

        if(a[0] < b[0]){

            return -1;

        }
    });
    
    for(let el of newArr){

        console.log(el[0]);
        

        el[1].forEach(element => {

            console.log(`-- ${element}`);

        });

    }
  
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);