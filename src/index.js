(function (){
    'use strict'
    let counterEl = document.getElementById('counter');
    let incrementEl = document.getElementById('increment');

    incrementEl.addEventListener('click', function() {
        counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
    });
})()