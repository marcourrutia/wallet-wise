import "./Home.css";
import React from "react";
import {
  AddMovement,
  ChatGpt,
  Flow,
  GraphicBar,
  SelectFlow,
} from "../../components";

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
        <GraphicBar />
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
