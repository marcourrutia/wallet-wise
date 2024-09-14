import { logoWalletWise } from "../../assets";
import "./MainLogo.css";

export const MainLogo = () => {
  return (
    <div className="main-logo-container">
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
