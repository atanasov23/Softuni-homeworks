class List{

    list = [];
    size = 0;

    add(element){

        if(typeof element === 'number'){

        this.list.push(element);
        this.size = this.list.length;
        this.list.sort((a, b) => a - b);
        return;

        }

    }

    remove(index){

        if(index >= 0 && index < this.list.length){

           this.list.splice(index,1);

           this.size = this.list.length;
        
           return
        }else{

            throw new Error('Not a valid index!');
        }

    }

    get(index){

        if(index >= 0 && index < this.list.length){

           return this.list[index];

        }else{

            throw new Error('Not a valid index!');
        }

    }

}

let list = new List();

list.add(20);

list.get(1);

console.log(list.list);