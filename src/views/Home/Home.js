import "./Home";
import React from "react";
import { Flow } from "../../components/Flow/Flow";


export const Home = () => {
  return (
    <div className="container container-home">
      <div className="graph-section">
        <div className="financial-overview">
          {/* Gráfica de ingresos y gastos  */}
        </div>
        <div className="add-movement">{/* Aqui va el añadir movimiento */}</div>
      </div>
      <div className="options-section">
        <div className="financial-flows">
          <Flow />
        </div>
      </div>
    </div>
  );
};
