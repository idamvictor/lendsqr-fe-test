"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__container">
        <Sidebar />
        <main className="layout__main">
          <AuthGuard>{children}</AuthGuard>
        </main>
      </div>
    </div>
  );
}
