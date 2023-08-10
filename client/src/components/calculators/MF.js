import React, { useState } from "react";
import "../../cssFiles/profile.css";
import Nav from "../Nav";
function MF() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(null);

  const calculateMutualFunds = () => {
    const yearlyRate = rate / 100;
    const totalYears = time;
    const futureValue = principal * Math.pow(1 + yearlyRate, totalYears);
    setResult(futureValue.toFixed(2));
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col pt-20 items-center justify-center section">
        <h1>Mutual Funds Calculator</h1>
        <div>
          <label>Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div>
          <label>Annual Growth Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div>
          <label>Investment Period (years):</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button onClick={calculateMutualFunds}>Calculate</button>
        {result && <div>Future Value: {result}</div>}
      </div>
    </>
  );
}

export default MF;
