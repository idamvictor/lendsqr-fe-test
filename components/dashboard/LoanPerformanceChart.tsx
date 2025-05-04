import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartData } from "./types";
import { formatYAxis, CustomTooltip } from "./utils";

const LoanPerformanceChart: React.FC = () => {
  const data: ChartData[] = [
    { name: "Jan", amount: 120 },
    { name: "Feb", amount: 145 },
    { name: "Mar", amount: 180 },
    { name: "Apr", amount: 156 },
    { name: "May", amount: 210 },
    { name: "Jun", amount: 245 },
  ];

  return (
    <div className="chart-container">
      <h3>Loan Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" fill="#39CDCC" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoanPerformanceChart;
