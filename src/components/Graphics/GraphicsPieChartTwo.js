import React from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from "recharts";

export const GraphicsPieChartTwo = ({
  ASavings,
  AFExpenses,
  AVExpenses,
}) => {
  const numericASavings = Number(ASavings) || 0;
  const numericAFExpenses = Number(AFExpenses) || 0;
  const numericAVExpenses = Number(AVExpenses) || 0;

  const data = [
    { name: "Gastos Fijos", value: numericAFExpenses, color: "#0088FE" },
    { name: "Gastos Variables", value: numericAVExpenses, color: "#00C49F" },
    { name: "Ahorros", value: numericASavings, color: "#FFBB28" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h3 className="text-xl font-bold mb-4 text-center">Distribución de Gastos y Ahorros</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie 
            data={data} 
            dataKey="value" 
            nameKey="name" 
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))
            }
          </Pie>
          <Tooltip formatter={(value) => `${value.toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default GraphicsPieChartTwo;