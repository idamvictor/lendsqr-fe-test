"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  Users,
  CreditCard,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Calendar,
  ChevronDown,
  Filter,
} from "lucide-react";

type CustomTooltipProps = TooltipProps<number, string> & {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      percentage?: number;
    };
    name?: string;
  }>;
  label?: string;
};

export default function Dashboard() {
  const [activeTimeframe, setActiveTimeframe] = useState("This Month");

  const summaryCards = [
    {
      title: "Total Users",
      value: "2,453",
      change: "+2.5%",
      isPositive: true,
      icon: <Users className="text-[#213F7D]" />,
      bgColor: "bg-[#E7EEFE]",
    },
    {
      title: "Active Loans",
      value: "12,453",
      change: "+1.8%",
      isPositive: true,
      icon: <CreditCard className="text-[#39CDCC]" />,
      bgColor: "bg-[#E0F7F7]",
    },
    {
      title: "Total Disbursed",
      value: "₦500.5M",
      change: "+5.2%",
      isPositive: true,
      icon: <DollarSign className="text-[#E9B200]" />,
      bgColor: "bg-[#FEF8E7]",
    },
    {
      title: "Total Savings",
      value: "₦102.5M",
      change: "-0.5%",
      isPositive: false,
      icon: <BarChart3 className="text-[#DF18FF]" />,
      bgColor: "bg-[#F9E6FF]",
    },
  ];

  const recentTransactions = [
    {
      user: "Grace Effiom",
      type: "Loan Repayment",
      amount: "₦40,000",
      date: "Apr 30, 2023",
      status: "Completed",
    },
    {
      user: "Tosin Dokunmu",
      type: "Loan Disbursement",
      amount: "₦200,000",
      date: "Apr 28, 2023",
      status: "Completed",
    },
    {
      user: "Debby Ogana",
      type: "Savings Deposit",
      amount: "₦50,000",
      date: "Apr 25, 2023",
      status: "Completed",
    },
    {
      user: "Adedeji Olowe",
      type: "Loan Repayment",
      amount: "₦30,000",
      date: "Apr 22, 2023",
      status: "Pending",
    },
    {
      user: "Grace Effiom",
      type: "Savings Withdrawal",
      amount: "₦20,000",
      date: "Apr 20, 2023",
      status: "Completed",
    },
  ];

  const pendingApprovals = [
    {
      user: "Adedeji Olowe",
      type: "Loan Request",
      amount: "₦300,000",
      date: "May 2, 2023",
    },
    {
      user: "Debby Ogana",
      type: "Loan Request",
      amount: "₦150,000",
      date: "May 1, 2023",
    },
    {
      user: "Grace Effiom",
      type: "Guarantor Approval",
      amount: "₦200,000",
      date: "Apr 30, 2023",
    },
  ];

  const timeframes = ["Today", "This Week", "This Month", "This Year"];

  const loanPerformanceData = [
    { name: "Jan", amount: 300 },
    { name: "Feb", amount: 250 },
    { name: "Mar", amount: 400 },
    { name: "Apr", amount: 220 },
    { name: "May", amount: 450 },
    { name: "Jun", amount: 350 },
  ];

  const userActivityData = [
    { name: "Mon", users: 40 },
    { name: "Tue", users: 30 },
    { name: "Wed", users: 45 },
    { name: "Thu", users: 50 },
    { name: "Fri", users: 45 },
    { name: "Sat", users: 30 },
    { name: "Sun", users: 25 },
  ];

  const loanDistributionData = [
    { name: "Fintech", value: 250.2, percentage: 50 },
    { name: "Education", value: 150.1, percentage: 30 },
    { name: "Others", value: 100.2, percentage: 20 },
  ];

  const COLORS = ["#39CDCC", "#E9B200", "#DF18FF"];

  const formatYAxis = (value: number) => {
    return `₦${value}M`;
  };

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="recharts-default-tooltip">
          <p>{`${label}`}</p>
          <p>{`₦${payload[0].value}M`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomPieTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="recharts-default-tooltip">
          <p>{`${payload[0].name}`}</p>
          <p>{`₦${payload[0].value}M (${payload[0].payload.percentage}%)`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>
        <div className="dashboard__header-controls">
          <button className="dashboard__date-filter">
            <Calendar size={16} />
            <span>Filter by Date</span>
            <ChevronDown size={16} />
          </button>
          <button className="dashboard__export-btn">Export Report</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="dashboard__summary-cards">
        {summaryCards.map((card, index) => (
          <div key={index} className="dashboard__card">
            <div className="dashboard__card-header">
              <div
                className={`dashboard__card-icon dashboard__card-icon--${card.title
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {card.icon}
              </div>
              <div
                className={`dashboard__card-change dashboard__card-change--${
                  card.isPositive ? "positive" : "negative"
                }`}
              >
                <span>{card.change}</span>
                {card.isPositive ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
              </div>
            </div>
            <h3 className="dashboard__card-title">{card.title}</h3>
            <p className="dashboard__card-value">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="dashboard__charts-section">
        {/* Loan Performance Chart */}
        <div className="dashboard__chart-card">
          <div className="dashboard__chart-card-header">
            <h2 className="dashboard__chart-card-title">Loan Performance</h2>
            <div className="dashboard__timeframe-btns">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe}
                  className={timeframe === activeTimeframe ? "active" : ""}
                  onClick={() => setActiveTimeframe(timeframe)}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>
          <div className="dashboard__chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={loanPerformanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F0F2F5"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#545F7D", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#545F7D", fontSize: 12 }}
                  tickFormatter={formatYAxis}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="amount"
                  fill="#39CDCC"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="dashboard__chart-card">
          <div className="dashboard__chart-card-header">
            <h2 className="dashboard__chart-card-title">Pending Approvals</h2>
            <button className="dashboard__more-btn">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="dashboard__pending-approvals">
            {pendingApprovals.map((approval, index) => (
              <div key={index} className="approval-item">
                <div>
                  <p className="approval-item-user">{approval.user}</p>
                  <p className="approval-item-type">{approval.type}</p>
                </div>
                <div>
                  <p className="approval-item-amount">{approval.amount}</p>
                  <p className="approval-item-date">{approval.date}</p>
                </div>
              </div>
            ))}
            <button className="dashboard__pending-approvals-btn">
              View All Approvals
            </button>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="dashboard__transactions">
        <div className="dashboard__transactions-header">
          <h2 className="dashboard__transactions-title">Recent Transactions</h2>
          <div className="dashboard__transactions-controls">
            <button className="dashboard__transactions-filter">
              <Filter size={14} />
              <span>Filter</span>
            </button>
            <button className="dashboard__transactions-view-all">
              View All
            </button>
          </div>
        </div>
        <div className="dashboard__transactions-table-container">
          <table className="dashboard__transactions-table">
            <thead>
              <tr>
                <th>USER</th>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="user">{transaction.user}</td>
                  <td className="type">{transaction.type}</td>
                  <td className="amount">{transaction.amount}</td>
                  <td className="date">{transaction.date}</td>
                  <td>
                    <span
                      className={`dashboard__transactions-status dashboard__transactions-status--${transaction.status.toLowerCase()}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Activity and Loan Distribution */}
      <div className="dashboard__activity-distribution">
        {/* User Activity */}
        <div className="dashboard__activity">
          <div className="dashboard__activity-header">
            <h2 className="dashboard__activity-title">User Activity</h2>
            <button className="dashboard__activity-filter">This Week</button>
          </div>
          <div className="dashboard__chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userActivityData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F0F2F5"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#545F7D", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#545F7D", fontSize: 12 }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#39CDCC"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#39CDCC" }}
                  activeDot={{ r: 6, fill: "#39CDCC" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Loan Distribution */}
        <div className="dashboard__distribution">
          <div className="dashboard__distribution-header">
            <h2 className="dashboard__distribution-title">Loan Distribution</h2>
            <button className="dashboard__distribution-filter">
              By Sector
            </button>
          </div>
          <div className="dashboard__distribution-chart">
            <div className="dashboard__distribution-container">
              <ResponsiveContainer width="60%" height="100%">
                <PieChart>
                  <Pie
                    data={loanDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={false}
                  >
                    {loanDistributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="dashboard__distribution-legend">
                <div className="dashboard__distribution-total">
                  <p className="dashboard__distribution-total-amount">
                    ₦500.5M
                  </p>
                  <p className="dashboard__distribution-total-label">
                    Total Loans
                  </p>
                </div>
                <div className="dashboard__distribution-legend-items">
                  {loanDistributionData.map((entry, index) => (
                    <div
                      key={index}
                      className="dashboard__distribution-legend-item"
                    >
                      <div
                        className="dashboard__distribution-legend-item-color"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                      <div>
                        <p className="dashboard__distribution-legend-item-name">
                          {entry.name}
                        </p>
                        <p className="dashboard__distribution-legend-item-value">
                          {entry.percentage}% (₦{entry.value}M)
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
