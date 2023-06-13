import "./CoeDashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const CoeDashboard = () => {
  const navigate = useNavigate();
 
  return (
    <div className="coe-dashboard-page">
      <header className="header-coe">
        <h2 className="logo-coe">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-coe" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-coe">
          <a href="/">Home</a>
          <a href="/login">Admin</a>
          <a href="/login">Faculty</a>
          <a href="CoeDashboard">COE</a>
          {/* <a href="/login">Login</a> */}
        </nav>
      </header>

      <div className="container-coe-dash">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter-coe-dash">COE Dashboard</h3>
          </div>
        </div>
        <div className="col-coe-dash">
          <div className="card-container-coe-dash">
          
            <div className="card-coe-dash">
              <h4>Upload exam schedule</h4>
              <button
                type="button"
                className="cta-button-coe-dash"
                onClick={() => navigate("/CoeUpload")}
              >
                Upload
              </button>

              <span className="chev-coe-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-coe-dash">
          <div className="card-container-coe-dash">

            <div className="card-coe-dash">
              <h4>Invigilation Requirement</h4>
              <button
                type="button"
                className="cta-button-coe-dash"
                onClick={() => navigate("/duty")}
              >
                Enter requirements
            </button>

              <span className="chev-coe-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-coe-dash">
          <div className="card-container-coe-dash">
            <div className="card-coe-dash">
              <h4>View Duty Table</h4>
              <button
                type="button"
                className="cta-button-faculty-dash"
                onClick={() => navigate("/dutytable")}
              >
                Duty Table
              </button>
              <span className="chev-faculty-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-coe-dash">
          <div className="card-container-coe-dash">

            <div className="card-coe-dash">
              <h4>Raise Query</h4>
              <button
                type="button"
                className="cta-button-coe-dash"
                onClick={() => navigate("/query")}
              >
                Raise Query
              </button>
              <span className="chev-coe-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

      </div>

      <footer className="footer-coe">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoeDashboard;
