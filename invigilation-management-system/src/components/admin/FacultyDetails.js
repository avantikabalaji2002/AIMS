import React, { useState, useEffect } from 'react';
import db from "../../Firebase";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FacultyDetails.css';

const FacultyDetails = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    db.child("faculty").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    }
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      db.child(`faculty/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Deleted");
        }
      });
    }
  };

  return (
    <div className="faculty-details-container">
             <header className="header-faculty-details">
        <h2 className="logo-faculty-details">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image-fd" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-faculty-details">
          <a href="/">Home</a>
          <a href="AdminDashboard">Admin Dashboard</a>
          {/* <a href="#faculty">Faculty</a>
          <a href="#coe">COE</a>
          <a href="/login">Login</a> */}
        </nav>
      </header> 
      <div className="faculty-details-bckg">
      <h2 style={{ textAlign: 'center' }}>FACULTY DETAILS</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th className="table-header">No.</th>
            <th className="table-header">Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Department</th>
            <th className="table-header">Designation</th>
            <th className="table-header">Completed Duty (hrs)</th>
            <th className="table-header">Pending</th>
            <th className="table-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <td className="table-cell">{index + 1}</td>
                <td className="table-cell">{data[id].name}</td>
                <td className="table-cell">{data[id].email}</td>
                <td className="table-cell">{data[id].department}</td>
                <td className="table-cell">{data[id].designation}</td>
                <td className="table-cell">{data[id].duty_hours}</td>
                <td className="table-cell">{data[id].pending}</td>
                <td className="table-cell">
                <div class="button-container">

                                    <Link to={`/update/${id}`}>

                                        <button className="edit-button-dt">Edit</button>
                                    </Link>
                                    <button className="delete-button-dt" onClick={() => onDelete(id)}>Delete</button>
</div>
                                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> <footer className="footer-faculty-details">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer></div>
  );
};

export default FacultyDetails;
