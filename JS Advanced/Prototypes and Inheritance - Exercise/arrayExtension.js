console.log((function solve() {

    let arr = [2, 4, 5, 6];

    Array.prototype.last = function () {

        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {

        let newArr = [];

        for (let i = n; i < this.length; i++) {

            newArr.push(this[i]);

        }

        return newArr;

    }

    Array.prototype.take = function (n) {

        let res = [];

        for(let i = 0; i < n; i++){

            res.push(this[i]);

        }


        return res;

    }

    Array.prototype.sum = function () {

        let sum = 0;

        for(let i = 0; i < this.length; i++){

            sum += this[i];

        }

        return sum;

    }

    Array.prototype.average = function () {

        return this.sum() / this.length;

    }


})());



//solve();