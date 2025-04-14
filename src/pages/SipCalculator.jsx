import React, { useState } from "react";

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    const n = years * 12; // months
    const r = rate / 100 / 12; // monthly interest rate
    const fv = (monthlyInvestment * ((Math.pow(1 + r, n) - 1) * (1 + r))) / r;

    setFutureValue(fv.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (monthlyInvestment && years && rate) {
      calculateSIP();
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">SIP Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Monthly Investment (₹)</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">
            Investment Duration (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
      </form>

      {futureValue && (
        <div className="mt-6 bg-green-100 p-4 rounded text-green-800">
          <strong>Future Value:</strong> ₹{futureValue}
        </div>
      )}
    </div>
  );
};

export default SipCalculator;
