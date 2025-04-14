import React, { useState } from "react";
import { db, collection, addDoc } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const BudgetPlanner = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([{ name: "", amount: "" }]);
  const [user] = useAuthState(auth);

  const handleExpenseChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    setExpenses(updatedExpenses);
  };

  const addExpenseField = () => {
    setExpenses([...expenses, { name: "", amount: "" }]);
  };

  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount || 0),
    0
  );
  const remainingBudget = income - totalExpenses;

  const handleSave = async () => {
    if (!income || totalExpenses === 0 || !user) {
      alert("Fill all fields and login to save.");
      return;
    }

    try {
      await addDoc(collection(db, "budgetPlans"), {
        user: user.email,
        income: Number(income),
        expenses,
        totalExpenses,
        remainingBudget,
        createdAt: new Date(),
      });
      alert("Budget plan saved!");
    } catch (error) {
      console.error("Error saving budget:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4">Budget Planner</h2>

      <label className="block mb-2 font-medium">Monthly Income</label>
      <input
        type="number"
        className="w-full p-2 border rounded mb-4"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />

      {expenses.map((exp, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Expense Name"
            className="w-1/2 p-2 border rounded"
            value={exp.name}
            onChange={(e) => handleExpenseChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-1/2 p-2 border rounded"
            value={exp.amount}
            onChange={(e) =>
              handleExpenseChange(index, "amount", e.target.value)
            }
          />
        </div>
      ))}

      <button
        onClick={addExpenseField}
        className="bg-blue-500 text-white px-4 py-1 rounded mb-4"
      >
        + Add Expense
      </button>

      <div className="mb-4">
        <p>
          <strong>Total Expenses:</strong> ₹{totalExpenses}
        </p>
        <p>
          <strong>Remaining Budget:</strong> ₹{remainingBudget}
        </p>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
      >
        Save Budget Plan
      </button>
    </div>
  );
};

export default BudgetPlanner;
