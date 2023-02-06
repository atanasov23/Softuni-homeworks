function matchFullName(names){

    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;

    let arr = [];

    let name = '';

    while((name = regEx.exec(names)) !== null){

        arr.push(name[0]);

    }

    console.log(arr.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");