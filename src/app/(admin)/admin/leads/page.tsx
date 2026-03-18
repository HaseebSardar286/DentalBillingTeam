import { Search } from "lucide-react";

export default function LeadsPage() {
  return (
    <>
      {/* Recent Leads */}
      <div className="card container mt-2 p-3 shadow-lg rounded-3 border-0 mb-4">
        <h2 className="fw-bold">Leads</h2>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Leads"
          />
          <button className="btn btn-primary">
            <Search />
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>[EMAIL_ADDRESS]</td>
              <td>1234567890</td>
              <td>Dental Implant</td>
              <td>Pending</td>
              <td>2022-01-01</td>
              <td>
                <button className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>[EMAIL_ADDRESS]</td>
              <td>1234567890</td>
              <td>Dental Implant</td>
              <td>Pending</td>
              <td>2022-01-01</td>
              <td>
                <button className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>[EMAIL_ADDRESS]</td>
              <td>1234567890</td>
              <td>Dental Implant</td>
              <td>Pending</td>
              <td>2022-01-01</td>
              <td>
                <button className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>[EMAIL_ADDRESS]</td>
              <td>1234567890</td>
              <td>Dental Implant</td>
              <td>Pending</td>
              <td>2022-01-01</td>
              <td>
                <button className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>[EMAIL_ADDRESS]</td>
              <td>1234567890</td>
              <td>Dental Implant</td>
              <td>Pending</td>
              <td>2022-01-01</td>
              <td>
                <button className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
