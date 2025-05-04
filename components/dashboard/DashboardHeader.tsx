import React from "react";

const DashboardHeader: React.FC = () => {
  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <div className="dashboard-controls">
        <select className="date-filter">
          <option value="today">Today</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
        </select>
        <button className="export-btn">Export Data</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
