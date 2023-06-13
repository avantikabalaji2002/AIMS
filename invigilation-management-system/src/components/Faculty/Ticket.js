import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import './Ticket.css';

// Initialize Firebase
// Replace the config object with your own Firebase project credentials
const firebaseConfig = {
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

const Ticket = () => {
  const [date, setDate] = useState('');
  const [textField1, setTextField1] = useState('');
  const [textField2, setTextField2] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [names, setNames] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
		try {
		  const snapshot = await firebase.database().ref('faculty').once('value');
		  const data = snapshot.val();
		  // Convert the fetched data to an array of options with name field and details
		  const options = Object.values(data).map((item) => ({
			value: item.name,
			label: item.name
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
	setSelectedName(event.target.value);
    // Find the selected option and update the details state
    const selectedOption = dropdownOptions.find((option) => option.value === selectedValue);
    setSelectedDetails(selectedOption ? selectedOption.details : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store form values in Firebase
    database.ref('Faculty_ticket').push({
        date,
        textField1,
        selectedName,
      }).then(() => {
      console.log('Form values stored in Firebase');
      setIsSubmitted(true);

    }).catch((error) => {
      console.log('Error storing form values in Firebase: ', error);
    });

    // Reset form fields
    setDate('');
    setTextField1('');
    setSelectedName('');
    
  };

  return (
    <div className="faculty-ticket-container">
		<header className="header-faculty-ticket">
	 <h2 className="logo-faculty-ticket">
	   <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-ftt" />
	   Amrita Invigilation Management System
	 </h2>
	 <nav className="navbar-faculty-ticket">
	 <a href="/">Home</a>
   <a href="/FacultyDashboard">Faculty Dashboard</a>
	   {/* <a href="#faculty">Faculty</a>
	   <a href="#coe">COE</a>
	   <a href="/login">Login</a> */}
	 </nav>
   </header>
  
   <div className="ticket-bckg">
   <h1 style={{ textAlign: 'center' }}>RAISE TICKET</h1>
  <div className="ticket-bckg-container">
    <form onSubmit={handleSubmit}>
      <label>
        Date of Clash:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Reason for Clash:
        <input
          type="text"
          value={textField1}
          onChange={(e) => setTextField1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Select Name:
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="">Select a name</option>
          {dropdownOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    {isSubmitted && <p>Submitted successfully!</p>}
  </div>
</div> 
<footer className="footer-ticket">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
</div>
  );
};

export default Ticket;
