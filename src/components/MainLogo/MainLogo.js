import { useNavigate } from "react-router-dom";
import { logoWalletWise } from "../../assets";
import "./MainLogo.css";

export const MainLogo = () => {
  const navigate = useNavigate();

  return (
    <div className="main-logo-container" onClick={() => navigate("/")}>
      <div className="main-logo-img-container">
        <img
          className="main-logo-img"
          src={logoWalletWise}
          alt="logo de Wallet Wise"
        />
      </div>
      <span className="main-logo-span">Wallet Wise</span>
    </div>
  );
};
