import React from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import "./Graphics.css";

export const GraphicsPieChart = ({ ASavings, AFExpenses, AVExpenses }) => {
  const total =
    Number(ASavings) + Number(AFExpenses) + Number(AVExpenses) || 100;

  const data = [
    { name: "Fixed expenses", value: 50 },
    { name: "Variable expenses", value: 30 },
    { name: "Savings & Investments", value: 20 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const renderLabel = ({ name, value }) => {
    return `${name}: ${value}%`;
  };

  return (
    <div className="container-graphic-general">
      <div className="title-by-graphic">
        <span>Ideal basic rule</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart className="style-render">
          <Pie
            data={data}
            label={renderLabel}
            labelLine={true}
            outerRadius={100}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value}%`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicsPieChart;
