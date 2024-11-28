import React from "react";
import holberton from '../Assets/Holberton_Logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={holberton} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="container">
      <p className='loginText'>Login to access the full dashboard</p>
      
      {/* Email Label and Input */}
      <label htmlFor="email">
        Email:
        <input type="email" id="email" />
      </label>
      
      {/* Password Label and Input */}
      <label htmlFor="password">
        Password:
        <input type="password" id="password" />
      </label>
      
      {/* OK Button */}
      <button>OK</button>
      </div>
      
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School </p>
      </footer>
    </>
  );
}

export default App;
