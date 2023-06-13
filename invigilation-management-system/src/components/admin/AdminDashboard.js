import "./AdminDashboard.css";
import React from "react";
// import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-page">
      <header className="header-admin">
        <h2 className="logo-admin">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-admin">
          <a href="/">Home</a>
          <a href="AdminLanding">Admin</a>
          <a href="#faculty">Faculty</a>
          <a href="#coe">COE</a>
          <a href="/login">Login</a>
        </nav>
      </header> 

      <div class="container-admin-dash">
  
  <div class="col-admin-dash">

    <div class="card-container-admin-dash">
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="card-admin-dash">
        <h4>Upload faculty timetable</h4>
        <span className="chev-admin-dash">&rsaquo;</span>
      </div>
    </div>
        
  </div>
  
  <div class="col-admin-dash">

    <div class="card-container-admin-dash">
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="card-admin-dash">
        <h4>Add new faculty details</h4>
        <span className="chev-admin-dash">&rsaquo;</span>
      </div>
    </div>
    
  </div>
  
  <div class="col-admin-dash">

    <div class="card-container-admin-dash">
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="overlay-admin-dash"></div>
      <div class="card-admin-dash">
        <h4>Check faculty availability</h4>
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
