import { useState } from "react";
import { BtnBack, BtnGoogle, MsgModal } from "../../components";
import { validateEmail, post } from "../../services";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const closeModal = () => setShowModal(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const passwordEmpty = formData.password ? "" : "Password cannot be empty.";

    if (emailError || passwordEmpty) {
      setModalMessage(emailError + "\n" + passwordEmpty);
      setShowModal(true);
    } else {
      const { data, error } = await post("/login", formData);

      if (error) {
        setModalMessage("Login failed: " + error);
        setShowModal(true);
      } else {
        setModalMessage(data.msg);
        setShowModal(true);
      }
    }
  };

  return (
    <div className="signup-main-container">
      {showModal && <MsgModal message={modalMessage} onClose={closeModal} />}
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
