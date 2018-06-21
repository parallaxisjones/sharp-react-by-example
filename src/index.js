import generateName from 'sillyname';
import './index.css'; // ADDED FOR CSS
import hello, { a, b } from './hello';
import icon from './icon.png';

const name = generateName();
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const iconEl = document.getElementById('icon');

const clickHandler = () => counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
incrementEl.addEventListener('click', clickHandler);

hello();
window.console.log(name);

iconEl.src = icon;
window.console.log(a);
window.console.log(b); //part 3 finished