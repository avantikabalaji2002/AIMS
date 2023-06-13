import "./AdminLanding.css";
import React from "react";
import { Link } from "react-router-dom";

const AdminLanding = () => {
  return (
    <div className="admin-landing-page">
      <header className="header-admin">
        <h2 className="logo-admin">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-admin">
        <a href="/">Home</a>
          <a href="AdminDashboard">Admin</a>
          <a href="#faculty">Faculty</a>
          <a href="#coe">COE</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <section className="hero-admin">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter-admin">Welcome Admin!</h3>
          </div>
        </div>
        <div className="hero-content-admin">
          <button className="cta-button-admin">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Link>
          </button>{" "}
        </div>
      </section>
      <footer className="footer-admin">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminLanding;
