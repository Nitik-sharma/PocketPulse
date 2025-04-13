import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import logo from "../assets/image/pocketLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const isAdmin = user?.email === "pocketpulse2001@gmail.com";

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Contact", to: "/contact" },
    { label: "Blog", to: "/blog" },
    { label: "EMI Calculator", to: "/emi-calculator" }, // ✅ EMI Calculator added
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center" title="Go to Home Page">
          <img
            src={logo}
            alt="PocketPulse Logo"
            className="h-18 w-auto"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`hover:underline hover:text-yellow-300 ${
                  link.label === "EMI Calculator"
                    ? "bg-white text-blue-700 px-3 py-1 rounded font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {isAdmin && (
            <li>
              <Link
                to="/admin-blog"
                className="hover:underline hover:text-yellow-300"
              >
                Post Blog
              </Link>
            </li>
          )}

          {!user ? (
            <>
              <li>
                <Link
                  to="/signup"
                  className="bg-green-400 text-blue-900 px-3 py-1 rounded hover:bg-green-300"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-300"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl mr-6 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 text-white p-4 space-y-2 absolute top-16 left-0 w-screen shadow-md z-50">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`block p-2 ${
                  link.label === "EMI Calculator"
                    ? "bg-white text-blue-700 rounded font-semibold text-center"
                    : "hover:bg-blue-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {isAdmin && (
            <li>
              <Link
                to="/blog-post"
                className="block p-2 hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Post Blog
              </Link>
            </li>
          )}

          {!user ? (
            <>
              <li>
                <Link
                  to="/signup"
                  className="block p-2 bg-green-400 text-blue-900 rounded text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block p-2 bg-yellow-400 text-blue-900 rounded text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full p-2 bg-red-500 text-white rounded text-center"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
