import React from 'react';
import holberton from './Holberton_Logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <>
      {/* Header Section */}
      <header className="App-header">
        <img src={holberton} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>

      {/* Login Section */}
      <p className="loginText">Login to access the full dashboard</p>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>&copy; {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
