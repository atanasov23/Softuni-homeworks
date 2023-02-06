function factory(library, orders) {

    let result = [];

    let entries = Object.entries(orders);

    for (let object of entries) {

        let obj = {};

        let name = object[1].template.name;

        let func = object[1].parts;

        for (let el of func) {

            obj['name'] = name;

            obj[el] = library[el];

        }

        result.push(obj);

    }

    return result;

}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};


const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);
