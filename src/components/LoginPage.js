// CSS
import "../css/LoginPage.css";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="signin-main">
      <div>
        <div className="title-h1">
          <h1>SignIn Page</h1>
        </div>

        <div className="title-h3">
          <h3>Welcome back !!!</h3>
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
          <label className="password">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your password: reuired"
            ></input>
          </label>
        </div>

        <br />

        <div className="action">
          <button type="submit">Sign In</button>
        </div>

        <br />
        <br />

        <div className="button">
          <span>Don't have an account</span>
          <span>
            <Link to="/">Sign Up</Link>
          </span>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
