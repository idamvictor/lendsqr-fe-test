import React from "react";
import { useDashboard } from "@/hooks/useDashboard";
import { Transaction } from "./types";

const TransactionsTable: React.FC = () => {
  const { data: userData } = useDashboard();

  if (!userData) return null;

  const generateRecentTransactions = (): Transaction[] => {
    return userData
      .filter((user) => parseFloat(user.accountBalance) > 0)
      .slice(0, 5)
      .map((user) => ({
        user: user.userName,
        type:
          parseFloat(user.accountBalance) > 5000000
            ? "Loan Disbursement"
            : "Loan Repayment",
        amount: `₦${parseFloat(user.accountBalance).toLocaleString()}`,
        date: new Date(user.createdAt).toLocaleDateString(),
        status:
          user.status === "active"
            ? "Completed"
            : user.status === "pending"
            ? "Processing"
            : "Failed",
      }));
  };

  const transactions = generateRecentTransactions();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "status-success";
      case "processing":
        return "status-warning";
      case "failed":
        return "status-error";
      default:
        return "";
    }
  };

  return (
    <div className="transactions-table">
      <h2>Recent Transactions</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.user}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>
                  <span
                    className={`status-badge ${getStatusColor(
                      transaction.status
                    )}`}
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
  );
};

export default TransactionsTable;
