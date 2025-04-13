// src/components/ProtectedAdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; // adjust path if needed

const ProtectedAdminRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  // ✅ Check if user is logged in and is the specific admin
  if (user?.email === "pocketpulse2001@gmail.com") {
    return children;
  } else {
    alert("Access Denied! Only Admin can view this page.");
    return <Navigate to="/login" />;
  }
};

export default ProtectedAdminRoute;
