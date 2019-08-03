let name = 'bob';
console.log(`hi ${name}`)

let sentence = `I am just a good guy.
    I am Shree Krishna Jamakatel.
        hello there have a good day`;
console.log(sentence)

function getReasonCount(){return 5+5;}
let interpolation = `Give me ${(getReasonCount() >= 10 ?'one good reason':'some good reason')} to try this`;
console.log(interpolation);