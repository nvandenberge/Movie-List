import React, { useState } from "react";
import './LoginSignupPage.scss';
import EmailPasswordInput from "../EmailPasswordInput/EmailPasswordInput";
// import LoginForm from "../LoginForm/LoginForm";

const LoginSignup = () => {
  const [userData, setUserData] = useState({
    signup_email: "",
    signup_password: "",
    login_email: "",
    login_password: "",
  });

  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <EmailPasswordInput 
          userData={userData}
          onChange={onChange}
          type="signup"
        />
        <EmailPasswordInput
          userData={userData}
          onChange={onChange}
          type="login"
        />
      </div>
    </div>
  );
};

export default LoginSignup;