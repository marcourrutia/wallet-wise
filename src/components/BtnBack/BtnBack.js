import { useNavigate } from "react-router-dom";
import "./BtnBack.css";
import { TiArrowBackOutline } from "react-icons/ti";

export const BtnBack = () => {
  const navigation = useNavigate();
  return (
    <div className="btn-back-container" onClick={() => navigation(-1)}>
      <TiArrowBackOutline className="btn-back-icon" />
      <span className="btn-back-span">Back</span>
    </div>
  );
};
