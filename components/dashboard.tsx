"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import UserStats from "./user-stats";
import UserTable from "./user-table";
import Pagination from "./pagination";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const totalItems = 100;

  const users = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "inactive",
    },
    {
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phoneNumber: "08160780928",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "pending",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "07003309226",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "pending",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "active",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "active",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "08060780900",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "inactive",
    },
    {
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "inactive",
    },
  ];

  return (
    <div className="flex h-screen bg-[#FBFBFB]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-medium text-[#213F7D] mb-6">Users</h1>
          <UserStats />
          <UserTable users={users} />
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-sm text-[#545F7D]">
              <span>Showing</span>
              <select
                className="mx-2 px-3 py-1 border border-[#213F7D]/20 rounded-md bg-transparent"
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
