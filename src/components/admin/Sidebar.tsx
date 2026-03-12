"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button (Only visible on small screens to open sidebar) */}
      {isMobile && !isOpen && (
        <button
          className="btn btn-dark shadow-sm position-fixed rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            bottom: "30px",
            right: "30px",
            zIndex: 1045,
          }}
          onClick={toggleSideBar}
          aria-label="Open sidebar"
        >
          <i className="fa-solid fa-bars fs-4"></i>
        </button>
      )}

      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 transition-all"
          style={{ zIndex: 1040 }}
          onClick={toggleSideBar}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`bg-dark text-white flex-shrink-0 transition-all border-end border-secondary shadow-sm ${
          isMobile
            ? "position-fixed h-100 top-0 start-0"
            : "h-100 position-relative"
        }`}
        style={{
          width: isOpen ? "260px" : isMobile ? "0px" : "80px",
          transition: "width 0.3s ease, transform 0.3s ease",
          transform:
            isMobile && !isOpen ? "translateX(-100%)" : "translateX(0)",
          zIndex: isMobile ? 1050 : 1,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <div className="d-flex flex-column h-100" style={{ width: "260px" }}>
          {/* Sidebar Header */}
          <div className="d-flex align-items-center justify-content-between p-3 border-bottom border-secondary mb-3">
            <span
              className="fs-5 fw-bold text-nowrap"
              style={{
                opacity: isOpen ? 1 : 0,
                transition: "opacity 0.2s",
                paddingLeft: "10px",
              }}
            >
              DBT Admin
            </span>
            <button
              className="btn btn-link text-white fs-4 p-0 text-decoration-none"
              onClick={toggleSideBar}
              style={{
                position: !isOpen && !isMobile ? "absolute" : "static",
                left: !isOpen && !isMobile ? "28px" : "auto",
                zIndex: 10,
              }}
              aria-label="Toggle sidebar"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>

          {/* Sidebar Nav Links */}
          <ul className="nav nav-pills flex-column mb-auto gap-2 px-2">
            <li className="nav-item">
              <Link
                href="/admin/dashboard"
                className="nav-link text-white px-3 py-2 rounded-3 sidebar-link d-flex align-items-center w-100"
              >
                <i
                  className="fa-solid fa-chart-pie"
                  style={{ width: "24px", textAlign: "center" }}
                ></i>
                <span
                  className="ms-3 text-nowrap"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/admin/leads"
                className="nav-link text-white px-3 py-2 rounded-3 sidebar-link d-flex align-items-center w-100"
              >
                <i
                  className="fa-solid fa-users"
                  style={{ width: "24px", textAlign: "center" }}
                ></i>
                <span
                  className="ms-3 text-nowrap"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                >
                  Leads Management
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/admin/analytics"
                className="nav-link text-white px-3 py-2 rounded-3 sidebar-link d-flex align-items-center w-100"
              >
                <i
                  className="fa-solid fa-chart-line"
                  style={{ width: "24px", textAlign: "center" }}
                ></i>
                <span
                  className="ms-3 text-nowrap"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                >
                  Analytics
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/admin/settings"
                className="nav-link text-white px-3 py-2 rounded-3 sidebar-link d-flex align-items-center w-100"
              >
                <i
                  className="fa-solid fa-gear"
                  style={{ width: "24px", textAlign: "center" }}
                ></i>
                <span
                  className="ms-3 text-nowrap"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                >
                  Settings
                </span>
              </Link>
            </li>
          </ul>

          {/* Sidebar Footer / User Info */}
          <div className="p-3 border-top border-secondary mt-auto">
            <div className="dropdown pb-2">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle px-2 py-1 rounded sidebar-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Admin+User&background=20C997&color=fff"
                  alt="Admin User"
                  width="35"
                  height="35"
                  className="rounded-circle"
                />
                <strong
                  className="ms-2 text-nowrap"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                >
                  Admin Menu
                </strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .sidebar-link {
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .sidebar-link:hover {
          background-color: rgba(255,255,255,0.1);
          color: #20C997 !important;
        }
      `,
        }}
      />
    </>
  );
}
