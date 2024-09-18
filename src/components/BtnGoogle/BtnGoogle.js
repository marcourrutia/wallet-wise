import { FcGoogle } from "react-icons/fc";
import "./BtnGoogle.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode }  from "jwt-decode";


export const BtnGoogle = () => {
  
  const responseGoogle = (credentialResponse) => {
    try{
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log("Información del usuario:", decodedToken);
      console.log("por aqui entro");
    }catch(error){
      console.log("dio error");
    }
  };
  
  return (
    <div className="btn-google">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          responseGoogle(credentialResponse);
          console.log("ingreso el usuario");
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

