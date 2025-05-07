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
import { useDashboard } from "@/hooks/useDashboard";
import { ChartData } from "./types";
import { formatYAxis, CustomTooltip } from "./utils";
// import Loading from "@/components/loading";
// import Error from "@/components/error";

const UserActivity: React.FC = () => {
  const { data: userData, isLoading, error } = useDashboard();

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading activity data</>;
  // if (isLoading) return <Loading />;
  // if (error) return <Error message="" />;
  if (!userData) return null;

  const calculateMonthlyActivity = () => {
    const monthlyData: { [key: string]: number } = {};

    userData.forEach((user) => {
      const date = new Date(user.createdAt);
      const monthYear = date.toLocaleString("default", {
        month: "short",
        year: "2-digit",
      });
      monthlyData[monthYear] = (monthlyData[monthYear] || 0) + 1;
    });

    // Convert to array and sort by date
    return Object.entries(monthlyData)
      .map(([name, users]) => ({ name, users }))
      .sort((a, b) => {
        const dateA = new Date(a.name);
        const dateB = new Date(b.name);
        return dateA.getTime() - dateB.getTime();
      })
      .slice(-6); // Get last 6 months
  };

  const data: ChartData[] = calculateMonthlyActivity();

  return (
    <div className="user-activity">
      <h2>User Activity</h2>
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserActivity;
