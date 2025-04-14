import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ExpenseTracker = () => {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) fetchExpenses(currentUser.uid);
    });
    return () => unsubscribe();
  }, []);

  const fetchExpenses = async (userId) => {
    const q = query(collection(db, "expenses"), where("userId", "==", userId));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setExpenses(data);
  };

  const handleAddExpense = async (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !user) return;

    await addDoc(collection(db, "expenses"), {
      title,
      amount: parseFloat(amount),
      category,
      date: new Date(),
      userId: user.uid,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    fetchExpenses(user.uid);
  };

  return (
    <div className="max-w-lg mx-auto mt-30 bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <form onSubmit={handleAddExpense} className="space-y-4">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Expense
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Your Expenses</h3>
        <ul className="space-y-2">
          {expenses.map((exp) => (
            <li
              key={exp.id}
              className="border p-2 rounded flex justify-between"
            >
              <span>
                {exp.title} - ₹{exp.amount}
              </span>
              <span className="text-sm text-gray-500">{exp.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
