function cats(arr){

    class Cat{

        constructor(name, age){

            this.name = name;
            this.age = age;

        }

        meow(){

            console.log(`${this.name}, age ${this.age} says Meow`);

        }
        
    }

    for(let i = 0; i < arr.length; i++){

        let catNameAndAge = arr[i].split(' ');

        let [catName, age] = catNameAndAge;

        let catObject = new Cat(catName,age);

        catObject.meow();

    }

}

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);