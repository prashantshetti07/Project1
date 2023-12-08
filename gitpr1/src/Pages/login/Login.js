import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {

  const handelClick=()=>{
    alert("Login is Successful")
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sideshsocial</h3>
          <span className="loginDesc">
            Connnect with friends world around you on Sideshsocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton" onClick={handelClick}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
              <button className="loginRegisterButton">
              Create a New Account
            </button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};
