import React from 'react';
import holberton from './Holberton_Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={holberton} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <p className='loginText'>Login to access the full dashboard</p>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

export default App;
