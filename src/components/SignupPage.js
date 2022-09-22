// CSS
import "../css/SignupPage.css";
import SignIn from "./LoginPage";
import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const getValueInput = event => {
    console.log(username, email, password, password2);
  };
  
  
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
              name="email"
              id="email"
              placeholder="Enter an email account: required"
              onChange={event => setUsername(event.target.value)}
              required
            ></input>
          </label>
        </div>

        <div className="Form-group">
          <label className="about_me">
            <input
              type="text"
              name="about_me"
              id="about_me"
              placeholder='Enter an "about me": required'
              onChange={event => setEmail(event.target.value)}
              required
            ></input>
          </label>
        </div>

        <div className="Form-group">
          <label className="password">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter a password: required"
              onChange={event => setPassword(event.target.value)}
              required
            ></input>
          </label>
        </div>

        <div className="Form-group">
          <label className="password2">
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Repeat password: required"
              onChange={event => setPassword2(event.target.value)}
              required
            ></input>
          </label>
        </div>

        <br />

        <div className="action">
          <button type="submit" onClick={getValueInput}>Sign Up</button>
        </div>
        
        <br />
        <br />

        <div className="button">
          <span>Already have an account</span>
          <span>
            <Link to="/login">Log in</Link>
          </span>
          <br />
            <div id='output'>
                <h4>REQUEST RESULTS</h4>
                    <div id="api-response">
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
