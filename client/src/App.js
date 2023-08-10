import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import SIP from "./components/calculators/SIP";
import MF from "./components/calculators/MF";
import PPF from "./components/calculators/PPF";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
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
