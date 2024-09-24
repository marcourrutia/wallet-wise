import { useState } from "react";
import { BtnBack, MsgModal, NavDash } from "../../components";
import { SignIn } from "@clerk/clerk-react";
import { validateEmail, validatePassword, post } from "../../services";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/context";

export const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const closeModal = () => setShowModal(false);
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    rePassword: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError || passwordError) {
      setModalMessage(emailError + "\n" + passwordError);
      setShowModal(true);
    } else if (formData.password !== formData.rePassword) {
      setModalMessage("Passwords do not match.");
      setShowModal(true);
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
        actions.setUserId(data.user_id);
        actions.setUserFullName(data.user_first_name, data.user_last_name);
        actions.setAccessToken(data.access_token);
        actions.setIsAuthenticated(true);
        navigate("/home");
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
          forceRedirectUrl="/loadingsignin"
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
            <label htmlFor="inputFirstName">First Name</label>
            <input
              id="inputFirstName"
              name="first_name"
              value={formData.first_name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="label-input-contain">
            <label for="inputLastName">Last Name</label>
            <input
              id="inputLastName"
              name="last_name"
              value={formData.last_name}
              onChange={handleOnChange}
              required
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
