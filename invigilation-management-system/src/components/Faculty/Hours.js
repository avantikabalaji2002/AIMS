import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './Hours.css';

const Hours = () => {
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedDetails, setSelectedDetails] = useState(null);

  useEffect(() => {
    // Fetch data from Firebase database
    const fetchData = async () => {
      try {
        const snapshot = await firebase.database().ref('faculty').once('value');
        const data = snapshot.val();
        // Convert the fetched data to an array of options with name field and details
        const options = Object.values(data).map((item) => ({
          value: item.name,
          label: item.name,
          details: {
            pending: item.pending,
            duty_hours: item.duty_hours
          }
        }));
        setDropdownOptions(options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);

    // Find the selected option and update the details state
    const selectedOption = dropdownOptions.find((option) => option.value === selectedValue);
    setSelectedDetails(selectedOption ? selectedOption.details : null);
  };

  return (
    <div className="faculty-hours-container">
           <header className="header-faculty-hours">
        <h2 className="logo-faculty-hours">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-fh" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-faculty-hours">
        <a href="/">Home</a>
          <a href="/FacultyDashboard">Faculty Dashboard</a>
          {/* <a href="#faculty">Faculty</a>
          <a href="#coe">COE</a>
          <a href="/login">Login</a> */}
        </nav>
      </header>
      <div className="faculty-hours-bckg">
      <h2 style={{ textAlign: 'center' }}>PENDING AND COMPLETED HOURS</h2>

      <div className="glow-box">
  <div className="select-dropdown">
    <select value={selectedValue} onChange={handleSelectChange}>
      <option value="">Select faculty name</option>
      {dropdownOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  {selectedDetails && (
    <div className="details">
      <h2>Selected Details</h2>
      <p>Pending Duty Hours: {selectedDetails.pending}</p>
      <p>Completed Duty Hours: {selectedDetails.duty_hours}</p>
    </div>
  )}
</div>
</div>
<footer className="footer-hours">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer></div>
  );
};


export default Hours;
