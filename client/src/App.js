import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Course";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
<<<<<<< HEAD
import Bar from "./components/Bar"
=======
import SIP from "./components/calculators/SIP";
import MF from "./components/calculators/MF";
import PPF from "./components/calculators/PPF";
>>>>>>> 61c8bb69a2b9a595c9b3b9ecdf07e2cd3cce6d6c
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/dashboard/courses" element={<Courses/>} />
          <Route path="/dashboard/portfolio" element={<Portfolio/>} />
          <Route path="/dashboard/leaderboard" element={<Bar/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sip" element={<SIP />} />
          <Route path="/mf" element={<MF />} />
          <Route path="/ppf" element={<PPF />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
