import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import SIP from "./components/calculators/MF";
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
        </Routes>
      </div>
    </>
  );
}
export default App;
