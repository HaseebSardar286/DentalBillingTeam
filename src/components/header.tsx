// app/components/Header.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    // Dynamically import bootstrap JS for the navbar toggler to work
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as any).catch(err => console.error("Bootstrap JS could not be loaded", err));
  }, []);

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
            <span className="fs-4 fw-bolder" style={{ color: "#0d9488" }}>DBT</span>
            <span className="fs-5 fw-medium text-secondary">
              Dental Billing Team & Associates
            </span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Navigation + CTA */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav align-items-lg-center gap-lg-4 gap-3 mb-2 mb-lg-0 mt-3 mt-lg-0">
              <li className="nav-item">
                <Link href="/" className={`nav-link fw-medium ${pathname === '/' ? 'active' : 'text-dark'}`} style={pathname === '/' ? { color: "#0d9488" } : {}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link fw-medium ${pathname === '/about' ? 'active' : 'text-dark'}`} style={pathname === '/about' ? { color: "#0d9488" } : {}}>About</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className={`nav-link fw-medium ${pathname === '/services' ? 'active' : 'text-dark'}`} style={pathname === '/services' ? { color: "#0d9488" } : {}}>Services</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link fw-medium ${pathname === '/contact' ? 'active' : 'text-dark'}`} style={pathname === '/contact' ? { color: "#0d9488" } : {}}>Contact</Link>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                {/* CTA Button */}
                <Link
                  href="/get-started"
                  className="btn px-4 py-2 shadow-sm d-block d-lg-inline-block rounded-3"
                  style={{ backgroundColor: "#13a195ff", color: "white" }}
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}