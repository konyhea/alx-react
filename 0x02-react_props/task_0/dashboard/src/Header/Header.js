import React, { Fragment } from "react";
import holberton from '../assets/Holberton_Logo.jpg';
import './Header.css';

function Header() {
    return (
        <>
            <header className="App-header">
                <img src={holberton} alt="holberton logo" />
                <h1>School dashboard</h1>
            </header>
        </>
    );
}

export default Header;
