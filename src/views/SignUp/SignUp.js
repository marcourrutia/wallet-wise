import { BtnBack, MainLogo } from "../../components";
import "./SignUp.css";

export const SignUp = () => {
  return (
    <div className="signup-main-container">
      <div className="signup-nav">
        <MainLogo />
      </div>
      <div className="signup-btn-back-container">
        <BtnBack />
      </div>
      <h1 className="signup-h1">Sign up for free</h1>
    </div>
  );
};
