// Rename this file to users.tsx
"use client";

import { useState } from "react";
import userData from "@/data/userdata.json";
import UserStats from "./user-stats";
import UserTable from "./user-table";
import Pagination from "./pagination";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = userData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  // Calculate stats
  const stats = {
    totalUsers: userData.length,
    activeUsers: userData.filter((user) => user.status === "active").length,
    usersWithLoans: userData.filter((user) => user.accountBalance > 0).length,
    usersWithSavings: userData.filter((user) => user.accountBalance > 0).length,
  };

  return (
    <div className="users">
      <div className="users__content">
        <main className="users__main">
          <h1>Users</h1>
          <UserStats stats={stats} />
          <UserTable users={currentUsers} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={userData.length}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
          />
        </main>
      </div>
    </div>
  );
}
