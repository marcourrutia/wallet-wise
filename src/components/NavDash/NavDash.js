import { useNavigate } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./NavDash.css";
import { useContext } from "react";
import { Context } from "../../store/context";
import { BtnLogOut } from "../BtnLogOut/BtnLogOut";
import { UserButton, useUser, SignOutButton } from "@clerk/clerk-react";

export const NavDash = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  const { user, isSignedIn } = useUser();

  return (
    <nav className="nav-dash-container">
      <MainLogo />
      <div className="nav-dash-btns-container">
        {store.isAuthenticated && !user ? <BtnLogOut /> : ""}
        {isSignedIn && <SignOutButton className="signup-btn-form" />}
      </div>
    </nav>
  );
};
