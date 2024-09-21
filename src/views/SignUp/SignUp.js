import { useState } from "react";
import { BtnBack, MsgModal, NavDash } from "../../components";
import { SignIn } from "@clerk/clerk-react";
import { validateEmail, validatePassword, post } from "../../services";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    rePassword: "",
  });

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
    } else if (formData.password !== formData.rePassword) {
      alert("Passwords do not match");
    } else {
      const { data, status, error } = await post("/user", formData);

      if (error) {
        setModalMessage("Failed: " + error);
        setShowModal(true);
      } else if (status === 400) {
        setModalMessage("Signup failed: " + data.msg);
        setShowModal(true);
      } else if (status === 409) {
        setModalMessage("Signup failed: " + data.msg);
        setShowModal(true);
      } else if (status === 201) {
        setModalMessage("Success!: " + data.msg);
        setShowModal(true);
        setFormData({
          email: "",
          first_name: "",
          last_name: "",
          password: "",
          rePassword: "",
        });
      }
    }
  };

  return (
    <div className="signup-main-container">
      {showModal && <MsgModal message={modalMessage} onClose={closeModal} />}
      <NavDash />
      <div className="signup-btn-back-container">
        <BtnBack />
      </div>
      <span className="signup-h1">Sign up for free</span>

      <div className="signup-btn-google-contain">
        <SignIn
          forceRedirectUrl="/home"
          appearance={{
            elements: {
              footerAction: { display: "none" },
              form: { display: "none" },
              dividerRow: { display: "none" },
              footer: { display: "none" },
            },
          }}
        />
      </div>
      <div className="divider">
        <span>OR</span>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-inputs-container">
          <div className="label-input-contain xl">
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
            <label for="inputFirstName">First Name</label>
            <input
              id="inputFirstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
            />
          </div>
          <div className="label-input-contain">
            <label for="inputLastName">Last Name</label>
            <input
              id="inputLastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
            />
          </div>
          <div className="label-input-contain">
            <label for="inputPassword">Password</label>
            <input
              id="inputPassword"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
            />
          </div>
          <div className="label-input-contain">
            <label for="inputRePassword">Confirm Password</label>
            <input
              id="inputRePassword"
              type="password"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button className="signup-btn-form">Register</button>
      </form>
    </div>
  );
};
