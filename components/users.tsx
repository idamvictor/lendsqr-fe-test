// Rename this file to users.tsx
"use client";

import { useState, useMemo } from "react";
import userData from "@/data/userdata.json";
import UserStats from "./user-stats";
import UserTable from "./user-table";
import Pagination from "./pagination";

interface FilterData {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filters, setFilters] = useState<FilterData>({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  // Filter users based on filter criteria
  const filteredUsers = useMemo(() => {
    return userData.filter((user) => {
      const matchesOrg =
        !filters.organization ||
        user.orgName.toLowerCase().includes(filters.organization.toLowerCase());

      const matchesUsername =
        !filters.username ||
        user.userName.toLowerCase().includes(filters.username.toLowerCase());

      const matchesEmail =
        !filters.email ||
        user.email.toLowerCase().includes(filters.email.toLowerCase());

      const matchesDate =
        !filters.date ||
        new Date(user.createdAt).toISOString().split("T")[0] === filters.date;

      const matchesPhone =
        !filters.phoneNumber || user.phoneNumber.includes(filters.phoneNumber);

      const matchesStatus =
        !filters.status ||
        user.status.toLowerCase() === filters.status.toLowerCase();

      return (
        matchesOrg &&
        matchesUsername &&
        matchesEmail &&
        matchesDate &&
        matchesPhone &&
        matchesStatus
      );
    });
  }, [filters]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Calculate stats
  const stats = {
    totalUsers: userData.length,
    activeUsers: userData.filter((user) => user.status === "active").length,
    usersWithLoans: userData.filter((user) => user.accountBalance > 0).length,
    usersWithSavings: userData.filter((user) => user.accountBalance > 0).length,
  };

  const handleFilter = (newFilters: FilterData) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filtering
  };

  return (
    <div className="users">
      <div className="users__content">
        <main className="users__main">
          <h1>Users</h1>
          <UserStats stats={stats} />
          <UserTable users={currentUsers} onFilter={handleFilter} />
          <div className="users__pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredUsers.length}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
