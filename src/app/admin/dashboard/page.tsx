"use client";

import React, { useEffect } from "react";
import Sidebar from "@/components/admin/Sidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AnalyticsCharts from "@/components/admin/AnalyticsCharts";
import LeadsTable from "@/components/admin/LeadsTable";

export default function Dashboard() {
  useEffect(() => {
    // Ensuring background color doesn't conflict with root layout padding/colors
    document.body.style.backgroundColor = "var(--background)";
  }, []);

  return (
    <div className="d-flex w-100 bg-light min-vh-100">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow-1 d-flex flex-column h-100 overflow-hidden">
        {/* Navbar */}
        <AdminNavbar />

        {/* Dashboard Content */}
        <div
          className="p-4 overflow-auto"
          style={{ backgroundColor: "var(--background)" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4 pb-2">
            <div>
              <h2
                className="fw-bold mb-1"
                style={{ color: "var(--text-dark)", fontSize: "1.75rem" }}
              >
                Overview
              </h2>
              <p className="text-muted mb-0">
                Welcome back, here's what's happening with your leads today.
              </p>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary bg-white text-muted fw-medium rounded-3">
                <i className="fa-regular fa-calendar me-2"></i> This Month
              </button>
              <button className="btn btn-primary-custom fw-medium rounded-3 px-4 shadow-sm">
                <i className="fa-solid fa-download me-2"></i> Export Report
              </button>
            </div>
          </div>

          <AnalyticsCharts />
          <LeadsTable />
        </div>
      </div>
    </div>
  );
}
