import React, { useState } from 'react';
import './LogInPage.css'; // Make sure to create a Login.css file for styling
import UBSLogo from "./WhiteUBSLogoWithName.png"

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log(email, password, rememberMe);
  };

  return (
    <div className="background-div">
    <div className="login-container">
    <div className="login-form-container">
        <div className="logo-and-title">
            <div className="login-logo"></div>
            <h1 className="login-title">Connect your UBS Account</h1>
        </div>
        <div class="form-fields">
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            <div class="credentials-options">
                <label className="remember-me">
                    <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
                <button type="submit">LOG IN</button>
            </form>
        </div>
    </div>
    </div>
    </div>
  );
};

export default LogInPage;