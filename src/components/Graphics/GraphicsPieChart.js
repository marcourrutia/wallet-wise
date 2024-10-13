import React from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

export const GraphicsPieChart = ({ ASavings, AFExpenses, AVExpenses }) => {
  const total =
    Number(ASavings) + Number(AFExpenses) + Number(AVExpenses) || 100;

  const data = [
    { name: "Gastos Fijos", value: 50, actualValue: Number(AFExpenses) },
    { name: "Gastos Variables", value: 30, actualValue: Number(AVExpenses) },
    { name: "Ahorros", value: 20, actualValue: Number(ASavings) },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => [
              `${props.payload.actualValue.toFixed(2)} (${(
                (props.payload.actualValue / total) *
                100
              ).toFixed(2)}%)`,
              `${name} (Ideal: ${value}%)`,
            ]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicsPieChart;
