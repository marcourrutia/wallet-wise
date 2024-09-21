import { useNavigate } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./NavMarco.css";

export const NavMarco = () => {
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
        <span className="login-span" onClick={() => scrollToSection("mision")}>
          About us
        </span>
        <span className="login-span">Services</span>
        <button className="signup-btn-form" onClick={() => navigate("signup")}>
          Sign up
        </button>
        <button className="signup-btn-form" onClick={() => navigate("login")}>
          Log in
        </button>
      </div>
    </nav>
  );
};
