import React from "react";
import { Transaction } from "./types";

const TransactionsTable: React.FC = () => {
  const transactions: Transaction[] = [
    {
      user: "John Smith",
      type: "Loan Repayment",
      amount: "₦50,000",
      date: "2025-05-01",
      status: "Completed",
    },
    {
      user: "Sarah Johnson",
      type: "Loan Disbursement",
      amount: "₦1,200,000",
      date: "2025-05-02",
      status: "Processing",
    },
    {
      user: "Michael Brown",
      type: "Loan Repayment",
      amount: "₦75,000",
      date: "2025-05-03",
      status: "Completed",
    },
    {
      user: "Emma Wilson",
      type: "Loan Disbursement",
      amount: "₦350,000",
      date: "2025-05-03",
      status: "Failed",
    },
    {
      user: "David Lee",
      type: "Loan Repayment",
      amount: "₦25,000",
      date: "2025-05-04",
      status: "Completed",
    },
  ];

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
      <h3>Recent Transactions</h3>
      <div className="table-wrapper">
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
