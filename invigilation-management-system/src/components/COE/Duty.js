import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import './Duty.css';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyDJOxesiWvZ5z1CQr-W_cCWf45OKDH6MEo",
  authDomain: "ab-firebase-ddf74.firebaseapp.com",
  databaseURL: "https://ab-firebase-ddf74-default-rtdb.firebaseio.com",
  projectId: "ab-firebase-ddf74",
  storageBucket: "ab-firebase-ddf74.appspot.com",
  messagingSenderId: "70005192173",
  appId: "1:70005192173:web:6b5e84b2fc506d765f63e4"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const Duty = () => {
    const [exam, setExam] = useState('');
    const [department, setDep] = useState('');
    const [req, setReq] = useState('');
    const [date, setDate] = useState('');
    const [deadline, setDeadline] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Store the data in Firebase
      database.ref('Duty_req')
        .push({
          exam,
          department,
          req,
          date,
          deadline,
        })
        .then(() => {
          console.log('Form values stored in Firebase');
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.log('Error storing form values in Firebase:', error);
        });

    // Clear the form fields
    setExam('');
    setDep('');
    setReq('');
    setDate('');
    setDeadline('');
  };

  return (
    <div className="coe-duty-container">
		<header className="header-coe-duty">
	 <h2 className="logo-coe-duty">
	   <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-cd" />
	   Amrita Invigilation Management System
	 </h2>
	 <nav className="navbar-coe-duty">
	 <a href="/">Home</a>
   <a href="/CoeDashboard">COE Dashboard</a>
	   {/* <a href="#faculty">Faculty</a>
	   <a href="#coe">COE</a>
	   <a href="/login">Login</a> */}
	 </nav>
   </header>
   <div className="duty-bckg">
   <h1 style={{ textAlign: 'center' }}>ENTER DUTY REQUIREMENT</h1>
  <div className="duty-bckg-container">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="exam">Exam:</label>
        <input
          type="text"
          id="exam"
          value={exam}
          onChange={(e) => setExam(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDep(e.target.value)}
        />
      </div>
      <div>
  <label htmlFor="req">Number of Duty Req:</label>
  <input
    type="number"
    id="req"
    value={req}
    min="0"
    onChange={(e) => setReq(e.target.value)}
  />
</div>
<div>
        <label htmlFor="date">Date of exam:</label>
        <input
            
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
<div>
        <label htmlFor="deadline">Deadline for Allotment:</label>
        <input
            
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    {isSubmitted && <p>Ticket submitted successfully!</p>}
    </div></div>
    <footer className="footer-duty">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer></div>
  );
};

export default Duty;
