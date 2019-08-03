function sayHello(name){
    console.log('...............');
    console.log('Hello ' + name + '!');
    console.log('..............');
}

// sayHello()
/*
let a = sayHello;
a();
a();
*/

sayHello('Shree');


function calcTax(amount){
    let result = amount * 0.0825;
    return result;
}

console.log(calcTax(40000))