import { useNavigate, useLocation } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./NavMarco.css";
import { SignOutButton, useUser } from "@clerk/clerk-react";

export const NavMarco = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const { user, isSignedIn, isLoaded } = useUser();

  const location = useLocation();
  const isLoginView = location.pathname === "/login";
  const isSignupView = location.pathname === "/signup";

  if ((isLoginView || isSignupView) && !isSignedIn) {
    return null;
  }

  return (
    <nav className="nav-container">
      <MainLogo />
      {isSignedIn ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="span-login" style={{ marginRight: 10 }}>
            Hello, {user?.firstName}!
          </span>
          <SignOutButton />
        </div>
      ) : (
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
          <button
            className="signup-btn-form"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
          <button
            className="signup-btn-form"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      )}
    </nav>
  );
};
