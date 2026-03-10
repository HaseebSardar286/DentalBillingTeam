"use client";

import React, { useEffect } from "react";
import Sidebar from "@/components/admin/Sidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function SettingsPage() {
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
                System Settings
              </h2>
              <p className="text-muted mb-0">
                Manage your application preferences and user access.
              </p>
            </div>
          </div>
          <div
            className="card-custom p-4 border border-1"
            style={{ borderColor: "#e5e7eb" }}
          >
            <p className="text-muted">Settings panel goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
