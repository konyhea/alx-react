import React from 'react';
import './Header.css';
import Holberton from '../ALX-LOGO.jpg'


//HEADER COMPONENT
const Header = () => {
    return (
        <header className='App-header'>
            <img src={Holberton} alt="The holberton logo" />
            <h1>School dashboard</h1>
        </header>
    );
}

export default Header;