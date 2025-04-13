import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await signOut(auth);
        navigate("/login"); // ya "/" if you want home redirect
      } catch (error) {
        console.error("Logout error:", error.message);
      }
    };

    doLogout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl font-medium">Logging out...</p>
    </div>
  );
};

export default Logout;
