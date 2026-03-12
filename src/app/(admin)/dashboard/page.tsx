export default function DashboardPage() {
  return (
    <div className="container py-5 mt-4">
      <h1 className="display-4 fw-bold mb-4">Admin Dashboard</h1>
      <p className="lead">Welcome to the admin panel. Your data and statistics will appear here.</p>
      
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold">Users</h5>
            <p className="fs-3 text-primary mb-0">1,204</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold">Revenue</h5>
            <p className="fs-3 text-success mb-0">$45,200</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-4">
            <h5 className="fw-bold">Reports</h5>
            <p className="fs-3 text-warning mb-0">28</p>
          </div>
        </div>
      </div>
    </div>
  );
}
