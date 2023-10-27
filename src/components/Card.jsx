import React from "react";
import logo from "../Images/med+.svg"
import logo2 from "../Images/med_image.svg";

function Card({children}) {
  return (
    <div className="container">
      <img src={logo} className="med1" alt="med+" />
      <img src={logo2} className="med2" alt="med_main_image" />
      
        {children}

      
    </div>
  );
}

export default Card;
