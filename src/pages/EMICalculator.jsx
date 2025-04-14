// components/EMICalculator.js
import React, { useState } from "react";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseInt(tenure);

    if (!P || !R || !N) return;

    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiCalc.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-30 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Loan EMI Calculator
      </h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Interest Rate (Annual %)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Loan Tenure (in months)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={calculateEMI}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Calculate EMI
        </button>
        {emi && (
          <div className="mt-4 text-center text-green-700 font-semibold">
            Your EMI is ₹{emi} per month
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
