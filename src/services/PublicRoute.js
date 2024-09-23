import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";
import { useUser, SignedOut } from "@clerk/clerk-react";

export const PublicRoute = ({ children }) => {
  const { store } = useContext(Context);
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (store.isAuthenticated || isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
