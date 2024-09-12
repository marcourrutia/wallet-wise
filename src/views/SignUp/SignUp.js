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
      <div class="divider">
        <span>OR</span>
      </div>
      <form className="signup-form">
        <div className="inputs-container">
          <div className="label-input-contain">
            <label for="inputEmail">Email</label>
            <input id="inputEmail" />
          </div>
          <div className="label-input-contain">
            <label for="inputFirstName">First Name</label>
            <input id="inputFirstName" />
          </div>
          <div className="label-input-contain">
            <label for="inputLastName">Email</label>
            <input id="inputLastName" />
          </div>
          <div className="label-input-contain">
            <label for="inputPassword">Email</label>
            <input id="inputPassword" />
          </div>
        </div>
      </form>
    </div>
  );
};
