import React, { useEffect, useState } from 'react';
import firebase from './firebaseconfig';
import './FreeSlots.css';

const FreeSlots = () => {
  const [userNullFields, setUserNullFields] = useState({});

  useEffect(() => {
    // Your Firebase project configuration
    const firebaseConfig = {
      // Add your Firebase config here
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Database path to user_out
    const databasePath = '1TyQab05VugzklQDtngCpvC2e0ItqKCVUZxfL0K_tsc0';

    // Retrieve user data from the database path
    const fetchUserNullFields = async () => {
      const snapshot = await firebase.database().ref(databasePath).once('value');
      const userOutData = snapshot.val();

      const userNullFields = {};

      for (const userOutKey in userOutData) {
        if (userOutData.hasOwnProperty(userOutKey)) {
          const userData = userOutData[userOutKey];
          const userFields = {};

          for (const userKey in userData) {
            if (userData.hasOwnProperty(userKey)) {
              const user = userData[userKey];
              const nullFields = [];

              let nullCount = 0;

              for (const field in user) {
                if (user.hasOwnProperty(field)) {
                  if (user[field] === '') {
                    nullFields.push(field);
                    nullCount++;
                  }
                }
              }

              userFields[userKey] = {
                nullFields,
                nullCount,
              };
            }
          }

          userNullFields[userOutKey] = userFields;
        }
      }

      setUserNullFields(userNullFields);
    };

    fetchUserNullFields();
  }, []);

  return (
    <div className="free-slots-container">
              <header className="header-free-slots">
        <h2 className="logo-free-slots">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-fs" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-free-slots">
        <a href="/">Home</a>
          <a href="AdminDashboard">Admin Dashboard</a>
          {/* <a href="#faculty">Faculty</a>
          <a href="#coe">COE</a>
          <a href="/login">Login</a> */}
        </nav>
      </header>
      <h1 style={{ textAlign: 'center' }}>Faculty Free Slots</h1>
      <div className="free-slots-bckg">
      {Object.entries(userNullFields).map(([userOutKey, userFields]) => (
        <div key={userOutKey} className="user-container">
          <h2>{userOutKey}</h2>
          {Object.entries(userFields).map(([userKey, { nullFields, nullCount }]) => (
            <div key={userKey} className="user-fields">
              <h3>{userKey}</h3>
              <p>Number of Free Slots: {nullCount}</p>
              {nullFields.length > 0 ? (
                <div>
                  <p>Free Slots:</p>
                  <ul>
                    {nullFields.map((field, index) => (
                      <li key={index}>{field}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No Free Slots.</p>
              )}
            </div>
          ))}
        </div>
      ))}</div>
    </div>
  );
};

export default FreeSlots;
