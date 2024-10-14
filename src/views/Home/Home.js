import "./Home.css";
import React from "react";
import { AddMovement, ChatGpt, Flow, SelectFlow } from "../../components";
import { GraphicsPieChart } from "../../components/Graphics/GraphicsPieChart";

export const Home = () => {
  return (
    <div className="container-home">
      <section className="graph-section">
        <div className="graph-section-header">
          <span>Monthly Income vs. Expenses Overview</span>
          <div>
            <SelectFlow />
          </div>
        </div>
        <div className="financial-overview">
          <GraphicsPieChart />
        </div>
        <ChatGpt />
      </section>
      <section className="btn-add-movement-section">
        <AddMovement />
      </section>
      <section className="flows-section">
        <Flow />
      </section>
    </div>
  );
};
