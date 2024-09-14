import { useState } from "react";
import { BtnBack, BtnGoogle, MainLogo } from "../../components";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isEmpty = (value) => value === "";
  const hasEmptyFields = (obj) => {
    return Object.values(obj).some(isEmpty);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasEmptyFields(formData)) {
      alert("Debe completar todos los datos");
    } else if (formData.password != formData.rePassword) {
      alert("Passwords do not match");
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div className="signup-main-container">
      <div className="signup-btn-back-container">
        <BtnBack />
      </div>
      <span className="signup-h1">Log in</span>
      <div className="signup-btn-google-contain">
        <BtnGoogle />
      </div>
      <div className="divider">
        <span>OR</span>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="login-inputs-container">
          <div className="label-input-contain">
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="label-input-contain">
            <label htmlFor="inputPassword">Password</label>
            <input
              id="inputPassword"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <span
          className="login-span"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </span>
        <button className="signup-btn-form">Continue</button>
      </form>
    </div>
  );
};
