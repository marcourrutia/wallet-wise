import { MainLogo } from "../MainLogo/MainLogo";
import "./NavMarco.css";

export const NavMarco = () => {
  return (
    <nav className="nav-container">
      <MainLogo />
      <div className="nav-btns-container">
        <span className="login-span">Support</span>
        <span className="login-span">About us</span>
        <span className="login-span">Services</span>
        <button className="signup-btn-form">Sign up</button>
        <button className="signup-btn-form">Log in</button>
      </div>
    </nav>
  );
};
