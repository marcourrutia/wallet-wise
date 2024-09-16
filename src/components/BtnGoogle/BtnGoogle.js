import { FcGoogle } from "react-icons/fc";
import "./BtnGoogle.css";
import { GoogleLogin } from "@react-oauth/google";

export const BtnGoogle = () => {
  const pruebalog=(respuesta) => {
    console.log("respuesta paciencia");
  }
  return (
    <div className="btn-google">
      <GoogleLogin
        clientId = "866333680498-7o58cndhc6vk03g4hreeu89pga5nsd0j.apps.googleusercontent.com"
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log("Entrooo");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        render={(renderProps) => (
          <button
            className="btn-google"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
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
