import React, { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const ApplyLoan = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    duration: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_gea2i47";
    const templateId = "template_yns84d7";
    const publicKey = "hiLMTs0JNE3laF7_D";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      amount: formData.amount,
      duration: formData.duration,
      reason: formData.reason,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully:", response);
      alert("Loan application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        amount: "",
        duration: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit the loan application.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-8 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-xl shadow-xl">
      {/* SEO Helmet */}
      <Helmet>
        <title>Apply for a Loan | PocketPulse</title>
        <meta
          name="description"
          content="Apply for a private loan online with PocketPulse. Quick approval, low interest rates, and simple documentation."
        />
        <meta
          name="keywords"
          content="apply loan, online loan, private loan, personal loan, funding, finance, PocketPulse"
        />
        <meta name="author" content="PocketPulse" />
        {/* Canonical Link */}
        <link rel="canonical" href="https://pocketpulse.info/apply" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="Apply for a Loan - PocketPulse" />
        <meta
          property="og:description"
          content="Quick and secure online loan application. Get funding with ease from PocketPulse."
        />
        <meta property="og:url" content="https://pocketpulse.info/apply" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pocketpulse.info/banner.png"
        />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Apply for a Loan - PocketPulse" />
        <meta
          name="twitter:description"
          content="Quick and secure online loan application. Get funding with ease from PocketPulse."
        />
        <meta name="twitter:url" content="https://pocketpulse.info/apply" />
        <meta
          name="twitter:image"
          content="https://pocketpulse.info/banner.png"
        />
      </Helmet>

      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Apply for a Loan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-gray-900"
            required
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-gray-900"
            required
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-gray-900"
            required
            pattern="[0-9]{10}"
            maxLength="10"
          />
        </div>

        <div className="relative">
          <input
            type="number"
            name="amount"
            placeholder="Loan Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-gray-900"
            required
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="duration"
            placeholder="Duration (Months)"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-gray-900"
            required
          />
        </div>

        <div className="relative">
          <textarea
            name="reason"
            placeholder="Reason for Loan"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm text-gray-900"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition ease-in-out duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
