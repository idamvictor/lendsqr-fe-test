"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Users,
  UserCheck,
  FileText,
  BarChart2,
  PiggyBank,
  ClipboardList,
  UserX,
  UsersIcon,
  Briefcase,
  Sliders,
  BadgePercent,
  ClipboardIcon,
  Scroll,
  BarChartIcon as ChartBar,
  SlidersIcon,
  FileTextIcon,
} from "lucide-react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Users");

  const menuItems = [
    {
      section: "CUSTOMERS",
      items: [
        { name: "Users", icon: <Users size={16} /> },
        { name: "Guarantors", icon: <UserCheck size={16} /> },
        { name: "Loans", icon: <FileText size={16} /> },
        { name: "Decision Models", icon: <BarChart2 size={16} /> },
        { name: "Savings", icon: <PiggyBank size={16} /> },
        { name: "Loan Requests", icon: <ClipboardList size={16} /> },
        { name: "Whitelist", icon: <UserCheck size={16} /> },
        { name: "Karma", icon: <UserX size={16} /> },
      ],
    },
    {
      section: "BUSINESSES",
      items: [
        { name: "Organization", icon: <Briefcase size={16} /> },
        { name: "Loan Products", icon: <ClipboardList size={16} /> },
        { name: "Savings Products", icon: <PiggyBank size={16} /> },
        { name: "Fees and Charges", icon: <BadgePercent size={16} /> },
        { name: "Transactions", icon: <Scroll size={16} /> },
        { name: "Services", icon: <Sliders size={16} /> },
        { name: "Service Account", icon: <UsersIcon size={16} /> },
        { name: "Settlements", icon: <ClipboardIcon size={16} /> },
        { name: "Reports", icon: <ChartBar size={16} /> },
      ],
    },
    {
      section: "SETTINGS",
      items: [
        { name: "Preferences", icon: <SlidersIcon size={16} /> },
        { name: "Fees and Pricing", icon: <BadgePercent size={16} /> },
        { name: "Audit Logs", icon: <FileTextIcon size={16} /> },
      ],
    },
  ];

  return (
    <div className="w-[260px] bg-white border-r border-[#213F7D]/10 overflow-y-auto flex-shrink-0">
      <div className="p-6 pb-10">
        <div className="flex items-center mb-14">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 8.5C0 3.80558 3.80558 0 8.5 0H15.5C20.1944 0 24 3.80558 24 8.5V15.5C24 20.1944 20.1944 24 15.5 24H8.5C3.80558 24 0 20.1944 0 15.5V8.5Z"
              fill="#213F7D"
            />
          </svg>
          <span className="ml-2 text-[#213F7D] font-bold text-xl">lendsqr</span>
        </div>

        <div className="flex items-center mb-10 text-[#213F7D]">
          <Briefcase size={16} />
          <span className="ml-2 text-sm">Switch Organization</span>
          <svg
            className="ml-2"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
              fill="#213F7D"
            />
          </svg>
        </div>

        <Link href="/" className="flex items-center mb-10 text-[#213F7D]">
          <Home size={16} />
          <span className="ml-2 text-sm">Dashboard</span>
        </Link>

        {menuItems.map((section) => (
          <div key={section.section} className="mb-8">
            <h3 className="text-xs text-[#545F7D] font-medium mb-4">
              {section.section}
            </h3>
            <ul>
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className={`flex items-center py-2.5 px-4 text-sm ${
                      activeItem === item.name
                        ? "bg-[#213F7D]/10 border-l-4 border-[#39CDCC]"
                        : "text-[#545F7D]"
                    }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
