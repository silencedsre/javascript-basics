let a,b,c,d,e;
let names = ['david','eddie','alex','micheal', 'sammy'];
[a,b,c,d,e] = names;
console.log(a, b, c, d, e);

let others;
[a,b,...others] = names;
console.log(a,b,others);

let year, model;
({year,model}={
    make:'bmw',
    model:'750li',
    year:2018
})
console.log(year, model)