import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import userData from "@/data/userdata.json";
import { ChartData } from "./types";
import { COLORS } from "./utils";

const LoanDistribution: React.FC = () => {
  const calculateLoanDistribution = () => {
    const smallLoans = userData.filter(
      (user) => user.accountBalance > 0 && user.accountBalance <= 2000000
    ).length;
    const mediumLoans = userData.filter(
      (user) => user.accountBalance > 2000000 && user.accountBalance <= 5000000
    ).length;
    const largeLoans = userData.filter(
      (user) => user.accountBalance > 5000000
    ).length;
    const total = smallLoans + mediumLoans + largeLoans;

    return [
      {
        name: "Small Loans (<2M)",
        value: smallLoans,
        percentage: Math.round((smallLoans / total) * 100),
      },
      {
        name: "Medium Loans (2M-5M)",
        value: mediumLoans,
        percentage: Math.round((mediumLoans / total) * 100),
      },
      {
        name: "Large Loans (>5M)",
        value: largeLoans,
        percentage: Math.round((largeLoans / total) * 100),
      },
    ];
  };

  const data: ChartData[] = calculateLoanDistribution();

  return (
    <div className="loan-distribution">
      <h2>Loan Distribution</h2>
      <div className="chart-content">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="legend">
          {data.map((entry, index) => (
            <div key={index} className="legend-item">
              <div
                className="color-box"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span>{entry.name}</span>
              <span className="percentage">{entry.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanDistribution;
