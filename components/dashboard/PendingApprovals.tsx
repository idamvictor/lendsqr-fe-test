import React from "react";
import { PendingApproval } from "./types";

const PendingApprovals: React.FC = () => {
  const pendingApprovals: PendingApproval[] = [
    {
      user: "John Smith",
      type: "Personal Loan",
      amount: "₦250,000",
      date: "2025-05-01",
    },
    {
      user: "Sarah Johnson",
      type: "Business Loan",
      amount: "₦1,200,000",
      date: "2025-05-02",
    },
    {
      user: "Michael Brown",
      type: "Personal Loan",
      amount: "₦350,000",
      date: "2025-05-03",
    },
    {
      user: "Emma Wilson",
      type: "Education Loan",
      amount: "₦500,000",
      date: "2025-05-04",
    },
    {
      user: "David Lee",
      type: "Business Loan",
      amount: "₦2,500,000",
      date: "2025-05-04",
    },
  ];

  return (
    <div className="pending-approvals">
      <h3>Pending Approvals</h3>
      <div className="approvals-list">
        {pendingApprovals.map((approval, index) => (
          <div key={index} className="approval-item">
            <div className="user-info">
              <h4>{approval.user}</h4>
              <span className="loan-type">{approval.type}</span>
            </div>
            <div className="loan-details">
              <span className="amount">{approval.amount}</span>
              <span className="date">{approval.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingApprovals;
