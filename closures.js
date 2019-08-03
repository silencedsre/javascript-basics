// Closures allow developers to bind functions to their execution context, including variables so you can build specialized versions of functions

function sayHello(name){
    return function () {
        console.log('Hello '+ name);
    }
}

let bob =sayHello('bob');
bob();