class Company {

    constructor() {

        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        if (name === '' || name === undefined || name === null) {

            throw new Error("Invalid input!");

        } else if (salary === '' || salary === undefined || salary === null || salary < 0) {

            throw new Error("Invalid input!");

        } else if (position === '' || position === undefined || position === null) {

            throw new Error("Invalid input!");

        } else if (department === '' || department === undefined || department === null) {

            throw new Error("Invalid input!");

        } else {

            if (this.departments.hasOwnProperty(department)) {

    
                this.departments[department].push({ name, salary, position });

            } else {

                this.departments[department] = [];

                this.departments[department].push({ name, salary, position });

            }

            return `New employee is hired. Name: ${name}. Position: ${position}`;

        }

    }

    bestDepartment() {

        let obj = this.departments;

        console.log(obj);

        let averageSalary = 0;

        let department = '';

       //let count = 0;

        for (let key in obj) {

            let sum = 0;

            for (let el of this.departments[key]) {

                // count++;

                sum += el.salary;

               

            }

            if (sum / this.departments[key].length > averageSalary) {

                averageSalary = sum / this.departments[key].length;

                department = key;

               // count = 0

            }

        }

        this.departments[department].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let employee = '';

        let result = `Best Department is: ${department}\nAverage salary: ${averageSalary.toFixed(2)}`

        this.departments[department].forEach(element => {

            employee += `\n${element.name} ${element.salary} ${element.position}`
        });

        result += employee;

        return result;

    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

