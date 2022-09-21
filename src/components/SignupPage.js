// CSS
import "../css/SignupPage.css";
import SignIn from "./LoginPage";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signup-main">
      <div>
        <div className="title-h1">
          <h1>Sign up Page</h1>
        </div>

        <div className="title-h3">
          <h3>Create your new account</h3>
        </div>

        <div className="Form-group">
          <label className="email">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter an email account: required"
            ></input>
          </label>
        </div>

        <div className="Form-group">
          <label className="about_me">
            <input
              type="text"
              name="username"
              id="username"
              placeholder='Enter an "about me": required'
            ></input>
          </label>
        </div>

        <div className="Form-group">
          <label className="password">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter a password: reuired"
            ></input>
          </label>
        </div>

        <div className="Form-group">
          <label className="password2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Repeat password"
            ></input>
          </label>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
