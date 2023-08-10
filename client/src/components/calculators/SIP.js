import React, { useState } from "react";
import Nav from "../Nav";
import "../../cssFiles/profile.css";

function SIP() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = rate / 12 / 100;
    const totalMonths = time * 12;
    const futureValue =
      principal *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);
    setResult(futureValue.toFixed(2));
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col pt-20 items-center justify-center section">
        <h1>SIP Calculator</h1>
        <div>
          <label>Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className=""
          />
        </div>
        <div>
          <label>Time (years):</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button onClick={calculateSIP}>Calculate</button>
        {result && <div>Future Value: {result}</div>}
      </div>
    </>
  );
}

export default SIP;
