import { Link } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const handelClick2=()=>{
    alert("SignUp Successfully")
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
       <input placeholder="Password" className="loginInput" />
       <input placeholder="Password Again" className="loginInput" />

            <button className="loginButton" onClick={handelClick2}>Sign Up</button>
           <Link to="/login"><button className="loginRegisterButton">
              Login to Account
            </button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};
