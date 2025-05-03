"use client";

import { useState } from "react";
import { Filter, MoreVertical } from "lucide-react";

interface User {
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
    switch (status.toLowerCase()) {
      case "active":
        return (
          <span className="px-3 py-1 rounded-full bg-[#39CD62]/10 text-[#39CD62] text-xs font-medium">
            Active
          </span>
        );
      case "inactive":
        return (
          <span className="px-3 py-1 rounded-full bg-[#545F7D]/10 text-[#545F7D] text-xs font-medium">
            Inactive
          </span>
        );
      case "pending":
        return (
          <span className="px-3 py-1 rounded-full bg-[#E9B200]/10 text-[#E9B200] text-xs font-medium">
            Pending
          </span>
        );
      case "blacklisted":
        return (
          <span className="px-3 py-1 rounded-full bg-[#E4033B]/10 text-[#E4033B] text-xs font-medium">
            Blacklisted
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
      <table className="w-full min-w-[1000px] border-collapse">
        <thead>
          <tr className="text-xs text-[#545F7D] font-semibold">
            {columns.map((column) => (
              <th key={column.key} className="px-6 py-4 text-left">
                <div className="flex items-center">
                  <span>{column.label}</span>
                  <button
                    className="ml-2"
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                  >
                    <Filter size={14} />
                  </button>
                </div>
              </th>
            ))}
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-t border-[#213F7D]/10 text-sm text-[#545F7D]"
            >
              <td className="px-6 py-4">{user.organization}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phoneNumber}</td>
              <td className="px-6 py-4">{user.dateJoined}</td>
              <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
              <td className="px-6 py-4 relative">
                <button
                  className="text-[#545F7D]"
                  onClick={() =>
                    setActiveMenu(activeMenu === index ? null : index)
                  }
                >
                  <MoreVertical size={16} />
                </button>
                {activeMenu === index && (
                  <div className="absolute right-6 mt-2 w-40 bg-white rounded-md shadow-lg z-10 py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-[#545F7D] hover:bg-gray-100">
                      View Details
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-[#545F7D] hover:bg-gray-100">
                      Blacklist User
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-[#545F7D] hover:bg-gray-100">
                      Activate User
                    </button>
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
