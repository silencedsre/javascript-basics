let originalCar = {
    manifacture: 'Tesla',
    model: 'X-21',
    year: 2019
};

let newCar = Object.create(originalCar);
console.log(newCar.manifacture);
newCar.manifacture = 'audi'
console.log(newCar.manifacture);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.manifacture);

originalCar.doors = 4;
console.log(newCar.doors)

console.log(originalCar.hasOwnProperty('doors'))
console.log(newCar.hasOwnProperty('doors'))