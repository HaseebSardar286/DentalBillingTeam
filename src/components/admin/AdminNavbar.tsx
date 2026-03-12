export default function AdminNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom px-4 py-3 shadow-sm sticky-top"
      style={{ zIndex: 10 }}
    >
      <div className="container-fluid gap-3">
        <form className="d-flex flex-grow-1" style={{ maxWidth: "400px" }}>
          <div className="input-group">
            <span
              className="input-group-text bg-light border-end-0"
              id="search-icon"
            >
              <i className="fa-solid fa-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control bg-light border-start-0 ps-0 shadow-none"
              placeholder="Search leads, reports..."
              aria-label="Search"
              aria-describedby="search-icon"
            />
          </div>
        </form>

        <div className="d-flex align-items-center gap-3 ms-auto">
          <button
            className="btn btn-light rounded-circle position-relative p-2"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="fa-regular fa-bell text-muted"></i>
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>

          <div className="d-none d-md-block text-end">
            <div
              className="fw-bold mb-0"
              style={{ fontSize: "0.9rem", color: "var(--text-dark)" }}
            >
              Sarah Jenkins
            </div>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              Super Admin
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
