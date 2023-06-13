import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../Firebase';
import './AddEdit.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  department: '',
  designation: '',
  duty_hours: '',
  pending: ''
};

const AddEdit = () => {
  const navigate = useNavigate()
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isError, setIsError] = useState(false)

  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, department, designation, duty_hours, pending } = state;
  const { id } = useParams();

  useEffect(() => {
    db.child('faculty').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false)
    setIsSuccessful(false)
    if (!name || !email || !department || !designation || !duty_hours || !pending) {
      toast.error('Please provide a value for each input');
    } else {
      if (!id) {
        db.child('faculty').push(state, (err) => {
          if (err) {
            toast.error('Error');
            setIsError(true);
          } else {
            toast.success('Added!');
            setIsSuccessful(true)
            navigate("/FacultyDetails")
          }
        });
      } else {
        db.child(`faculty/${id}`).set(state, (err) => {
          if (err) {
            toast.error('Error');
            setIsError(true)
          } else {
            toast.success('Updated!');
            setIsSuccessful(true)
            navigate("/FacultyDetails")
          }
        });
      }
    }
  };

  return (
    <div className="add-edit-container">
           <header className="header-add-edit">
        <h2 className="logo-add-edit">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-add-edit-image" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar-add-edit">
          <a href="/">Home</a>
          <a href="AdminDashboard">Admin Dashboard</a>
          {/* <a href="#faculty">Faculty</a>
          <a href="#coe">COE</a>
          <a href="/login">Login</a> */}
        </nav>
      </header> 
      <div className='add-edit-bg-black'>
        {id ? <h1>Update Faculty Details</h1> : <h1>Add Faculty Details</h1>}
  <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={name || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={email || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Your Department"
          value={department || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="designation">Designation</label>
        <input
          type="text"
          id="designation"
          name="designation"
          placeholder="Your Designation"
          value={designation || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="duty_hours">Duty Hours</label>
        <input
          type="number"
          id="duty_hours"
          name="duty_hours"
          placeholder="Enter Duty Hours Completed"
          min="0"
          value={duty_hours || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="pending">Pending</label>
        <input
          type="number"
          id="pending"
          name="pending"
          placeholder="Enter Pending Duty Hours"
          min="0"
          // max=
          value={pending || ''}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? 'Update' : 'Save'} />
        {isSuccessful && <p className="successfully-submitted-text">Saved Successfully</p>}
        {isError && <p className="failed-submitted-text">Error saving data</p>}
        <ToastContainer/>
      </form></div>
      <footer className="footer-admin">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AddEdit;
