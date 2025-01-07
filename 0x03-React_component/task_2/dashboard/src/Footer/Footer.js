import React from "react";
import './Footer.css';
import { getFooterCopy, getCurrentYear } from '../utils';

const Footer = () => {
    return (
        <footer className='App-footer'>
            <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
        </footer>
    );
}

export default Footer;