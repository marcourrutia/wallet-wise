import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";
import { useUser, SignedIn } from "@clerk/clerk-react";

export const PrivateRoute = ({ children }) => {
  const { store } = useContext(Context);
  const { isSignedIn } = useUser();

  if (!store.isAuthenticated) {
    return <Navigate to="/login" />;
  } else if (isSignedIn) {
    return <SignedIn>{children}</SignedIn>;
  } else {
    return children;
  }
};
