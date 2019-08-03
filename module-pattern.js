let counter = (function (){
    //do private stuff
    let count = 0;
    function print(message) {
        console.log(message + '---' + count)
    }
        //return an object
        return {
            get: function(){return count;},
            set: function(value){count=value;},
            value: count,
            increment: function () {
                count += 1;
                print('After increment: ')
            },
            reset: function(){
                print('Before reset: ');
                count=0;
                print('After reset');
            }
        }

})()

// console.log(counter.count);
// counter.increment()
// counter.increment();
// counter.increment();
// //actidently created a closure
// // console.log(counter.value);
// counter.reset()
// counter.increment();

counter.set(5);
// counter.get();
counter.increment();
counter.reset();
