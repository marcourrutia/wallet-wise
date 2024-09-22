import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

export const PrivateRoute = ({ children }) => {
  const { store } = useContext(Context);

  if (!store.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
