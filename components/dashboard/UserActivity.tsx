import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartData } from "./types";
import { formatYAxis, CustomTooltip } from "./utils";

const UserActivity: React.FC = () => {
  const data: ChartData[] = [
    { name: "Jan", users: 1200 },
    { name: "Feb", users: 1800 },
    { name: "Mar", users: 2200 },
    { name: "Apr", users: 2800 },
    { name: "May", users: 3500 },
    { name: "Jun", users: 4200 },
  ];

  return (
    <div className="chart-container">
      <h3>User Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#39CDCC"
            strokeWidth={2}
            dot={{ fill: "#39CDCC" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivity;
