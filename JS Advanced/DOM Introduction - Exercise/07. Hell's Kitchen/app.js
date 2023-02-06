function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = document.getElementsByTagName('textarea')[0].value;

      let parse = JSON.parse(input);

      let average = 0;

      let sum = 0;

      let workerCount = 0;

      let result = '';

      let restaurantName = '';

      let bestSalary = 0;

      for (let i = 0; i < parse.length; i++) {

         let split = parse[i].split(' - ');

         let split2 = split[1].split(', ').join(' ').split(' ');

         workerCount = 0;

         let salary = [];

         for (let j = 0; j < split2.length; j++) {

            if (j % 2 !== 0) {

               sum += Number(split2[j])

               workerCount++;

               salary.push(Number(split2[j]));
            }

         }

         if ((sum / workerCount) > average) {

            average = sum / workerCount;

            sum = 0;

            result = split2;

            restaurantName = split[0];

            bestSalary = Math.max(...salary);

         }

      }


      let bestRestaurant = `Name: ${restaurantName} Average Salary: ${average.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      let bestWorker = '';

      let workerResult = [];



      for (let i = 0; i < result.length; i++) {


         if (i % 2 !== 0) {

            workerResult.push(Number(result[i]));

         }

      }

      workerResult.sort((a, b) => b - a);

      let restaurant = document.getElementsByTagName('p');

      let workers = [];

      for (let i = 0; i < result.length; i++) {

         if (i % 2 === 0) {

            workers.push(result[i]);

         }

      }

      restaurant[0].innerText = `Name: ${restaurantName} Average Salary: ${average.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`

      let final = '';

      for (let i = 0; i < workers.length; i++) {

         final += `Name: ${workers[i]} With Salary: ${workerResult[i]} `

      }

      restaurant[1].innerText = final

      
   }


}