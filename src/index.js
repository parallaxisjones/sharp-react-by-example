const generateName = require('sillyname');
require('./index.css'); // ADDED FOR CSS
const hello = require('./hello');

const name = generateName();
let counterEl = document.getElementById('counter');
let incrementEl = document.getElementById('increment');

incrementEl.addEventListener('click', function() {
    counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
});

hello();
window.console.log(name);