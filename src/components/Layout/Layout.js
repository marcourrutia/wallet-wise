import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.css";
import { useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { Context } from "../../store/context";
import { NavDash } from "../NavDash/NavDash";

export const Layout = ({ children }) => {
  const { isSignedIn } = useUser();
  const { store } = useContext(Context);

  return (
    <>
      <NavDash />
      <div className="layout-container">
        {store.isAuthenticated && <Sidebar />}
        <div className="main-content" style={{ padding: "2px" }}>
          {children}
        </div>
      </div>
    </>
  );
};
