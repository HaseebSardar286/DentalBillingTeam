"use client";

import React, { useEffect } from "react";
import Sidebar from "@/components/admin/Sidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AnalyticsCharts from "@/components/admin/AnalyticsCharts";

export default function AnalyticsPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "var(--background)";
  }, []);

  return (
    <div className="d-flex w-100 bg-light min-vh-100">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column h-100 overflow-hidden">
        <AdminNavbar />
        <div
          className="p-4 overflow-auto flex-grow-1"
          style={{ backgroundColor: "var(--background)" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4 pb-2">
            <div>
              <h2
                className="fw-bold mb-1"
                style={{ color: "var(--text-dark)", fontSize: "1.75rem" }}
              >
                Analytics & Reports
              </h2>
              <p className="text-muted mb-0">
                Detailed breakdown of key performance indicators.
              </p>
            </div>
            <button className="btn btn-primary-custom fw-medium rounded-3 px-4 shadow-sm">
              <i className="fa-solid fa-download me-2"></i> Download PDF
            </button>
          </div>
          <AnalyticsCharts />
        </div>
      </div>
    </div>
  );
}
