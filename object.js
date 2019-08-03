let car = {
    manifacture:'Tesla',
    model:'X-21',
    year:'2019',
    getPrice: function () {
        return 5000;
    },
    printDescription: function () {
      console.log(this.manifacture + ' '+ this.model);
    }
}

car.printDescription()

let a = {
    myproperty:{b:'hello'}
}

console.log(a.myproperty.b)


let c = {
    myproperty: [
        {year: '2019'},
        {name:'Shree'},
        {model:'Y-12'}
    ]
}