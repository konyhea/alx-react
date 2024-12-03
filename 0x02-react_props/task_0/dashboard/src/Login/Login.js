import React from "react";

const Login = () => {
    return (
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
    );
}

export default Login;