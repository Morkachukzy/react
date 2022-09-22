// CSS
import "../css/SignupPage.css";
import SignIn from "./LoginPage";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    console.log(userDetails);
  };

  return (
    <form className="signup-main" onSubmit={handleSignup}>
      <div>
        <div className="title-h1">
          <h1>Sign up Page</h1>
        </div>

        <div className="title-h3">
          <h3>Create your new account</h3>
        </div>

        <div className="Form-group">
          <label htmlFor="email" className="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="Form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="Form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="Form-group">
          <label className="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div className="action">
          <button type="submit">Sign Up</button>
        </div>

        <br />
        <br />

        <div className="button">
          <span>Already have an account</span>
          <span>
            <Link to="/login">Log in</Link>
          </span>
          <br />
          <div id="output">
            <h4>REQUEST RESULTS</h4>
            <div id="api-response"></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
