import { useContext } from "react";
import { Context } from "../../store/context";
import { useNavigate } from "react-router-dom";

export const BtnLogOut = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userId");
    localStorage.removeItem("userFullName");
    localStorage.removeItem("accessToken");
    actions.setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <button className="signup-btn-form" onClick={handleLogout}>
      Log out
    </button>
  );
};
