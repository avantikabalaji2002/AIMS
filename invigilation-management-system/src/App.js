import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";

import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Upload from "./components/admin/Upload";
import FacultyDetails from "./components/admin/FacultyDetails";
import Header from "./components/admin/Header";
import AddEdit from "./components/admin/AddEdit";
import FreeSlots from "./components/admin/FreeSlots";
import AdminLanding from "./components/admin/AdminLanding";
import AdminDashboard from "./components/admin/AdminDashboard";
import CoeUpload from "./components/COE/CoeUpload";
import Duty from "./components/COE/Duty";
import Dutytable from "./components/COE/Dutytable";
import Query from "./components/COE/Query";

import Hours from "./components/Faculty/Hours";
import Ticket from "./components/Faculty/Ticket";
import TimeTable from "./components/Faculty/TimeTable";
import Leave from "./components/Faculty/Leave";
import FacultyDashboard from "./components/Faculty/FacultyDashboard";
import CoeDashboard from "./components/COE/CoeDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<LandingPage />} />
          {/* ADMIN */}
          <Route path="/freeslots" element={<FreeSlots />} />
          <Route path="/AdminLanding" element={<AdminLanding />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/addEdit" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/FacultyDetails" element={<FacultyDetails />} />
          {/* COE */}
          <Route path="/Coedashboard" element={<CoeDashboard />} />
          <Route path="/COEUpload" element={<CoeUpload />} />
          <Route path="/Duty" element={<Duty />} />
          <Route path="/Dutytable" element={<Dutytable />} />
          <Route path="/update/:id" element={<Dutytable />} />
          <Route path="/Query" element={<Query />} />
          {/* Faculty */}
          <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
          <Route path="/Hours" element={<Hours />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/TimeTable" element={<TimeTable />} />
          <Route path="/Leave" element={<Leave />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
