import { useUser } from "@clerk/clerk-react";
import { Context } from "../store/context";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const LoadingSignOut = () => {
  const { actions } = useContext(Context);
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      actions.setIsAuthenticated(false);
      localStorage.clear();
      navigate("/");
    }
  }, [isSignedIn]);

  return <h1>Loading...</h1>;
};
