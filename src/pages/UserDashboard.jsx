import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth functions

const UserDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(); // Get Firebase auth instance
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is logged out
      }
      setLoading(false); // Stop loading once auth state is checked
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading while checking auth state
  }

  return (
    <div className="text-center">
      <h3 className="text-3xl font-semibold text-gray-900 mb-8 mt-10 hover:text-purple-600 transition-colors duration-300 ease-in-out">
        You can also check here
      </h3>

      {isLoggedIn ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 m-5">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-3xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <Link to="/emi-calculator" className="w-full block text-center">
              EMI
            </Link>
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-3xl shadow-lg hover:from-emerald-600 hover:to-teal-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300">
            <Link to="/expense-tracker" className="w-full block text-center">
              Expense Tracker
            </Link>
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-3xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <Link to="/budget-planner" className="w-full block text-center">
              Budget Planner
            </Link>
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-3xl shadow-lg hover:from-emerald-600 hover:to-teal-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300">
            <Link to="/sip-calculator" className="w-full block text-center">
              Sip Calculator
            </Link>
          </button>
        </div>
      ) : (
        <p className="text-lg text-gray-600">
          Please log in to access these features.
        </p>
      )}
    </div>
  );
};

export default UserDashboard;
