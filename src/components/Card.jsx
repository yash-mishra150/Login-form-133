import React from "react";
import logo from "../Images/med+.svg"
import logo2 from "../Images/med_image.svg";
import PropTypes from 'prop-types'


function Card({children, reverse}) {
  return (
    <div className='container'>
      <img src={logo} className="med1" alt="med+" />
      <img src={logo2} className="med2" alt="med_main_image" />
      
        {children}
        {reverse}

      
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.string.isRequired,
  reverse: PropTypes.string.isRequired,
}


export default Card;
