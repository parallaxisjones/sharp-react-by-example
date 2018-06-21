const generateName = require('sillyname');
require('./index.css'); // ADDED FOR CSS
const hello = require('./hello');
const icon = require('./icon.png');

const name = generateName();
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const iconEl = document.getElementById('icon');

incrementEl.addEventListener('click', function() {
    counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
});

hello();
window.console.log(name);

iconEl.src = icon;