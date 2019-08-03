let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);

//interesting is type of result(null) is object
console.log(typeof result);