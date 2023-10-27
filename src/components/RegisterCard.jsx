import React from "react";
import logo from "../Images/med+.svg";
import logo2 from "../Images/med_image.svg";
import RegisterForm from "./RegisterForm";

function RegisterCard({ reverse }) {
  return (
    <div className="main">
      <div className="container2">
        <img src={logo} className="med1" alt="med+" />
        <img src={logo2} className="med2" alt="med_main_image" />
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterCard;
