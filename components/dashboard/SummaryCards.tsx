import React from "react";
import { SummaryCard } from "./types";
import { useDashboard } from "@/hooks/useDashboard";
import { Users, FileText, DollarSign, Database } from "react-feather";
// import Loading from "@/components/loading";
// import Error from "@/components/error";

const SummaryCards: React.FC = () => {
  const { data: userData, isLoading, error } = useDashboard();

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading dashboard data</>;
  // if (isLoading) return <Loading />;
  // if (error) return <Error message="" />;
  if (!userData) return null;

  // Calculate metrics from user data
  const totalUsers = userData.length;
  const activeUsers = userData.filter(
    (user) => user.status === "active"
  ).length;
  const totalBalance = userData.reduce(
    (sum, user) => sum + parseFloat(user.accountBalance),
    0
  );
  const usersWithLoans = userData.filter(
    (user) => parseFloat(user.accountBalance) > 0
  ).length;

  const summaryData: SummaryCard[] = [
    {
      title: "Total Users",
      value: totalUsers.toLocaleString(),
      change: "+2.6%",
      isPositive: true,
      icon: <Users />,
      bgColor: "#E7F7FF",
    },
    {
      title: "Active Users",
      value: activeUsers.toLocaleString(),
      change: `${((activeUsers / totalUsers) * 100).toFixed(1)}%`,
      isPositive: true,
      icon: <FileText />,
      bgColor: "#FCE6E6",
    },
    {
      title: "Total Balance",
      value: `₦${(totalBalance / 1000000).toFixed(1)}M`,
      change: "+1.4%",
      isPositive: true,
      icon: <DollarSign />,
      bgColor: "#FFF0DF",
    },
    {
      title: "Users with Loans",
      value: usersWithLoans.toLocaleString(),
      change: `${((usersWithLoans / totalUsers) * 100).toFixed(1)}%`,
      isPositive: true,
      icon: <Database />,
      bgColor: "#F0F9FF",
    },
  ];

  return (
    <div className="summary-cards">
      {summaryData.map((card, index) => (
        <div
          key={index}
          className="summary-card"
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p className="value">{card.value}</p>
          <p className={`change ${card.isPositive ? "positive" : "negative"}`}>
            {card.change}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
