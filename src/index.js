const generateName = require('sillyname');
require('./index.css'); // ADDED FOR CSS
const hello = require('./hello');
const icon = require('./icon.png');

const name = generateName();
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const iconEl = document.getElementById('icon');

const clickHandler = counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
incrementEl.addEventListener('click', clickHandler);

hello();
window.console.log(name);

iconEl.src = icon;