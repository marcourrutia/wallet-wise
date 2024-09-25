import { MainLogo } from "../MainLogo/MainLogo";
import "./NavDash.css";
import { useContext } from "react";
import { Context } from "../../store/context";
import { BtnLogOut } from "../BtnLogOut/BtnLogOut";
import { useUser, SignOutButton } from "@clerk/clerk-react";

export const NavDash = () => {
  const { store } = useContext(Context);
  const { user, isSignedIn } = useUser();

  return (
    <nav className="nav-dash-container">
      <MainLogo />
      {store.isAuthenticated && !isSignedIn ? (
        <div className="nav-dash-btns-container">
          <span className="login-span">Hello! {store.userFullName}</span>
          <BtnLogOut />
        </div>
      ) : (
        ""
      )}
      {isSignedIn && (
        <div className="nav-dash-btns-container">
          <span className="login-span">Hello! {user.fullName}</span>
          <SignOutButton
            redirectUrl="/loadingsignout"
            className="signup-btn-form"
          />
        </div>
      )}
    </nav>
  );
};
