import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

const incrementCounter = () => {
    count++;
    $('#counter').text(`Counter: ${count}`);
};

$('<button>Click me</button>').appendTo('body').on('click', _.debounce(incrementCounter, 300));
$('<div id="counter">Counter: 0</div>').appendTo('body');
