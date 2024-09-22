import { useNavigate } from "react-router-dom";
import { MainLogo } from "../MainLogo/MainLogo";
import "./NavDash.css";
import { useContext } from "react";
import { Context } from "../../store/context";
import { BtnLogOut } from "../BtnLogOut/BtnLogOut";

export const NavDash = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);

  return (
    <nav className="nav-dash-container">
      <MainLogo />
      <div className="nav-dash-btns-container">
        {store.isAuthenticated && <BtnLogOut />}
      </div>
    </nav>
  );
};
