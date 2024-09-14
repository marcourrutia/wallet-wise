import { FcGoogle } from "react-icons/fc";
import "./BtnGoogle.css";

export const BtnGoogle = () => {
  return (
    <button className="btn-google">
      <FcGoogle
        style={{
          fontSize: "2em",
          filter: "drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.4))",
        }}
      />
      Continue with Google
    </button>
  );
};
