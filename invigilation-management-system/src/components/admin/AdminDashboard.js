import "./AdminDashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
 
  return (
    <div className="admin-dashboard-page">
      <header className="header-admin-dash">
        <h2 className="logo-admin-dash">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-ad" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-admin-dash">
          <a href="/">Home</a>
          <a href="AdminDashboard">Admin</a>
          <a href="login">Faculty</a>
          <a href="login">COE</a>
          {/* <a href="/login">Login</a> */}
        </nav>
      </header>

      <div className="container-admin-dash">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter-admin-dash">Admin Dashboard</h3>
          </div>
        </div>
        <div className="col-admin-dash">
          <div className="card-container-admin-dash">
            {/* <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div> */}
            <div className="card-admin-dash">
              <h4>Upload faculty timetable</h4>
              <button
                type="button"
                className="cta-button-admin-dash"
                onClick={() => navigate("/upload")}
              >
                Upload
              </button>

              <span className="chev-admin-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-admin-dash">
          <div className="card-container-admin-dash">
            {/* <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div> */}
            <div className="card-admin-dash">
              <h4>Add new faculty details</h4>
              {/* <button className="cta-button-admin-dash"> </button> */}
              <button
                type="button"
                className="cta-button-admin-dash"
                onClick={() => navigate("/addEdit")}
              >
                Add Faculty
              </button>

              <span className="chev-admin-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-admin-dash">
          <div className="card-container-admin-dash">
            {/* <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div> */}
            <div className="card-admin-dash">
              <h4>Check faculty availability</h4>
              <button
                type="button"
                className="cta-button-admin-dash"
                onClick={() => navigate("/freeslots")}
              >
                Check Availability
              </button>
              <span className="chev-admin-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-admin-dash">
          <div className="card-container-admin-dash">
            <div className="card-admin-dash">
              <h4>View faculty details</h4>
              <button
                type="button"
                className="cta-button-admin-dash"
                onClick={() => navigate("/FacultyDetails")}
              >
                View details
              </button>
              <span className="chev-admin-dash">&rsaquo;</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-admin">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
