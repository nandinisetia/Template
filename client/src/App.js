import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Course";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/dashboard/courses" element={<Courses/>} />
          <Route path="/dashboard/portfolio" element={<Portfolio/>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
