import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
//import loginIcon from "./login-logo.png";


import InputControl from "../admin/InputControl/InputControl";
import { auth } from "../../Firebase";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  }
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        // Handle different role-specific redirects or actions
        if (selectedRole === "admin") {
          navigate("../AdminDashboard");
        } else if (selectedRole === "faculty") {
          // Redirect to user dashboard
          navigate("/Facultydashboard");
        } else if (selectedRole === "coe") {
          // Redirect to guest dashboard
          navigate("/CoeDashboard");
        } else {
          // Handle unrecognized role
          setErrorMsg("Invalid role");
        }
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="login-page">
      <header className="header">
        <h2 className="logo">
          <img src="./exam-logo.png" alt="AIMS Logo" className="logo-image" />
          Amrita Invigilation Management System
        </h2>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/login">Admin</a>
          <a href="/login">Faculty</a>
          <a href="/login">COE</a>

        </nav>
      </header>

      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>LOGIN</h1>

          {selectedRole && (
            <>
              <InputControl
                label="Email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                placeholder="Enter email address"
              />
              <InputControl
                label="Password"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                placeholder="Enter Password"
              />

              <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button
                  disabled={submitButtonDisabled}
                  onClick={handleSubmission}
                >
                  Login
                </button>
                <button onClick={handleGoBack}>Back to Home</button>

              </div>
            </>
          )}

          {!selectedRole && (
            <div className={styles.roleSelection}>
              <h2>Select Role:</h2>
              <button
                className={styles.button}
                onClick={() => handleRoleSelection("admin")}
              >
                Admin
              </button>
              <button
                className={styles.button}
                onClick={() => handleRoleSelection("faculty")}
              >
                Faculty
              </button>
              <button
                className={styles.button}
                onClick={() => handleRoleSelection("coe")}
              >
                COE
              </button>
            </div>
          )}
        </div>
      </div>
      <footer className="footer-1">
        <p>&copy; 2023 Invigilation Management System. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Login;
