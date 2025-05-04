import React from "react";
import { SummaryCard } from "./types";
import {
  TrendingUp,
  TrendingDown,
  Users,
  FileText,
  DollarSign,
  Database,
} from "react-feather";

const SummaryCards: React.FC = () => {
  const summaryData: SummaryCard[] = [
    {
      title: "Total Users",
      value: "2,453",
      change: "+2.6%",
      isPositive: true,
      icon: <Users />,
      bgColor: "#E7F7FF",
    },
    {
      title: "Active Loans",
      value: "12.4M",
      change: "+1.4%",
      isPositive: true,
      icon: <FileText />,
      bgColor: "#FCE6E6",
    },
    {
      title: "Total Disbursed",
      value: "₦450M",
      change: "-0.8%",
      isPositive: false,
      icon: <DollarSign />,
      bgColor: "#FFF0DF",
    },
    {
      title: "Total Savings",
      value: "₦325M",
      change: "+4.2%",
      isPositive: true,
      icon: <Database />,
      bgColor: "#F0F9FF",
    },
  ];

  return (
    <div className="summary-cards">
      {summaryData.map((card, index) => (
        <div key={index} className="summary-card">
          <div className="icon" style={{ backgroundColor: card.bgColor }}>
            {card.icon}
          </div>
          <h3>{card.title}</h3>
          <div className="value">{card.value}</div>
          <div
            className={`change ${card.isPositive ? "positive" : "negative"}`}
          >
            {card.isPositive ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            {card.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
