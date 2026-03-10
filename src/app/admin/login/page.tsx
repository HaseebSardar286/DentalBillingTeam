"use client";

import React from "react";
import Link from "next/link";

export default function AdminLogin() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div
        className="card-custom p-5 border border-1 shadow-sm"
        style={{ maxWidth: "450px", width: "100%", borderColor: "#e5e7eb" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-1">Admin Portal</h2>
          <p className="text-muted small">
            Sign in securely to manage your dental billing system.
          </p>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label text-muted small fw-bold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="admin@example.com"
            />
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <label className="form-label text-muted small fw-bold">
                Password
              </label>
              <a
                href="#"
                className="small text-decoration-none hover-focus-teal"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
            />
          </div>

          <Link
            href="/admin/dashboard"
            className="btn btn-primary-custom w-100 py-2 fw-medium rounded-3"
          >
            Sign In to Dashboard
          </Link>
        </form>
      </div>
    </div>
  );
}
