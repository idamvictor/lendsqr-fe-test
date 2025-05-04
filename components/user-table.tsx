"use client";

import { useState } from "react";
import { Filter, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  const router = useRouter();
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const columns = [
    { key: "organization", label: "ORGANIZATION" },
    { key: "username", label: "USERNAME" },
    { key: "email", label: "EMAIL" },
    { key: "phoneNumber", label: "PHONE NUMBER" },
    { key: "dateJoined", label: "DATE JOINED" },
    { key: "status", label: "STATUS" },
  ];

  const getStatusBadge = (status: string) => {
    const statusClass = `user-table__status-badge user-table__status-badge--${status.toLowerCase()}`;
    return (
      <span className={statusClass}>
        {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
      </span>
    );
  };

  const handleViewDetails = (userId: string) => {
    router.push(`/users/${userId}`);
    setActiveMenu(null);
  };

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                <div className="header-content">
                  <span>{column.label}</span>
                  <button onClick={() => setShowFilterMenu(!showFilterMenu)}>
                    <Filter size={14} />
                  </button>
                </div>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>{getStatusBadge(user.status)}</td>
              <td className="user-table__actions">
                <button
                  className="user-table__actions-button"
                  onClick={() =>
                    setActiveMenu(activeMenu === index ? null : index)
                  }
                >
                  <MoreVertical size={16} />
                </button>
                {activeMenu === index && (
                  <div className="user-table__actions-menu">
                    <button onClick={() => handleViewDetails(user.id)}>
                      View Details
                    </button>
                    <button>Blacklist User</button>
                    <button>Activate User</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
