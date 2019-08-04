let first = 'The best way to learn is to doing it';
let second = 'Do or do not. There is no try';
let third = '1,2,3,4,5,6';

//seperates by comma , and puts in array
let mySplit = third.split(',');
console.log(mySplit);

//start with index 0 and end with index 3-1=2 and return that string
let mySlice = first.slice(0,3);
console.log(mySlice);

//start from 10 grab the next 2 characters
let mySubstr = first.substr(10, 2);
console.log(mySubstr);

//true or false --- endsWith
let myEndsWith = second.endsWith('try');
console.log(myEndsWith);

//does it includes true or false
let myInclude = second.includes('do');
console.log(myInclude);

//Repeat hello three times
let myRepeat = 'Hello '.repeat(3);
console.log(myRepeat);


let myTrim = '    bloated    ';
console.log(myTrim.length);
console.log(myTrim.trim());




















