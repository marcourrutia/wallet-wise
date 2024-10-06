import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.css";
import { useContext } from "react";
import { Context } from "../../store/context";
import { NavDash } from "../NavDash/NavDash";

export const Layout = ({ children }) => {
  const { store } = useContext(Context);

  return (
    <>
      <NavDash />
      <div className="layout-container">
        {store.isAuthenticated && <Sidebar />}
        <div className="main-content">{children}</div>
      </div>
    </>
  );
};
