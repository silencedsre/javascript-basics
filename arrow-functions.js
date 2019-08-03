let hi = () => {console.log('shree');}
hi();

let hello = (name) => {console.log(`hello ${name}`);};
hello('Shree');

let add = (x,y) =>{
    return x+y;
}
console.log(add(7,3));

let names = ['shree', 'krishna', 'ram', 'prasad', 'shyam'];
names.map((name)=>{console.log(`hello ${name}!`)});

let transformed = names.map((name)=>{return `hello ${name}`});
console.log(transformed);