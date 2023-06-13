import './LandingPage.css'
import React from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";


//import './Calendar.css'
import 'react-calendar/dist/Calendar.css';


const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to a different page
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <header className="header">
      <h2 className="logo">
      <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image" />
        Amrita Invigilation Management System</h2>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/login">Admin</a>
          <a href="/login">Faculty</a>
          <a href="/login">COE</a>
        </nav>
      </header>
      <section className="hero">
      <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter">Efficiently Manage Exam Invigilation Process with AIMS</h3>
    </div>
  </div>
  <section id="calendar" className="calendar">
        <h2>Calendar</h2>
        <Calendar />
      </section>
        <div className="hero-content">
    <p>
          AIMS provides a comprehensive solution for managing exam invigilation, ensuring a smooth and organized process.
          </p>
          <button className="cta-button" onClick={handleButtonClick}>
      Login
    </button>        </div>
      </section>
      
      <h2>How it differs from manual invigilation system?</h2>
      <section id="features" className="features">
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-check"></i>
          </div>
          <h3>Automated Scheduling</h3>
          <p>
            Schedule invigilators for exams automatically based on their availability and qualifications, reducing administrative effort and ensuring the right invigilators are assigned.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h3>Exam Calendar</h3>
          <p>
            Maintain a centralized exam calendar to keep track of all upcoming exams, invigilator assignments, and other relevant details, ensuring efficient planning and coordination.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-file-signature"></i>
          </div>
          <h3>Digital Tracking</h3>
          <p>
            Generate detailed reports on invigilator duty details, exam details, and other important metrics, facilitating analysis and decision-making for future improvements.
          </p>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have any query or need any information? Feel free to reach out to our support team at Amrita.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="submit-button">Send Message</button>
        </form>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
