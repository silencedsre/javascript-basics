/*
Avoid global scope as much as possibele
var myVariable = 'I am a global Scope';

var myFunction = function () {
    console.log('me too!')
}
 */

function one(){
    return 'one';
}
console.log(one());

//see this datatype is function
console.log(typeof one)

function two(){
    return function(){
        console.log('two')
    }
}
//reference to inner function
let myFunction = two()
//function invocation outer
myFunction()