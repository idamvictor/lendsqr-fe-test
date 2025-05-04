"use client";

import React from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import SummaryCards from "./dashboard/SummaryCards";
import LoanPerformanceChart from "./dashboard/LoanPerformanceChart";
import PendingApprovals from "./dashboard/PendingApprovals";
import TransactionsTable from "./dashboard/TransactionsTable";
import UserActivity from "./dashboard/UserActivity";
import LoanDistribution from "./dashboard/LoanDistribution";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <SummaryCards />

      <div className="charts-section">
        <div className="chart-wrapper">
          <LoanPerformanceChart />
        </div>
        <div className="approvals-wrapper">
          <PendingApprovals />
        </div>
      </div>

      <div className="transactions-section">
        <TransactionsTable />
      </div>

      <div className="bottom-section">
        <div className="activity-wrapper">
          <UserActivity />
        </div>
        <div className="distribution-wrapper">
          <LoanDistribution />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
