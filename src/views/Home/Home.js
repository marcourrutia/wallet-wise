import "./Home.css";
import React from "react";
import { AddMovement, ChatGpt, Flow, SelectFlow } from "../../components";
import { GraphicsPieChart } from "../../components/Graphics/GraphicsPieChart";

export const Home = () => {
  return (
    <div className="container container-home">
      <div className="graph-section">
        <SelectFlow />
        <div className="financial-overview">
          {/* Gráfica de ingresos y gastos  */}
          <GraphicsPieChart />
        </div>
        <div className="add-movement">
          <AddMovement />
        </div>
      </div>
      <div className="options-section">
        <ChatGpt />
        <div className="financial-flows">
          <Flow />
        </div>
      </div>
    </div>
  );
};
