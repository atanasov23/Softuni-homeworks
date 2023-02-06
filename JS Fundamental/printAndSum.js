function printAndSum(n1, n2) {

    let show = '';
    let sum = 0;

    for (let i = n1; i <= n2; i++) {

        show += `${i} `;

        sum += i;

    }

    console.log(show.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);