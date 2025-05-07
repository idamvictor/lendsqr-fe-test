"use client";

import { useState, useRef, useEffect } from "react";
import { MoreVertical, Eye, UserX, UserCheck, ListFilter } from "lucide-react";
import { useRouter } from "next/navigation";
import FilterMenu from "./filter-menu";

interface FilterData {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

interface User {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}

interface UserTableProps {
  users: User[];
  onFilter: (filters: FilterData) => void;
}

interface FilterPosition {
  top: number;
  left?: number;
  right?: number;
}

export default function UserTable({ users, onFilter }: UserTableProps) {
  const router = useRouter();
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [filterPosition, setFilterPosition] = useState<FilterPosition | null>(
    null
  );
  const tableRef = useRef<HTMLDivElement>(null);

  const columns = [
    { key: "orgName", label: "ORGANIZATION" },
    { key: "userName", label: "USERNAME" },
    { key: "email", label: "EMAIL" },
    { key: "phoneNumber", label: "PHONE NUMBER" },
    { key: "createdAt", label: "DATE JOINED" },
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

  const handleFilterClick = (
    columnKey: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const tableRect = tableRef.current?.getBoundingClientRect();

    if (!tableRect) return;

    // Calculate position relative to the table
    const position: FilterPosition = {
      top: buttonRect.bottom - tableRect.top,
      left: buttonRect.left - tableRect.left,
    };

    // Adjust horizontal position for right side columns
    const isRightAligned =
      columnKey === "phoneNumber" ||
      columnKey === "createdAt" ||
      columnKey === "status";

    if (isRightAligned) {
      position.left = undefined;
      position.right = tableRect.right - buttonRect.right;
    }

    if (activeColumn === columnKey) {
      setShowFilterMenu(false);
      setActiveColumn(null);
      setFilterPosition(null);
    } else {
      setActiveColumn(columnKey);
      setShowFilterMenu(true);
      setFilterPosition(position);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tableRef.current &&
        !tableRef.current.contains(event.target as Node)
      ) {
        setShowFilterMenu(false);
        setActiveColumn(null);
        setFilterPosition(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilter = (filters: FilterData) => {
    onFilter(filters);
    setShowFilterMenu(false);
    setActiveColumn(null);
    setFilterPosition(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatUsername = (username: string) => {
    // Remove the ReferenceError part and any extra spaces
    const cleanUsername = username.replace(/<ReferenceError:.*>/, "").trim();
    // Generate a random 4-digit number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${cleanUsername}${randomNum}`;
  };

  return (
    <div className="user-table" ref={tableRef}>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                <div className="header-content">
                  <span>{column.label}</span>
                  <button
                    className="filter-button"
                    onClick={(e) => handleFilterClick(column.key, e)}
                  >
                    <ListFilter size={14} />
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
              <td>{user.orgName}</td>
              <td>{formatUsername(user.userName)}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{formatDate(user.createdAt)}</td>
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
                      <Eye size={16} className="icon" />
                      View Details
                    </button>
                    <button>
                      <UserX size={16} className="icon" />
                      Blacklist User
                    </button>
                    <button>
                      <UserCheck size={16} className="icon" />
                      Activate User
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showFilterMenu && activeColumn && filterPosition && (
        <FilterMenu
          onClose={() => {
            setShowFilterMenu(false);
            setActiveColumn(null);
            setFilterPosition(null);
          }}
          onFilter={handleFilter}
          position={filterPosition}
        />
      )}
    </div>
  );
}
