import React from "react";
import './Login.css';

const Login = () => {
    return (
        <>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" name="" id="" />
                <label htmlFor="Password">
                    Password:
                </label>
                <input type="email" name="" id="" />
                <button className="btn-elment">OK</button>
            </div>
        </>
    );
}

export default Login;