// Rename this file to users.tsx
"use client";

import { useState } from "react";
import UserStats from "./user-stats";
import UserTable from "./user-table";
import Pagination from "./pagination";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const totalItems = 100;

  const users = [
    {
      id: "1",
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "inactive",
    },
    {
      id: "2",
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phoneNumber: "08160780928",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "pending",
    },
    {
      id: "3",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      id: "4",
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "07003309226",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "pending",
    },
    {
      id: "5",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "active",
    },
    {
      id: "6",
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "active",
    },
    {
      id: "7",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      id: "8",
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "inactive",
    },
    {
      id: "9",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "inactive",
    },
  ];

  return (
    <div className="users">
      <div className="users__content">
        <main className="users__main">
          <h1 className="users__title">Users</h1>
          <UserStats />
          <UserTable users={users} />
          <div className="users__pagination-controls">
            <div className="items-per-page">
              <span>Showing</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
              </select>
              <span>out of {totalItems}</span>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalItems / itemsPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
