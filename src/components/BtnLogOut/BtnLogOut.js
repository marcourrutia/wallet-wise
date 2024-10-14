import { useContext } from "react";
import { Context } from "../../store/context";
import { useNavigate } from "react-router-dom";

export const BtnLogOut = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    actions.setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <button className="signup-btn-form" onClick={handleLogout}>
      Log out
    </button>
  );
};
