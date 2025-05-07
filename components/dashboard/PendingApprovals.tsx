import React from "react";
import { useDashboard } from "@/hooks/useDashboard";
import { PendingApproval } from "./types";
// import Loading from "@/components/loading";
// import Error from "@/components/error";

const PendingApprovals: React.FC = () => {
  const { data: userData, isLoading, error } = useDashboard();

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error loading pending approvals</>;
  // if (error) return <Error message="Error loading pending approvals" />;
  if (!userData) return null;

  const getPendingApprovals = (): PendingApproval[] => {
    return userData
      .filter((user) => user.status === "pending")
      .slice(0, 5)
      .map((user) => ({
        user: user.userName,
        type:
          parseFloat(user.accountBalance) > 5000000
            ? "Business Loan"
            : "Personal Loan",
        amount: `₦${parseFloat(user.accountBalance).toLocaleString()}`,
        date: new Date(user.createdAt).toLocaleDateString(),
      }));
  };

  const pendingApprovals = getPendingApprovals();

  return (
    <div className="pending-approvals">
      <h2>Pending Approvals</h2>
      <div className="approvals-list">
        {pendingApprovals.map((approval, index) => (
          <div key={index} className="approval-item">
            <div className="user-info">
              <h4>{approval.user}</h4>
              <span className="loan-type">{approval.type}</span>
            </div>
            <div className="loan-info">
              <p className="amount">{approval.amount}</p>
              <p className="date">{approval.date}</p>
            </div>
            <div className="actions">
              <button className="approve">Approve</button>
              <button className="reject">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingApprovals;
