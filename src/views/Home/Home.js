import "./Home.css";
import React from "react";
import { AddMovement, Flow } from "../../components";
import { imgGrafic } from "../../assets";

export const Home = () => {
  return (
    <div className="container container-home">
      <div className="graph-section">
        <div className="financial-overview">
          {/* Gráfica de ingresos y gastos  */}
        </div>
        <div className="add-movement">
          <AddMovement />
        </div>
      </div>
      <div className="options-section">
        <div className="financial-flows">
          <Flow />
        </div>
      </div>
    </div>
  );
};
