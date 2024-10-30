import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; 

$(document).ready(() => {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start-button">Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;

    const updateCounter = () => {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    };

    const debouncedUpdateCounter = _.debounce(updateCounter, 300);
    $('#start-button').on('click', debouncedUpdateCounter);
});

