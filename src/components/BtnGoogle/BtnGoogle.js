import { FcGoogle } from "react-icons/fc";
import "./BtnGoogle.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const BtnGoogle = () => {
  const navigate = useNavigate();

  const responseGoogle = (credentialResponse) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential);
      navigate("/home");
    } catch (error) {
      const errors = error;
    }
  };

  return (
    <div className="btn-google">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          responseGoogle(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        render={(renderProps) => (
          <button
            className="btn-google"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{
              ...renderProps.style, // Mezcla los estilos existentes de Google con los tuyos
            }}
          >
            <FcGoogle
              style={{
                fontSize: "2em",
                filter: "drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.4))",
              }}
            />
            Continue with Google
          </button>
        )}
      />
    </div>
  );
};
