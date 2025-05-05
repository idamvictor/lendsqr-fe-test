"use client";

import { useState } from "react";
import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AuthGuard>
      <div className="layout">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="layout__content">
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {isMobileMenuOpen && (
            <div
              className={`sidebar-overlay ${
                isMobileMenuOpen ? "sidebar-overlay--visible" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          <main className="layout__main">{children}</main>
        </div>
      </div>
    </AuthGuard>
  );
}
