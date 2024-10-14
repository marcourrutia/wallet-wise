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

export const GraphicsPieChartTwo = ({ ASavings, AFExpenses, AVExpenses }) => {
  const numericASavings = Number(ASavings) || 0;
  const numericAFExpenses = Number(AFExpenses) || 0;
  const numericAVExpenses = Number(AVExpenses) || 0;

  const data = [
    { name: "Fixed expenses", value: numericAFExpenses, color: "#0088FE" },
    { name: "Variable expenses", value: numericAVExpenses, color: "#00C49F" },
    { name: "Savings & Investments", value: numericASavings, color: "#FFBB28" },
  ];
  const total = numericASavings + numericAFExpenses + numericAVExpenses;

  const renderLabel = ({ name, percent, value }) => {
    return value > 0 ? `${name} ${(percent * 100).toFixed(0)}%` : "";
  };


  return (
    <div className="container-graphic-general">
      <div className="title-by-graphic">
        <span>Comparative of basic financial management vs. Ideal rule</span>
      </div>
      {total > 0 ? (

      <ResponsiveContainer width="100%" height={300}>
        <PieChart className="style-render">
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            label={renderLabel}
            labelLine={true}
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value.toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      ):(
        <div className="no-data-message">
          No data for displaying the chart.
        </div>
      )}
    </div>
  );
};

export default GraphicsPieChartTwo;
