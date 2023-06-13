import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import './Query.css';

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

const Query = () => {
    const [exam, setExam] = useState('');
    const [department, setDep] = useState('');
    const [date, setDate] = useState('');
    const [issue, setIssue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the data in Firebase
    database.ref('coe_query').push({
        exam,
        department,
        date,
        issue,
      })
     .then(() => {
        console.log('Form values stored in Firebase');
        setIsSubmitted(true);
  
      }).catch((error) => {
        console.log('Error storing form values in Firebase: ', error);
      });
    // Clear the form fields
    setExam('');
    setDep('');
    setDate('');
    setIssue('');
  };

  return (
    <div className="coe-query-container">
		<header className="header-coe-query">
	 <h2 className="logo-coe-query">
	   <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-cq" />
	   Amrita Invigilation Management System
	 </h2>
	 <nav className="navbar-coe-query">
	 <a href="/">Home</a>
   <a href="/CoeDashboard">COE Dashboard</a>
	   {/* <a href="#faculty">Faculty</a>
	   <a href="#coe">COE</a>
	   <a href="/login">Login</a> */}
	 </nav>
   </header>
   <div className="ticket-bckg">
   <h1 style={{ textAlign: 'center' }}>RAISE QUERY</h1>
  <div className="ticket-bckg-container">
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
        <label htmlFor="date">Date of query:</label>
        <input
            
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
<div>
        <label htmlFor="issue">Raise Query:</label>
        <input
            
          type="text"
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form> 
    {isSubmitted && <p>Query submitted successfully!</p>}
    </div></div>
    <footer className="footer-ticket">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer></div>
  );
};

export default Query;
