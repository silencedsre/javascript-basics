let names = ['david','eddie','alex','micheal'];
let others = ['sammy','gary','wolfgang','mark'];

let lost = [4,8,15,16,23,42];
let fibonacci = [1,1,2,3,5,8,13,21,34,55];

//concat two arrays into one
var combine = lost.concat(fibonacci);
console.log(combine);

//returns a string with ~ in beginning of each elements of array
console.log(fibonacci.join('~'));

//push pop

// remove a first item
console.log(lost.shift());
console.log(lost);

//add from the first
lost.unshift(1,2,3);
console.log(lost)

//reverse order
console.log(names.reverse());

//to sort alphabetically
console.log(names.sort());

console.log(names.indexOf('alex'));


//returns an array with elements from combine array which are less than 15
var filtered = combine.filter((x) => {if (x<=15) return x});
console.log(filtered);

//for each name in names console log hello name
names.forEach((name)=>console.log(`hello ${name}`));


//check in filtered if every num is less than 10
console.log(filtered.every((num)=> num<10));














