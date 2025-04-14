import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";
import UserDashboard from "./UserDashboard";

const Home = () => {
  const handleCall = () => {
    window.location.href = "tel:+917065650077";
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Helmet for SEO & Social Sharing */}
      <Helmet>
        <title>Home |PocketPulse</title>
        <meta
          name="description"
          content="Geet Enterprises - Your trusted partner in Private Funding & PDC Based Business Loans. Apply for instant loans, manage repayments, and stay financially organized."
        />
        <meta
          name="keywords"
          content="private loan, business loan, PDC loan, geet finance, financial support, instant loan, online loan application"
        />
        <meta name="author" content="Geet Enterprises" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Geet Enterprises - Private Funding Made Easy"
        />
        <meta
          property="og:description"
          content="Track loans, manage repayments, and apply for business funding with Geet Enterprises."
        />
        <meta property="og:url" content="https://geetenterprises.info" />
        <meta
          property="og:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Geet Enterprises - Fast & Secure Loans"
        />
        <meta
          name="twitter:description"
          content="Quick approval, flexible repayments, and transparent loan management – all in one place."
        />
        <meta
          name="twitter:image"
          content="https://geetenterprises.info/banner.png"
        />
        <meta name="twitter:url" content="https://geetenterprises.info" />

        <link rel="canonical" href="https://geetenterprises.info" />
      </Helmet>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold" title="Geet Enterprises">
          PocketPulse
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Private Funding & PDC Based Business Loan
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Easily track loans, manage repayments, and stay financially organized.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link to="/apply-loan">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition">
              Apply for Loan
            </button>
          </Link>
          <Link to="/feedback">
            <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
              Give Feedback
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Fast Loan Applications",
              desc: "Apply for a loan in just a few clicks.",
            },
            {
              title: "Track Your Repayments",
              desc: "Get automated reminders and stay updated.",
            },
            {
              title: "Secure & Transparent",
              desc: "All transactions are safe and well-documented.",
            },
            {
              title: "Easy Loan Management",
              desc: "Approve or reject loan requests easily.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "For Borrowers",
              steps: "1️⃣ Sign Up & Apply\n2️⃣ Get Approved\n3️⃣ Repay Easily",
            },
            {
              title: "For Lenders",
              steps:
                "1️⃣ Register & Browse Requests\n2️⃣ Approve Loans\n3️⃣ Receive Repayments",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="mt-2 whitespace-pre-line">{item.steps}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
          {[
            {
              quote:
                "Managing my loans has never been this easy! Highly recommended.",
              rating: "⭐⭐⭐⭐⭐",
            },
            {
              quote:
                "I can now track all my repayments in one place. Amazing tool!",
              rating: "⭐⭐⭐⭐⭐",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg max-w-sm"
            >
              <p className="italic">"{testimonial.quote}"</p>
              <p className="mt-2 font-semibold">{testimonial.rating}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center">
       <UserDashboard/>
      </div>

      {/* Contact & Social Links */}
      <footer className="bg-gray-900 text-white py-8 text-center px-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={30} className="hover:text-blue-400" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-pink-400" />
          </a>
          <a href="./" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="hover:text-green-400" />
          </a>
        </div>
        <div className="mt-4 text-gray-400">
          <p>
            📍 Address: 1234 Elm Street, Suite 500 Springfield, IL 62704 United
            States
          </p>
          <p
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={handleCall}
          >
            📞 Phone: +91 9999999999
          </p>
          <a href="./" className="text-blue-500 hover:underline">
            ✉️ Email: PocketPulse@gmail.com
          </a>
        </div>
        <p className="text-sm mt-4">
          Copyright © 2025 | Powered by{" "}
          <Link to="/" className="text-blue-500">
            PocketPulse
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
