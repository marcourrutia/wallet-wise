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
        <div className="dropdown">
          <span className="login-span">About us</span>
          <div className="dropdown-content">
            <span onClick={() => scrollToSection("mision")}>Mission</span>
            <span onClick={() => scrollToSection("vision")}>Vision</span>
          </div>
        </div>
        <span
          className="login-span"
          onClick={() => scrollToSection("services")}
        >
          Services
        </span>
        <span className="login-span" onClick={() => scrollToSection("contact")}>
          Contact us
        </span>
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
