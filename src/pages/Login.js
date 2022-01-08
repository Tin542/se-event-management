import react from "react";
import { Link, useHistory } from "react-router-dom";
import { FcGoogle, FcBusinessman } from "react-icons/fc";
import "../asset/Login.css";

const Login = () => {
  return (
    <body>
      <div class="wrap-main-content">
        <h1>Login</h1>
        <div class="wrap-google-login">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <FcGoogle className="google-icon" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <div class="form-login">
          <div class="form-control">
            {/* <FcBusinessman className="input-icon"></FcBusinessman> */}
            <input
              type="text"
              name="username"
              // onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              class="login-field"
            />
          </div>
          <div class="form-control">
            <input
              type="password"
              name="password"
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              class="login-field"
            />
          </div>
          <button
            // onClick={(e) => {
            //   handleSubmit(e);
            // }}
            class="button">
            Login
          </button>
        </div>
        <div class="return-control">
          <a href="#">Return to Home Page</a>
        </div>
      </div>
    </body>
  );
};

export default Login;
