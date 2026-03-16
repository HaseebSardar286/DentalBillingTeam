import TrafficSourceChart from "@/components/admin/TrafficSourceChart";
import Chart from "@/components/admin/VisitorsChart";
export default function DashboardPage() {
  return (
    <>
      <div className="container">
        <h2 className="fw-bold">Admin Dashboard</h2>
        <p>
          Welcome to the admin panel. Your data and statistics will appear here.
        </p>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card shadow-lg border-0 p-4">
              <h6 className="fw-bold">Visitors Today</h6>
              <p className="fs-4 text-primary mb-0">320</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-lg border-0 p-4">
              <h6 className="fw-bold">Total Visitors</h6>
              <p className="fs-4 text-primary mb-0">1,204</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-lg border-0 p-4">
              <h6 className="fw-bold">Total Leads</h6>
              <p className="fs-4 text-success mb-0">410</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-lg border-0 p-4">
              <h6 className="fw-bold">Conversion %</h6>
              <p className="fs-4 text-warning mb-0">3.2%</p>
            </div>
          </div>
        </div>
      </div>

      <Chart />

      <TrafficSourceChart />
    </>
  );
}
