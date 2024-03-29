/*let a = 7 * undefined / 'panama';
console.log(a);
 */
/*
function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exception you\'ll never see this.');
}
beforeTryCatch();
 */

function afterTryCatch() {
    try{
        let obj = undefined;
    console.log(obj.b);
    console.log('If the previous line of code throws an exception you\'ll never see this.');
    } catch (error) {
        console.log('I caught an exception: '+ error.message);
    } finally {
        console.log('This will happen no matter what');
    }

    console.log('I can still run');
}

afterTryCatch();