import "./FacultyDashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const navigate = useNavigate();
 
  return (
    <div className="faculty-dashboard-page">
      <header className="header-faculty">
        <h2 className="logo-faculty">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-faculty" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-faculty">
          <a href="/">Home</a>
          <a href="login">Admin</a>
          <a href="FacultyDashboard">Faculty</a>
          <a href="login">COE</a>
          {/* <a href="/login">Login</a> */}
        </nav>
      </header>

      <div className="container-faculty-dash">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter-faculty-dash">Faculty Dashboard</h3>
          </div>
        </div>
        <div className="col-faculty-dash">
          <div className="card-container-faculty-dash">
            {/* <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div> */}
            <div className="card-faculty-dash">
              <h4>View Pending/Completed Hours</h4>
              <button
                type="button"
                className="cta-button-faculty-dash"
                onClick={() => navigate("/hours")}
              >
                View
              </button>

              <span className="chev-faculty-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-faculty-dash">
          <div className="card-container-faculty-dash">
            {/* <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div>
            <div className="overlay-admin-dash"></div> */}
            <div className="card-faculty-dash">
              <h4>View TimeTable</h4>
              {/* <button className="cta-button-faculty-dash"> </button> */}
              <button
                type="button"
                className="cta-button-faculty-dash"
                onClick={() => navigate("/timetable")}
              >
                View
            </button>

              <span className="chev-faculty-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-faculty-dash">
          <div className="card-container-faculty-dash">
            {/* <div className="overlay-faculty-dash"></div>
            <div className="overlay-faculty-dash"></div>
            <div className="overlay-faculty-dash"></div>
            <div className="overlay-faculty-dash"></div> */}
            <div className="card-faculty-dash">
              <h4>Raise a Ticket</h4>
              <button
                type="button"
                className="cta-button-faculty-dash"
                onClick={() => navigate("/ticket")}
              >
                Raise Ticket
              </button>
              <span className="chev-faculty-dash">&rsaquo;</span>
            </div>
          </div>
        </div>

        <div className="col-faculty-dash">
          <div className="card-container-faculty-dash">
            <div className="card-faculty-dash">
              <h4>Fill Leave Form</h4>
              <button
                type="button"
                className="cta-button-faculty-dash"
                onClick={() => navigate("/leave")}
              >
                Leave form
              </button>
              <span className="chev-faculty-dash">&rsaquo;</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-faculty">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FacultyDashboard;
