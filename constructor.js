/*let car = {
    make: 'bmw',
    model: '745li',
    year: 2010
};
 */

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
let myCar = new Car('bmw','754li', 2010);
console.log(myCar);