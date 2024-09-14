import { Mission, Service, Support } from "../../components";
import React from "react";
import "./Principal.css";

export const Principal = () => {
  return (
    <div className="container-fluid img-home container-fluid-principal">
      <div className="image-container">
        <img className="img-home" src="../home1.jpg" alt="logo" />
        <div className="text-img">
          <h1>Management your finances wisely</h1>
          <h5>Track, save, and grow your finances with ease</h5>
        </div>
      </div>
      <Mission />
      <Service />
      <Support />
    </div>
  );
};
