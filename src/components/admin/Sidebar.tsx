import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 vh-100 sticky-top"
      style={{
        width: "280px",
        backgroundColor: "var(--primary)",
        color: "white",
      }}
    >
      <Link
        href="/admin/dashboard"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4 fw-bold ps-2">DBT Admin</span>
      </Link>
      <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <li className="nav-item">
          <Link
            href="/admin/dashboard"
            className="nav-link text-white bg-secondary-custom shadow-sm fw-medium rounded-3"
          >
            <i className="fa-solid fa-chart-pie me-2"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/leads"
            className="nav-link text-white px-3 py-2 rounded-3 hover-focus-teal"
            style={{ opacity: 0.85 }}
          >
            <i className="fa-solid fa-users me-2"></i>
            Leads Management
          </Link>
        </li>
        <li>
          <Link
            href="/admin/analytics"
            className="nav-link text-white px-3 py-2 rounded-3 hover-focus-teal"
            style={{ opacity: 0.85 }}
          >
            <i className="fa-solid fa-chart-line me-2"></i>
            Analytics
          </Link>
        </li>
        <li>
          <Link
            href="/admin/settings"
            className="nav-link text-white px-3 py-2 rounded-3 hover-focus-teal"
            style={{ opacity: 0.85 }}
          >
            <i className="fa-solid fa-gear me-2"></i>
            Settings
          </Link>
        </li>
      </ul>
      <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=20C997&color=fff"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Admin</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
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
  );
}
