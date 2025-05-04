import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { ChartData } from "./types";
import { CustomPieTooltip, COLORS } from "./utils";

const LoanDistribution: React.FC = () => {
  const data: ChartData[] = [
    { name: "Personal Loans", value: 45, percentage: 45 },
    { name: "Business Loans", value: 35, percentage: 35 },
    { name: "Education Loans", value: 20, percentage: 20 },
  ];

  return (
    <div className="chart-container">
      <h3>Loan Distribution</h3>
      <div style={{ height: "300px", position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pie-chart-legend">
          {data.map((entry, index) => (
            <div key={index} className="legend-item">
              <span
                className="color-box"
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              <span className="label">{entry.name}</span>
              <span className="percentage">{entry.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanDistribution;
