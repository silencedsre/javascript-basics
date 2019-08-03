/*
setTimeout(
    function () {
    console.log('I waited 3 seconds');
},
    3000
)
*/

//i dont know what is happening here
/*
let counter = 0;
function timeOut(){
    setTimeout(
        function () {
            console.log('hi '+ counter++);
            timeOut();
        },
        2000
    )
}

timeOut()

*/

// we can invoke a function immediately like this
(function func() {
    console.log('immediate invocation')
})();