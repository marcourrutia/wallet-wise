import { useUser } from "@clerk/clerk-react";
import { Context } from "../store/context";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const LoadingSignIn = () => {
  const { store, actions } = useContext(Context);
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();

  const sendToken = async () => {
    const { firstName, lastName, emailAddresses } = user;
    const email = emailAddresses[0].emailAddress;
    actions.postToken(firstName, lastName, email);
  };

  useEffect(() => {
    if (isSignedIn) {
      sendToken();
      actions.setIsAuthenticated(true);
      navigate("/home");
    }
  }, [isSignedIn]);

  return <h1>Loading...</h1>;
};
