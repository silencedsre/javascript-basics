(function(){
        function clickHandler(message) {
            alert('You clicked me ' + message);
        }
        //get a reference to myButton
    let myButton = document.getElementById('myButton');
        myButton.addEventListener('click',function(){clickHandler('so have a good day')});

})();