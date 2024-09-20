import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.css";
import { useUser } from "@clerk/clerk-react";

export const Layout = ({ children }) => {
  const { isSignedIn } = useUser();

  return (
    <div className="layout-container">
      {isSignedIn && <Sidebar />}
      <div className="main-content" style={{ padding: "2px" }}>
        {children}
      </div>
    </div>
  );
};
