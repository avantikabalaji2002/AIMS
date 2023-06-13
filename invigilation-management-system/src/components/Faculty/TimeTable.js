import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './TimeTable.css';

const TimeTable = () => {
	const [dropdownOptions, setDropdownOptions] = useState([]);
	const [selectedValue, setSelectedValue] = useState('');
	const [selectedDetails, setSelectedDetails] = useState(null);
  
	useEffect(() => {
	  // Fetch data from the first Firebase database
	  const fetchData = async () => {
		try {
		  const snapshot = await firebase.database().ref('faculty').once('value');
		  const data = snapshot.val();
		  // Convert the fetched data to an array of options with name field
		  const options = Object.values(data).map((item) => ({
			value: item.name,
			label: item.name,
		  }));
		  setDropdownOptions(options);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
  
	  fetchData();
	}, []);
  
	const handleSelectChange = async (event) => {
	  const selectedValue = event.target.value;
	  setSelectedValue(selectedValue);
  
	  // Fetch data from the second Firebase database
	  try {
		const snapshot = await firebase.database().ref('1TyQab05VugzklQDtngCpvC2e0ItqKCVUZxfL0K_tsc0').orderByChild('name').equalTo(selectedValue).once('value');
		const data = snapshot.val();
		setSelectedDetails(data ? Object.values(data)[0] : null);
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};
  
	return (
		<div className="faculty-tt-container">
		<header className="header-faculty-tt">
	 <h2 className="logo-faculty-tt">
	   <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-ft" />
	   Amrita Invigilation Management System
	 </h2>
	 <nav className="navbar-faculty-tt">
	 <a href="/">Home</a>
	 <a href="/FacultyDashboard">Faculty Dashboard</a>
	   {/* <a href="#faculty">Faculty</a>
	   <a href="#coe">COE</a>
	   <a href="/login">Login</a> */}
	 </nav>
   </header>
   <div className="tt-bckg">
  <div className="select-dropdown-tt">
  <select value={selectedValue} onChange={handleSelectChange}>
		  <option value="">Select a name</option>
		  {dropdownOptions.map((option) => (
			<option key={option.value} value={option.value}>
			  {option.label}
			</option>
		  ))}
		</select>
  </div>
  {selectedDetails && (
		  <div className="timetable">
		  <h2>TIMETABLE</h2>
		  {/* This will display all details */}
		  <pre>{JSON.stringify(selectedDetails, null, 2)}</pre>
		</div>
		)}
</div>
</div>

	);
  };
  
  

export default TimeTable;