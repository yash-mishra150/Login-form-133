import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm({ children }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (email === "") {
      setIsValidEmail(false);
      setBtnDisabled(true);
      setMessage("");
    } else if (email !== "") {
      setBtnDisabled(false);
      setMessage("Invalid email format");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  return (
    <>
      <div className="login2">
        <form action="#">
          <h2 className="text">Welcome!</h2>
          <h3 className="text2">Please,enter your details</h3>
          <div class="input-box underline">
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleInputChange}
              required
            />

            <div class="underline"></div>
          </div>
          {!isValidEmail && <p className="error-message">{message}</p>}
          <div class="input-box">
            <input type="password" placeholder="Enter Your Password" required />
            <div class="underline">
              <Link to="/" className="link">
                Forgot password?
              </Link>
            </div>
          </div>
          <div class="input-box button">
            <button type="Submit" disabled={BtnDisabled}>
              Sign in
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/" className="link">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
