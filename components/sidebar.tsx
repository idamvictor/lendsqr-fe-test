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
        { name: "Users", icon: <Users size={16} />, path: "/users" },
        {
          name: "Guarantors",
          icon: <UserCheck size={16} />,
          path: "/guarantors",
        },
        { name: "Loans", icon: <FileText size={16} />, path: "/loans" },
        {
          name: "Decision Models",
          icon: <BarChart2 size={16} />,
          path: "/decision-models",
        },
        { name: "Savings", icon: <PiggyBank size={16} />, path: "/savings" },
        {
          name: "Loan Requests",
          icon: <ClipboardList size={16} />,
          path: "/loan-requests",
        },
        {
          name: "Whitelist",
          icon: <UserCheck size={16} />,
          path: "/whitelist",
        },
        { name: "Karma", icon: <UserX size={16} />, path: "/karma" },
      ],
    },
    {
      section: "BUSINESSES",
      items: [
        {
          name: "Organization",
          icon: <Briefcase size={16} />,
          path: "/organization",
        },
        {
          name: "Loan Products",
          icon: <ClipboardList size={16} />,
          path: "/loan-products",
        },
        {
          name: "Savings Products",
          icon: <PiggyBank size={16} />,
          path: "/savings-products",
        },
        {
          name: "Fees and Charges",
          icon: <BadgePercent size={16} />,
          path: "/fees-charges",
        },
        {
          name: "Transactions",
          icon: <Scroll size={16} />,
          path: "/transactions",
        },
        { name: "Services", icon: <Sliders size={16} />, path: "/services" },
        {
          name: "Service Account",
          icon: <UsersIcon size={16} />,
          path: "/service-account",
        },
        {
          name: "Settlements",
          icon: <ClipboardIcon size={16} />,
          path: "/settlements",
        },
        { name: "Reports", icon: <ChartBar size={16} />, path: "/reports" },
      ],
    },
    {
      section: "SETTINGS",
      items: [
        {
          name: "Preferences",
          icon: <SlidersIcon size={16} />,
          path: "/preferences",
        },
        {
          name: "Fees and Pricing",
          icon: <BadgePercent size={16} />,
          path: "/fees-pricing",
        },
        {
          name: "Audit Logs",
          icon: <FileTextIcon size={16} />,
          path: "/audit-logs",
        },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__org-switch">
          <Briefcase size={16} />
          <span className="sidebar__org-switch-text">Switch Organization</span>
          <svg
            className="sidebar__org-switch-icon"
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

        <Link
          href="/dashboard"
          className={`sidebar__menu-item ${
            activeItem === "Dashboard" ? "sidebar__menu-item--active" : ""
          }`}
          onClick={() => setActiveItem("Dashboard")}
        >
          <Home size={16} />
          <span className="sidebar__menu-item-text">Dashboard</span>
        </Link>

        {menuItems.map((section) => (
          <div key={section.section} className="sidebar__section">
            <h3 className="sidebar__section-title">{section.section}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`sidebar__menu-item ${
                      activeItem === item.name
                        ? "sidebar__menu-item--active"
                        : ""
                    }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.icon}
                    <span className="sidebar__menu-item-text">{item.name}</span>
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
