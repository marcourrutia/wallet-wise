import { useNavigate } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./NavOption.css";

export const NavOption = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="nav-container">
      <MainLogo />
      <div className="nav-btns-container">
        <span className="login-span">Support</span>
        <div className="dropdown">
          <span className="login-span">About us</span>
          <div className="dropdown-content">
            <span onClick={() => scrollToSection("mision")}>Mision</span>
            <span onClick={() => scrollToSection("vision")}>Vision</span>
          </div>
        </div>
        <span className="login-span">Services</span>
        <button className="signup-btn-form" onClick={() => navigate("/signup")}>
          Sign up
        </button>
        <button className="signup-btn-form" onClick={() => navigate("/login")}>
          Log in
        </button>
      </div>
    </nav>
  );
};
