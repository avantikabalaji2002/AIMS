import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import './Leave.css'
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

const Leave = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [leaveno, setLeaveDays] = useState('');
    const [reason, setReason] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the data in Firebase
    database.ref('Faculty_Leave').push({
        name,
        email,
        leaveno,
        reason,
      }).then(() => {
        console.log('Form values stored in Firebase');
        setIsSubmitted(true);
  
      }).catch((error) => {
        console.log('Error storing form values in Firebase: ', error);
      });

    // Clear the form fields
    setName('');
    setEmail('');
    setLeaveDays('');
    setReason('');
  };

  return (
    <div className="faculty-leave-container">
		<header className="header-faculty-leave">
	 <h2 className="logo-faculty-leave">
	   <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-fl" />
	   Amrita Invigilation Management System
	 </h2>
	 <nav className="navbar-faculty-leave">
	 <a href="/">Home</a>
   <a href="/FacultyDashboard">Faculty Dashboard</a>
	   {/* <a href="#faculty">Faculty</a>
	   <a href="#coe">COE</a>
	   <a href="/login">Login</a> */}
	 </nav>
   </header>

   <div className="leave-bckg">
   <h1 style={{ textAlign: 'center' }}>FILL LEAVE FORM</h1>
  <div className="leave-form">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
  <label htmlFor="leavedays">Number of Days Leave:</label>
  <input
    type="number"
    id="leaveno"
    value={leaveno}
    onChange={(e) => setLeaveDays(e.target.value)}
  />
</div>
<div>
        <label htmlFor="reason">Reason for Leave:</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    {isSubmitted && <p>Submitted successfully!</p>}

    </div></div>
    <footer className="footer-leave">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Leave;
