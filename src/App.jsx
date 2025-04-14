import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import Router components
import Features from "./pages/Feature";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import HowItWorks from "./pages/Work";
import Testimonials from "./pages/Testinomial";
import Contact from "./pages/Contact";
import "./App.css";
import ApplyLoan from "./pages/ApplyLoan";
import SignUp from "./pages/SignUp";
import FeedbackForm from "./pages/Feedback";
import { Helmet } from "react-helmet";
import BlogPost from "./pages/Blog-Post";
import Login from "./pages/LoginPage";
import ProtectedAdminRoute from "./pages/ProtectedAdminRoute";
import Blog from "./pages/Blog";
import Logout from "./pages/Logout";
import EMICalculator from "./pages/EMICalculator";
import ExpenseTracker from "./pages/Expense";
import BudgetPlanner from "./pages/BudgetPlanner";
import SipCalculator from "./pages/SipCalculator";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Pocket Pulse</title>
        <meta
          name="description"
          content="Geet Enterprises - Secure and instant online loan solutions."
        />
        <meta
          name="keywords"
          content="online loans, instant approval, Geet Enterprises, apply loan"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Geet Enterprises - Secure and instant online loan solutions."
        />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route
          path="/admin-blog"
          element={
            <ProtectedAdminRoute>
              <BlogPost />
            </ProtectedAdminRoute>
          }
        />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/budget-planner" element={<BudgetPlanner />} />
        <Route path="/sip-calculator" element={<SipCalculator />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
