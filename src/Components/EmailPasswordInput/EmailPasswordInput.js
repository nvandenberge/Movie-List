import React from "react";
import "./EmailPasswordInput.scss";
import { emailValidation } from "../helpers";
// import { useNavigate } from "react-router-dom";
//   const navigate = useNavigate();

const EmailPasswordInput = ({ userData, onChange, type }) => {
  const handleSignup = (userEmail, userPassword) => {
    if (emailValidation(userEmail)) {
      console.log("signup success");
    } else {
      console.log("signup failed");
    }
  };

  const getTypeText = (type) => {
   return type === "signup" ? "Sign Up" : "Log In";
  };

  const getBtnName = (type) => {
    return type === "signup" ? "btn-signup" : "btn-login";
  };

  const handleSubmit = (e, userData) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "btn-signup") {
      handleSignup(userData.signup_email, userData.signup_password);

      // function to pass signup email and password to users API
    } 
    if (name === "btn-login") {
      emailValidation(userData.login_email)
    }
  };


  return (
    <div className="wrapper">
      <h3>{getTypeText(type)}</h3>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name={`${type}_email`}
            className="email_input"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name={`${type}_password`}
            className="password_input"
            onChange={onChange}
          ></input>
        </div>
        <button type="submit" name={getBtnName(type)} className="submit_btn" onClick={((e) => handleSubmit(e, userData))}>
        {getTypeText(type)}
        </button>
      </form>
    </div>
  );
};

export default EmailPasswordInput;
