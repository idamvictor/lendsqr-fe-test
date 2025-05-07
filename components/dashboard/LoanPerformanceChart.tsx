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
import { useDashboard } from "@/hooks/useDashboard";
// import Loading from "@/components/loading";
// import Error from "@/components/error";

const LoanPerformanceChart: React.FC = () => {
  const { data: userData, isLoading, error } = useDashboard();

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading loan performance data</>;
  if (!userData) return null;

  const calculateLoanPerformance = () => {
    const monthlyData: { [key: string]: { total: number; count: number } } = {};

    userData
      .filter((user) => parseFloat(user.accountBalance) > 0)
      .forEach((user) => {
        const date = new Date(user.createdAt);
        const monthYear = date.toLocaleString("default", {
          month: "short",
          year: "2-digit",
        });

        if (!monthlyData[monthYear]) {
          monthlyData[monthYear] = { total: 0, count: 0 };
        }
        monthlyData[monthYear].total += parseFloat(user.accountBalance);
        monthlyData[monthYear].count += 1;
      });

    // Convert to array and calculate averages
    return Object.entries(monthlyData)
      .map(([name, data]) => ({
        name,
        totalAmount: Math.round(data.total / 1000000), // Convert to millions
        averageAmount: Math.round(data.total / data.count / 1000000),
        loanCount: data.count,
      }))
      .sort((a, b) => {
        const dateA = new Date(a.name);
        const dateB = new Date(b.name);
        return dateA.getTime() - dateB.getTime();
      })
      .slice(-6); // Get last 6 months
  };

  const data = calculateLoanPerformance();

  // Calculate growth percentage
  const calculateGrowth = () => {
    if (data.length < 2) return 0;
    const currentMonth = data[data.length - 1].totalAmount;
    const previousMonth = data[data.length - 2].totalAmount;
    return ((currentMonth - previousMonth) / previousMonth) * 100;
  };

  const growth = calculateGrowth();

  return (
    <div className="loan-performance">
      <div className="header">
        <h2>Loan Performance</h2>
        <div className="performance-stats">
          <span className={`growth ${growth >= 0 ? "positive" : "negative"}`}>
            {growth >= 0 ? "↑" : "↓"} {Math.abs(growth).toFixed(1)}%
          </span>
          <span className="period">vs last month</span>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "Amount (Millions ₦)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value: number) => [`₦${value}M`, "Amount"]}
              labelStyle={{ color: "#545F7D" }}
            />
            <Bar dataKey="totalAmount" fill="#39CDCC" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="metrics">
        <div className="metric">
          <span className="label">Average Loan Amount:</span>
          <span className="value">
            ₦{data[data.length - 1]?.averageAmount.toLocaleString()}M
          </span>
        </div>
        <div className="metric">
          <span className="label">Total Active Loans:</span>
          <span className="value">{data[data.length - 1]?.loanCount}</span>
        </div>
      </div>
    </div>
  );
};

export default LoanPerformanceChart;
