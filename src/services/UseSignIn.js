import { useUser } from "@clerk/clerk-react";
import { Context } from "../store/context";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const UseSignIn = () => {
  const { actions } = useContext(Context);
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();

  const sendToken = async () => {
    const { firstName, lastName, emailAddresses } = user;
    const email = emailAddresses[0].emailAddress;
    await actions.postToken(firstName, lastName, email);
    actions.setIsAuthenticated(true);
    navigate("/home");
  };

  useEffect(() => {
    if (isSignedIn) {
      sendToken();
    }
  }, [isSignedIn]); 
};
